import { OrderNewPart } from "@/app/lib/data";
import Form from "next/form";

export function OrderTileSimple(props) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{props.part_name}</h3>
      </div>
      <Form action={OrderNewPart}>
        <div className="form-input-group">
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>
        <div className="form-input-group">
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        {props.part_name == "RAM" && (
          <div className="form-input-group">
            <label>Number Of Sticks: </label>
            <input type="number" name="num_of_sticks" />
          </div>
        )}
        {props.part_name == "RAM" && (
          <div className="form-input-group">
            <label>Stick Capacity: </label>
            <input type="number" name="stick_capacity" />
          </div>
        )}
        {props.part_name == "Storage" && (
          <div className="form-input-group">
            <label>Capacity: </label>
            <input type="number" name="capacity" />
          </div>
        )}
        {(props.part_name == "PSU" ||
          props.part_name == "Storage" ||
          props.part_name == "Cooling" ||
          props.part_name == "OS") && (
          <div className="form-input-group">
            <label>Type: </label>
            <input type="string" name="type" />
          </div>
        )}
        <button type="submit">Order Part</button>
      </Form>
    </div>
  );
}
