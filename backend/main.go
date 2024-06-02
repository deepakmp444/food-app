package main

import (
	"log"
	"net/http"

	"github.com/deepakmp444/food-app/backend/config"
	userauth "github.com/deepakmp444/food-app/backend/pkg/UserAuth"
	// "github.com/deepakmp444/food-app/backend/middleware"
	"github.com/gorilla/mux"
)

func main() {
	err := config.ConnectMongoDB()
	if err != nil {
		log.Fatal("Failed to connect to MongoDB:", err)
	}
	log.Println("Connected to MongoDB successfully!")

	r := mux.NewRouter()

	// r.Use(middleware.ErrorHandler)

	userauth.UserRouter(r)

	log.Fatal(http.ListenAndServe(":4000", r))
}
