package router

import (
	"context"
	"net/http"

	"github.com/deepakmp444/food-app/backend/controller"
	"github.com/deepakmp444/food-app/backend/middleware"
	"github.com/gorilla/mux"
)

// Define a custom type for context key
type contextKey string

// Define context keys
const (
	keyIsLoggedIn contextKey = "isLoggedIn"
)

// Middleware function to check if the user is logged in
func isLoggedIn(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Check if the user is logged in (You can implement your logic here)
		isLoggedIn := true

		// Add isLoggedIn status to the request context using custom context key
		ctx := r.Context()
		ctx = context.WithValue(ctx, keyIsLoggedIn, isLoggedIn)
		r = r.WithContext(ctx)

		if !isLoggedIn {
			// If the user is not logged in, return unauthorized status
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		// Call the next handler
		next.ServeHTTP(w, r)
	})
}

// Controller function for fetching all users
func allUsersController(w http.ResponseWriter, r *http.Request) {
	// Retrieve isLoggedIn status from the request context using custom context key
	isLoggedIn := r.Context().Value(keyIsLoggedIn).(bool)

	// Your logic for fetching all users goes here
	if isLoggedIn {
		w.Write([]byte("List of all users"))
	} else {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
	}
}

func UserRouter(route *mux.Router) {
	route.HandleFunc("/api/user", controller.UserController).Methods("POST")
	route.HandleFunc("/api/login", controller.UserLoginController).Methods("POST")
	route.HandleFunc("/api/user", middleware.IsLoggedIn(controller.AllUsersController)).Methods("GET")
	route.HandleFunc("/api/zomato", controller.AllOrderListController).Methods("GET")
}
