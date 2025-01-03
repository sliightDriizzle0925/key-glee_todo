import { OrderGPU } from "@/app/lib/data";
import Form from "next/form";

export function OrderTileGPU() {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-GPU Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">Graphics Card</h3>
      </div>
      <Form action={OrderGPU}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <button className="tileBtn" type="submit">
          Order Graphics Card
        </button>
      </Form>
    </div>
  );
}
