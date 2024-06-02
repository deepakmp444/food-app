package userauth

import (
	"net/http"

	"github.com/deepakmp444/food-app/backend/middleware"
	"github.com/gorilla/mux"
)

func UserRouter(route *mux.Router) {
	route.HandleFunc("/api/user", UserController).Methods("POST")
	route.HandleFunc("/api/login", UserLoginController).Methods("POST")
	route.Handle("/api/user", middleware.IsLoggedIn(http.HandlerFunc(AllUsersController))).Methods("GET")
	route.HandleFunc("/api/zomato", AllOrderListController).Methods("GET")
}
