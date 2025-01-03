"use client";

import { OrderStorage } from "@/app/lib/data";
import Form from "next/form";
import React from "react";

export function OrderTileStorage() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-Storage Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">Storage</h3>
      </div>
      <Form action={OrderStorage}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <div className="form-input-group">
          <label>Capacity: </label>
          <input type="string" name="capacity" />
        </div>
        <div className="form-input-group">
          <label>Type: </label>
          <select value={selectedValue} onChange={handleChange} name="type">
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
            <option value="M.2">M.2</option>
          </select>
        </div>
        <button className="tileBtn" type="submit">
          Order Storage
        </button>
      </Form>
    </div>
  );
}
