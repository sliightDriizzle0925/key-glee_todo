package handler

import (
	"github.com/keyglee/assessment/lib/database"
	"github.com/keyglee/assessment/lib/logger"
	"github.com/keyglee/assessment/lib/todo/model"
	"github.com/keyglee/assessment/lib/todo/repository"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
)

type Handler struct {
	TodoRepository *repository.TodoRepository
	logger         *logrus.Logger
}

func initializeDBForInterview(db *gorm.DB) {
	err := db.AutoMigrate(&model.Todo{})
	if err != nil {
		panic(err)
	}

	repo := repository.NewTodoRepository(db)

	todos, _ := repo.Search(&model.TodoSearchParams{})
	if len(todos) > 0 {
		return
	}

}

func NewHandler() *Handler {
	db := database.GetDatabaseConnection()

	initializeDBForInterview(db)

	return &Handler{
		TodoRepository: repository.NewTodoRepository(db),
		logger:         logger.NewLogger(),
	}
}
