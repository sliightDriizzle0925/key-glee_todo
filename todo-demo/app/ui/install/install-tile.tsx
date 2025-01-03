import { FetchOrderedParts } from "@/app/lib/data";

export default async function InstallTileWrapper() {
  const response = await FetchOrderedParts();
  console.log("response - client: " + response);
  let tiles = [];
  const responseArray = JSON.parse(response);
  responseArray.forEach((tile, index) => {
    tiles.push(
      <InstallTile
        key={index}
        part_category={tile.part_category}
        brand={tile.brand}
        name={tile.name}
        num_of_sticks={tile.num_of_sticks}
        stick_capacity={tile.stick_capacity}
        part_type={tile.part_type}
        capacity={tile.capacity}
      ></InstallTile>
    );
  });
  return <ul>{tiles}</ul>;
}

export function InstallTile({
  key,
  part_category,
  brand,
  name,
  num_of_sticks,
  stick_capacity,
  part_type,
  capacity,
}: {
  key: string;
  part_category: string;
  brand: string;
  name: string;
  num_of_sticks: string;
  stick_capacity: string;
  part_type: string;
  capacity: string;
}) {
  return (
    <div id={key} className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{part_category}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
        Brand: {brand} <br />
        Name: {name} <br />
        Number of Sticks: {num_of_sticks} <br />
        Stick Capacity: {stick_capacity} <br />
        Capacity: {capacity} <br />
        Type: {part_type} <br />
      </p>
    </div>
  );
}
