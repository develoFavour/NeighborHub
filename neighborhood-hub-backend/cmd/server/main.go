package main

import (
	"neighborhood-hub-backend/pkg/database"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	database.ConnectToDB()
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Hello from Gin!"})
	})
	r.Run(":8080")
}
