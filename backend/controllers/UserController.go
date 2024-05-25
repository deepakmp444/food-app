package controller

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/deepakmp444/food-app/backend/middleware"
	"github.com/deepakmp444/food-app/backend/model"
	"github.com/deepakmp444/food-app/backend/service"
	"github.com/deepakmp444/food-app/backend/util"
	"github.com/golang-jwt/jwt/v5"
)

func UserController(w http.ResponseWriter, r *http.Request) {
	var user model.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		log.Fatal(err)
	}
	userData, err := service.UserService(user)
	if err != nil {
		log.Fatal(err)
		util.JsonResponse(w, http.StatusInternalServerError, model.Response{Message: "Internal server Errror", Status: false, Data: nil})
	}

	user.ID = userData
	user.Password = ""

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	util.JsonResponse(w, http.StatusOK, model.Response{Message: "Successfully added", Status: true, Data: user})

}

func UserLoginController(w http.ResponseWriter, r *http.Request) {
	var userLoginData map[string]string
	err := json.NewDecoder(r.Body).Decode(&userLoginData)
	if err != nil {
		log.Fatal(err)
	}

	// Check if userLoginData is empty or missing required fields
	if len(userLoginData) == 0 || userLoginData["email"] == "" || userLoginData["password"] == "" {
		util.JsonResponse(w, http.StatusBadRequest, model.Response{Message: "Email and password are required for login", Status: false, Data: nil})
		return
	}

	userData, err := service.UserLoginService(userLoginData)

	if err != nil {
		fmt.Println(err)
		util.JsonResponse(w, http.StatusBadRequest, model.Response{Message: err.Error(), Status: false, Data: nil})
		return
	}

	tokenString, err := util.CreateToken(userData)
	if err != nil {
		util.JsonResponse(w, http.StatusInternalServerError, model.Response{Message: "Error creating token", Status: true, Data: nil})
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
	util.JsonResponse(w, http.StatusOK, model.Response{Message: "Login Successfully", Status: true, Data: userData})
}

// Controller function for fetching all users
func AllUsersController(w http.ResponseWriter, r *http.Request) {
	// Retrieve isLoggedIn status from the request context using custom context key
	isLoggedIn := r.Context().Value(middleware.KeyToken)

	if isLoggedIn != nil {
		token, ok := isLoggedIn.(*jwt.Token)
		if !ok {
			util.JsonResponse(w, http.StatusUnauthorized, model.Response{Message: "Invalid token", Status: false, Data: nil})
			return
		}

		// If the token is valid, you can access its claims
		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok || !token.Valid {
			util.JsonResponse(w, http.StatusUnauthorized, model.Response{Message: "Invalid token", Status: false, Data: nil})
			return
		}

		fmt.Println(claims["aud"].(map[string]interface{})["email"].(string))
	}
	// Your logic for fetching all users goes here
	userData, err := service.AllUsersService()
	if err != nil {
		util.JsonResponse(w, http.StatusOK, model.Response{Message: "Errors getting data", Status: false, Data: nil})
		return
	}
	// No need to set headers or write response code here
	util.JsonResponse(w, http.StatusOK, model.Response{Message: "All Users", Status: true, Data: userData})
}

func AllOrderListController(w http.ResponseWriter, r *http.Request) {

	// Your logic for fetching all users goes here
	userData, err := service.AllOrderListService()
	if err != nil {
		util.JsonResponse(w, http.StatusOK, model.Response{Message: "Errors getting data", Status: false, Data: nil})
		return
	}
	// No need to set headers or write response code here
	util.JsonResponse(w, http.StatusOK, model.Response{Message: "All Users", Status: true, Data: userData})
}
