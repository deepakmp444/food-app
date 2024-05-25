package util

import (
	"net/http"
)

func GetToken(r *http.Request) (string, error) {
	// Retrieve the cookie named "token" from the request
	cookie, err := r.Cookie("token")
	if err != nil {
		return "", err
	}
	return cookie.Value, nil
}
