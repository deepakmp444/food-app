package service

import (
	"context"
	"errors"

	// "fmt"

	"github.com/deepakmp444/food-app/backend/config"
	"github.com/deepakmp444/food-app/backend/datalayer"
	"github.com/deepakmp444/food-app/backend/model"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func UserService(user model.User) (primitive.ObjectID, error) {
	return datalayer.UserDataLayer(context.Background(), config.MongoDB, user)
}

func UserLoginService(userLoginData map[string]string) (model.User, error) {
	userData, err := datalayer.GetUserByEmail(context.Background(), config.MongoDB, userLoginData["email"])

	if userLoginData["password"] == userData.Password {
		userData.Password = ""
		return userData, err
	} else {
		return model.User{}, errors.New("credential wrong")
	}
}

func AllUsersService() ([]primitive.M, error) {
	return datalayer.AllUsersDataLayer(context.Background(), config.MongoDB)
}

func AllOrderListService() ([]primitive.M, error) {
	return datalayer.AllOrderListDataLayer(context.Background(), config.MongoDB)
}
