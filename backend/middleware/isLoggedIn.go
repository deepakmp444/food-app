package middleware

import (
	"context"
	// "fmt"
	"net/http"

	"github.com/deepakmp444/food-app/backend/util"
)

type ContextKey string

// Define context keys
const (
	KeyIsLoggedIn ContextKey = "isLoggedIn"
	KeyToken      ContextKey = "token"
)

func IsLoggedIn(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Simulate that the user is logged in (You can replace it with your actual logic)
		isLoggedIn := true

		// Verify the token
		tokenString, err := util.GetToken(r)

		if err != nil {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		// Parse the token string to a JWT token
		token, err := util.VerifyToken(tokenString)
		if err != nil {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}
		// Add isLoggedIn status and token to the request context using custom context keys
		ctx := r.Context()
		ctx = context.WithValue(ctx, KeyIsLoggedIn, isLoggedIn)
		ctx = context.WithValue(ctx, KeyToken, token)
		r = r.WithContext(ctx)

		// Call the next handler
		next(w, r)
	}
}
