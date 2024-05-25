package main

import (
	"log"
	"net/http"

	"github.com/deepakmp444/food-app/backend/config"
	// "github.com/deepakmp444/food-app/backend/middleware"
	"github.com/deepakmp444/food-app/backend/router"
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

	router.UserRouter(r)

	log.Fatal(http.ListenAndServe(":4001", r))
}
