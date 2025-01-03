package model

type TodoSearchParams struct {
	ID             *uint   `query:"id"`
	PartCategory  *string `query:"part_category"`
	PartType      *string `query:"part_type"`
	PartName	  *string `query:"part_name"`
	Brand         *string `query:"brand"`
	Name          *string `query:"name"`
	NumOfSticks   *string `query:"num_of_sticks"`
	StickCapacity *string `query:"stick_capacity"`
	Capacity      *string `query:"capacity"`
	
}

type Todo struct {
	ID            uint   `query:"id"`
	PartCategory  string `query:"part_category"`
	PartType      string `query:"part_type"`
	PartName	  string `query:"part_name"`
	Brand         string `query:"brand"`
	Name          string `query:"name"`
	NumOfSticks   string `query:"num_of_sticks"`
	StickCapacity string `query:"stick_capacity"`
	Capacity      string `query:"capacity"`
	
}

type UpdateTodo struct {
	ID            *uint   `query:"id"`
	PartCategory  *string `query:"part_category"`
	PartType      *string `query:"part_type"`
	PartName	  *string `query:"part_name"`
	Brand         *string `query:"brand"`
	Name          *string `query:"name"`
	NumOfSticks   *string `query:"num_of_sticks"`
	StickCapacity *string `query:"stick_capacity"`
	Capacity      *string `query:"capacity"`
	
}
