package util

// Import the required packages
import (
	"fmt"
	"time"
	// "net/http"
	// "strconv"
	"github.com/golang-jwt/jwt/v5"
)
// Add a new global variable for the secret key
var secretKey = []byte("your-secret-key")

// Function to create JWT tokens with claims
func CreateToken(username interface{}) (string, error) {
    // Create a new JWT token with claims
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": username,                    // Subject (user identifier)
		"iss": "todo-app",                  // Issuer
		"aud": username,           // Audience (user role)
		"exp": time.Now().Add(time.Hour).Unix(), // Expiration time
		"iat": time.Now().Unix(),                 // Issued at
	})

	tokenString, err := claims.SignedString(secretKey)
    if err != nil {
        return "", err
    }
	

  // Print information about the created token
	fmt.Printf("Token claims added: %+v\n", claims)
	return tokenString, nil
}
