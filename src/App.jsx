import { useState } from "react";

const colors = [
  "#ffd1dc",
  "#a2d2ff",
  "#f3d58c",
  "#36454f",
  "#808000",
  "#d1a3a4",
  "#9caf88",
  "#a0522d",
  "#778899",
];

function App() {
  const [color, setColor] = useState(colors[0]);
  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-3 inset-x-0">
          {colors.map((c) => {
            return (
              <button
                className=" bg-black rounded w-20 py-3 text-white border"
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
