package userauth

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/deepakmp444/food-app/backend/middleware"
	responsejson "github.com/deepakmp444/food-app/backend/pkg/ResponseJson"
	"github.com/deepakmp444/food-app/backend/util"
	"github.com/golang-jwt/jwt/v5"
)

func UserController(w http.ResponseWriter, r *http.Request) {
	var user User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		log.Println("Error decoding user data:", err)
		responsejson.JsonResponse(w, http.StatusBadRequest, responsejson.Response{Message: "Invalid input", Status: false, Data: nil})
		return
	}

	userData, err := UserService(user)
	if err != nil {
		log.Println("Error in UserService:", err)
		responsejson.JsonResponse(w, http.StatusInternalServerError, responsejson.Response{Message: "Internal server error", Status: false, Data: nil})
		return
	}

	user.ID = userData
	user.Password = ""

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	responsejson.JsonResponse(w, http.StatusOK, responsejson.Response{Message: "Successfully added", Status: true, Data: user})
}

func UserLoginController(w http.ResponseWriter, r *http.Request) {
	var userLoginData map[string]string
	if err := json.NewDecoder(r.Body).Decode(&userLoginData); err != nil {
		log.Println("Error decoding login data:", err)
		responsejson.JsonResponse(w, http.StatusBadRequest, responsejson.Response{Message: "Invalid input", Status: false, Data: nil})
		return
	}

	if userLoginData["email"] == "" || userLoginData["password"] == "" {
		responsejson.JsonResponse(w, http.StatusBadRequest, responsejson.Response{Message: "Email and password are required", Status: false, Data: nil})
		return
	}

	userData, err := UserLoginService(userLoginData)
	if err != nil {
		log.Println("Error in UserLoginService:", err)
		responsejson.JsonResponse(w, http.StatusBadRequest, responsejson.Response{Message: err.Error(), Status: false, Data: nil})
		return
	}

	tokenString, err := util.CreateToken(userData)
	if err != nil {
		log.Println("Error creating token:", err)
		responsejson.JsonResponse(w, http.StatusInternalServerError, responsejson.Response{Message: "Error creating token", Status: false, Data: nil})
		return
	}

	cookie := http.Cookie{
		Name:     "token",
		Value:    tokenString,
		Path:     "/",
		MaxAge:   3600,
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteLaxMode,
	}
	http.SetCookie(w, &cookie)
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	responsejson.JsonResponse(w, http.StatusOK, responsejson.Response{Message: "Login successfully", Status: true, Data: userData})
}

func AllUsersController(w http.ResponseWriter, r *http.Request) {
	isLoggedIn := r.Context().Value(middleware.KeyToken)
	if isLoggedIn != nil {
		token, ok := isLoggedIn.(*jwt.Token)
		if !ok || !token.Valid {
			responsejson.JsonResponse(w, http.StatusUnauthorized, responsejson.Response{Message: "Invalid token", Status: false, Data: nil})
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			responsejson.JsonResponse(w, http.StatusUnauthorized, responsejson.Response{Message: "Invalid token claims", Status: false, Data: nil})
			return
		}

		fmt.Println(claims["aud"].(map[string]interface{})["email"].(string))
	}

	userData, err := AllUsersService()
	if err != nil {
		log.Println("Error in AllUsersService:", err)
		responsejson.JsonResponse(w, http.StatusInternalServerError, responsejson.Response{Message: "Error fetching data", Status: false, Data: nil})
		return
	}
	responsejson.JsonResponse(w, http.StatusOK, responsejson.Response{Message: "All users", Status: true, Data: userData})
}

func AllOrderListController(w http.ResponseWriter, r *http.Request) {
	userData, err := AllOrderListService()
	if err != nil {
		log.Println("Error in AllOrderListService:", err)
		responsejson.JsonResponse(w, http.StatusInternalServerError, responsejson.Response{Message: "Error fetching data", Status: false, Data: nil})
		return
	}
	responsejson.JsonResponse(w, http.StatusOK, responsejson.Response{Message: "All orders", Status: true, Data: userData})
}
