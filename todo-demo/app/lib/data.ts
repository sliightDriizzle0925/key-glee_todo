"use server";

export async function FetchOrderedParts() {
  fetch("http://localhost:4000/todos")
    .then((response) => response.json())
    .then((data) => {
      return JSON.stringify(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
export async function OrderCPU(partData) {
  const newData = {
    part_category: "CPU",
    brand: partData.get("brand"),
    name: partData.get("name"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderCase(partData) {
  const newData = {
    part_category: "Case",
    brand: partData.get("brand"),
    name: partData.get("name"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderCooling(partData) {
  const newData = {
    part_category: "Cooling",
    brand: partData.get("brand"),
    name: partData.get("name"),
    part_type: partData.get("type"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderGPU(partData) {
  const newData = {
    part_category: "GPU",
    brand: partData.get("brand"),
    name: partData.get("name"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderMOBO(partData) {
  const newData = {
    part_category: "MOBO",
    brand: partData.get("brand"),
    name: partData.get("name"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderOS(partData) {
  const newData = {
    part_category: "OS",
    brand: partData.get("brand"),
    name: partData.get("name"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderPSU(partData) {
  const newData = {
    part_category: "PSU",
    brand: partData.get("brand"),
    name: partData.get("name"),
    part_type: partData.get("type"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderRAM(partData) {
  const newData = {
    part_category: "RAM",
    brand: partData.get("brand"),
    name: partData.get("name"),
    stick_capacity: partData.get("stick_capacity"),
    num_of_sticks: partData.get("num_of_sticks"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
export async function OrderStorage(partData) {
  const newData = {
    part_category: "Storage",
    brand: partData.get("brand"),
    name: partData.get("name"),
    capacity: partData.get("capacity"),
    part_type: partType.get("type"),
  };
  console.log(newData);
  try {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
