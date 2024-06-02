package config

import (
    "context"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

var MongoDB *mongo.Database

func ConnectMongoDB() error {
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
    client, err := mongo.Connect(context.Background(), clientOptions)
    if err != nil {
        return err
    }

    err = client.Ping(context.Background(), nil)
    if err != nil {
        return err
    }

    MongoDB = client.Database("Gullar")
    return nil // Return nil if connection is successful
}