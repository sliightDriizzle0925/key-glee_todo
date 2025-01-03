import { OrderMOBO } from "@/app/lib/data";
import Form from "next/form";

export function OrderTileMOBO() {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm Tile-MOBO Tile">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">Mother Board</h3>
      </div>
      <Form action={OrderMOBO}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <button className="tileBtn" type="submit">
          Order Mother Board
        </button>
      </Form>
    </div>
  );
}
