package userauth

import (
	"context"
	"errors"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func UserDataLayer(ctx context.Context, db *mongo.Database, user User) (primitive.ObjectID, error) {
	result, err := db.Collection("users").InsertOne(ctx, user)
	if err != nil {
		log.Println("Error inserting user:", err)
		return primitive.NilObjectID, errors.New("could not insert user")
	}

	insertedID, ok := result.InsertedID.(primitive.ObjectID)
	if !ok {
		log.Println("Inserted ID is not of type primitive.ObjectID")
		return primitive.NilObjectID, errors.New("inserted ID is not of type primitive.ObjectID")
	}
	return insertedID, nil
}

func GetUserByEmail(ctx context.Context, db *mongo.Database, email string) (User, error) {
	var user User
	if err := db.Collection("users").FindOne(ctx, bson.M{"email": email}).Decode(&user); err != nil {
		log.Println("Error finding user by email:", err)
		return User{}, err
	}
	return user, nil
}

func AllUsersDataLayer(ctx context.Context, db *mongo.Database) ([]primitive.M, error) {
	cur, err := db.Collection("users").Find(ctx, bson.D{{}})
	if err != nil {
		log.Println("Error finding all users:", err)
		return nil, err
	}
	defer cur.Close(ctx)

	var users []primitive.M
	if err := cur.All(ctx, &users); err != nil {
		log.Println("Error decoding all users:", err)
		return nil, err
	}
	return users, nil
}

func AllOrderListDataLayer(ctx context.Context, db *mongo.Database) ([]primitive.M, error) {
	cur, err := db.Collection("list").Find(ctx, bson.D{{}})
	if err != nil {
		log.Println("Error finding all orders:", err)
		return nil, err
	}
	defer cur.Close(ctx)

	var orders []primitive.M
	if err := cur.All(ctx, &orders); err != nil {
		log.Println("Error decoding all orders:", err)
		return nil, err
	}
	return orders, nil
}
