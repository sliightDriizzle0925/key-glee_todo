import { OrderCase } from "@/app/lib/data";
import Form from "next/form";

export function OrderTileCase() {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-Case Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">Case</h3>
      </div>
      <Form action={OrderCase}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <button className="tileBtn" type="submit">
          Order Case
        </button>
      </Form>
    </div>
  );
}
