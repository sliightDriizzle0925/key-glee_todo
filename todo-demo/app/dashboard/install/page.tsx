import InstallTileWrapper from "@/app/ui/install/install-tile";
import { FetchOrderedParts } from "@/app/lib/data";

export default async function Page() {
  const installTiles = await FetchOrderedParts();
  return (
    <main>
      {/* <p>Oops</p> */}
      <InstallTileWrapper></InstallTileWrapper>
    </main>
  );
}
