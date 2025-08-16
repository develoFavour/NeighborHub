package auth

import (
	"context"
	"neighborhood-hub-backend/pkg/database"
	"neighborhood-hub-backend/pkg/models"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

func RegisterUser(r *gin.Engine) {
	r.POST("/register", func(c *gin.Context) {
		var user models.User
		if err := c.BindJSON(&user); err != nil {
			http.Error(c.Writer, "invalid json payload", http.StatusBadRequest)
			return
		}
		collections := database.DB.Collection("users")
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		var existingUser models.User
		err := collections.FindOne(ctx, bson.M{"email": user.Email}).Decode(&existingUser)
		if err != nil {
			http.Error(c.Writer, "User already exists", http.StatusInternalServerError)
			return
		}

	})

}
