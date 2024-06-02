package userauth

import (
	"context"
	"errors"

	"github.com/deepakmp444/food-app/backend/config"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func UserService(user User) (primitive.ObjectID, error) {
	return UserDataLayer(context.Background(), config.MongoDB, user)
}

func UserLoginService(userLoginData map[string]string) (User, error) {
	userData, err := GetUserByEmail(context.Background(), config.MongoDB, userLoginData["email"])

	if userLoginData["password"] == userData.Password {
		userData.Password = ""
		return userData, err
	}
	return User{}, errors.New("invalid credentials")
}

func AllUsersService() ([]primitive.M, error) {
	return AllUsersDataLayer(context.Background(), config.MongoDB)
}

func AllOrderListService() ([]primitive.M, error) {
	return AllOrderListDataLayer(context.Background(), config.MongoDB)
}
