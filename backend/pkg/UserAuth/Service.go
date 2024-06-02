package userauth

import (
	"context"
	"errors"

	// "fmt"

	"github.com/deepakmp444/food-app/backend/config"
	userauth "github.com/deepakmp444/food-app/backend/pkg/UserAuth"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func UserService(user userauth.User) (primitive.ObjectID, error) {
	return userauth.UserDataLayer(context.Background(), config.MongoDB, user)
}

func UserLoginService(userLoginData map[string]string) (userauth.User, error) {
	userData, err := userauth.GetUserByEmail(context.Background(), config.MongoDB, userLoginData["email"])

	if userLoginData["password"] == userData.Password {
		userData.Password = ""
		return userData, err
	} else {
		return userauth.User{}, errors.New("credential wrong")
	}
}

func AllUsersService() ([]primitive.M, error) {
	return userauth.AllUsersDataLayer(context.Background(), config.MongoDB)
}

func AllOrderListService() ([]primitive.M, error) {
	return userauth.AllOrderListDataLayer(context.Background(), config.MongoDB)
}
