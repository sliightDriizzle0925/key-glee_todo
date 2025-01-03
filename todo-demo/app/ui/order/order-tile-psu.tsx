"use client";

import { OrderPSU } from "@/app/lib/data";
import Form from "next/form";
import React from "react";

export function OrderTilePSU() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-PSU Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">Power Supply</h3>
      </div>
      <Form action={OrderPSU}>
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
            <option value="Non-Modular">Non-Modular</option>
            <option value="Semi-Modular">Semi-Modular</option>
            <option value="Modular">Modular</option>
          </select>
        </div>
        <button className="tileBtn" type="submit">
          Order Power Supply
        </button>
      </Form>
    </div>
  );
}
