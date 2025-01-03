package repository

import (
	"github.com/keyglee/assessment/lib/todo/model"
	"gorm.io/gorm"
)

type TodoRepository struct {
	db *gorm.DB
}

func NewTodoRepository(db *gorm.DB) *TodoRepository {
	return &TodoRepository{db}
}

func (tr *TodoRepository) Search(search *model.TodoSearchParams) ([]*model.Todo, error) {
	var todos []*model.Todo
	query := tr.db.Model(&model.Todo{})
	if search.ID != nil {
		query = query.Where("id = ?", *search.ID)
	}
	if search.PartCategory != nil {
		query = query.Where("part_category = ?", *search.PartCategory)
	}
	if search.PartName != nil {
		query = query.Where("part_name = ?", *search.PartName)
	}
	if search.Brand != nil {
		query = query.Where("brand = ?", *search.Brand)
	}
	if search.Name != nil {
	query = query.Where("name = ?", *search.Name)
	}
	if search.NumOfSticks != nil {
	query = query.Where("num_of_sticks = ?", *search.NumOfSticks)
	}
	if search.StickCapacity != nil {
	query = query.Where("stick_capacity = ?", *search.StickCapacity)
	}
	if search.Capacity != nil {
	query = query.Where("capacity = ?", *search.Capacity)
	}
	if search.PartType != nil {
	query = query.Where("part_type = ?", *search.PartType)
	}

	result := query.Find(&todos)
	if result.Error != nil {
		return nil, result.Error
	}
	return todos, nil
}

func (tr *TodoRepository) GetByID(todoID uint) (*model.Todo, error) {
	var todo model.Todo
	result := tr.db.Where("id =?", todoID).First(&todo)
	if result.Error != nil {
		return nil, result.Error
	}

	return &todo, nil
}

func (tr *TodoRepository) Create(todo *model.Todo) error {
	result := tr.db.Create(&todo)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (tr *TodoRepository) Update(todo *model.Todo, update *model.UpdateTodo) error {
	result := tr.db.Model(&todo).Updates(update)

	if result.Error != nil {
		return result.Error
	}
	return nil
}

func (tr *TodoRepository) Delete(todo *model.Todo) error {
	result := tr.db.Delete(todo)

	if result.Error != nil {
		return result.Error
	}
	return nil
}
