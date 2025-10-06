import { useState } from "react";
import "./App.css";

import { useGetCards } from "./common/hooks/useGetCards";
import { Booster } from "./components/Booster/Booster";
import { generateBoosters } from "./common/utils/boosters.utils.";
import type { BoosterType } from "./common/types/boosters.type";

function App() {
  const { commons, rares } = useGetCards();
  const [packs, setPacks] = useState<BoosterType[]>([]);
  const [totalPacks, setTotalPacks] = useState(7);

  const handlePacksCreation = () => {
    const newPacks = generateBoosters(commons, rares, totalPacks);
    setPacks(newPacks);
  };
  const buttonLabel = packs.length ? "Get new packs" : "Get packs";

  return (
    <>
      <button onClick={handlePacksCreation} style={{ marginBottom: 20 }}>
        {buttonLabel}
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <label htmlFor="packs">Number of packs (1-21): </label>
        <input
          type="number"
          name="packs"
          min={1}
          max={20}
          defaultValue={7}
          onChange={(e) => setTotalPacks(Number(e.target.value))}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {packs.map((booster) => (
          <Booster key={booster.boosterId} booster={booster} />
        ))}
      </div>
    </>
  );
}

export default App;
