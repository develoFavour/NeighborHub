package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var DB *mongo.Database

func ConnectToDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	const uri = "mongodb+srv://opiafavour10:F1234567a@go-cluster.qxyucvk.mongodb.net/"
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatal("Failed to connect to mongodb", err)
	}
	DB = client.Database("neigborhub-db")
	fmt.Println("Connected to mongoDB")
}
