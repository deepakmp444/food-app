package datalayer

import (
	"context"
	"errors"

	// "fmt"
	"log"

	"github.com/deepakmp444/food-app/backend/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func UserDataLayer(ctx context.Context, db *mongo.Database, user model.User) (primitive.ObjectID, error) {
	// Insert the user document into the "users" collection
	result, err := db.Collection("users").InsertOne(ctx, user)
	if err != nil {
		// If there's an error during insertion, return it
		return primitive.NilObjectID, errors.New("inserted ID is not of type primitive.ObjectID")
	}

	// Extract and return the ID of the inserted document
	insertedID, ok := result.InsertedID.(primitive.ObjectID)
	if !ok {
		// If the inserted ID is not of type primitive.ObjectID, return an error
		return primitive.NilObjectID, errors.New("inserted ID is not of type primitive.ObjectID")
	}
	return insertedID, nil
}

func GetUserByEmail(ctx context.Context, db *mongo.Database, email string) (model.User, error) {

	var user model.User
	err := db.Collection("users").FindOne(context.Background(), bson.M{"email": email}).Decode(&user)
	if err != nil {
		return model.User{}, err
	}

	return user, nil
}

func AllUsersDataLayer(ctx context.Context, db *mongo.Database) ([]primitive.M, error) {

	cur, err := db.Collection("users").Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var users []primitive.M
	for cur.Next(context.Background()) {
		var user bson.M
		err := cur.Decode(&user)
		if err != nil {
			log.Fatal(err)
		}
		users = append(users, user)
	}
	defer cur.Close(context.Background())
	return users, nil
}

func AllOrderListDataLayer(ctx context.Context, db *mongo.Database) ([]primitive.M, error) {

	cur, err := db.Collection("list").Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var users []primitive.M
	for cur.Next(context.Background()) {
		var user bson.M
		err := cur.Decode(&user)
		if err != nil {
			log.Fatal(err)
		}
		users = append(users, user)
	}
	// fmt.Println(users)
	defer cur.Close(context.Background())
	return users, nil
}
