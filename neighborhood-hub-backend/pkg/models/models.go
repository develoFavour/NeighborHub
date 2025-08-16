package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID         primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Email      string             `bson:"email" json:"email" validate:"required,email"`
	Password   string             `bson:"password" json:"-"`
	Name       string             `bson:"name" json:"name" validate:"required"`
	Location   Location           `bson:"location" json:"location"`
	TrustScore float64            `bson:"trust_score" json:"trust_score"`
	IsVerified bool               `bson:"is_verified" json:"is_verified"`
	CreatedAt  time.Time          `bson:"created_at" json:"created_at"`
	UpdatedAt  time.Time
}

type Location struct {
	Address   string  `bson:"address" json:"address"`
	Latitude  float64 `bson:"latitude" json:"latitude"`
	Longitude float64 `bson:"longitude" json:"longitude"`
}
