"use client";

import { OrderCooling } from "@/app/lib/data";
import Form from "next/form";
import React from "react";

export function OrderTileCooling() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-Cooling Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">Cooling</h3>
      </div>
      <Form action={OrderCooling}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <div className="form-input-group">
          <label>Type: </label>
          <select value={selectedValue} onChange={handleChange} name="type">
            <option value="Tower">Tower</option>
            <option value="Radiator">Radiator</option>
          </select>
        </div>
        <button className="tileBtn" type="submit">
          Order Cooling
        </button>
      </Form>
    </div>
  );
}
