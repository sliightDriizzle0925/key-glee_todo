import { OrderRAM } from "@/app/lib/data";
import Form from "next/form";

export function OrderTileRAM() {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-RAM Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">RAM</h3>
      </div>
      <Form action={OrderRAM}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <div className="form-input-group">
          <label>Stick Capacity: </label>
          <input type="number" name="stick_capacity" />
        </div>
        <div className="form-input-group">
          <label>Number Of Sticks: </label>
          <input type="number" name="num_of_sticks" />
        </div>
        <button className="tileBtn" type="submit">
          Order RAM
        </button>
      </Form>
    </div>
  );
}
