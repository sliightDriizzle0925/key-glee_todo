import { OrderOS } from "@/app/lib/data";
import Form from "next/form";

export function OrderTileOS() {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-OS Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">OS</h3>
      </div>
      <Form action={OrderOS}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <button className="tileBtn" type="submit">
          Order Operating System
        </button>
      </Form>
    </div>
  );
}
