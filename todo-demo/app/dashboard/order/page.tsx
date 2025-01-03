import { OrderTileCPU } from "@/app/ui/order/order-tile-cpu";
import { OrderTileCooling } from "@/app/ui/order/order-tile-cooling";
import { OrderTileCase } from "@/app/ui/order/order-tile-case";
import { OrderTileGPU } from "@/app/ui/order/order-tile-gpu";
import { OrderTileMOBO } from "@/app/ui/order/order-tile-mobo";
import { OrderTileOS } from "@/app/ui/order/order-tile-os";
import { OrderTilePSU } from "@/app/ui/order/order-tile-psu";
import { OrderTileRAM } from "@/app/ui/order/order-tile-ram";
import { OrderTileStorage } from "@/app/ui/order/order-tile-storage";

export default function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Order</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <OrderTileCPU></OrderTileCPU>
        <OrderTileCooling></OrderTileCooling>
        <OrderTileCase></OrderTileCase>
        <OrderTileGPU></OrderTileGPU>
        <OrderTileMOBO></OrderTileMOBO>
        <OrderTileOS></OrderTileOS>
        <OrderTilePSU></OrderTilePSU>
        <OrderTileRAM></OrderTileRAM>
        <OrderTileStorage></OrderTileStorage>
      </div>
    </main>
  );
}
