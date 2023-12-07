import './App.css';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j'];

function App() {
  return (
    <div className="h-screen w-full mx-auto p-4 flex items-center">
      <div className="absolute top-2 left-2 bg-amber-500 p-2 rounded-md transform-gpu hover:scale-105 transition-transform">
        <h1 className="text-xl tracking-wide font-bold text-slate-900">Battleship</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 h-full w-full">
        {/* <div className="border h-full w-[800px] rounded-md"></div> */}
        <div className="border h-full w-[800px] rounded-md grid grid-cols-10 grid-rows-10 p-4 gap-1 relative">
          <div className="absolute flex flex-col -left-8 h-full">
            {letters.map((l) => (
              <span className="h-full uppercase font-bold flex items-center" key={l}>
                {l}
              </span>
            ))}
          </div>
          {Array.from({ length: 100 })
            .fill(null)
            .map((_, i) => (
              <>
                <div
                  key={i}
                  className="tabular-nums hover:bg-slate-600 rounded-sm text-2xl flex justify-center items-center"
                >
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                </div>
              </>
            ))}
        </div>
        <div className="border h-full w-[800px] rounded-md grid grid-cols-10 grid-rows-10 p-4 gap-1 relative">
          <div className="absolute flex flex-col -left-8 h-full">
            {letters.map((l) => (
              <span className="h-full text-sm uppercase font-bold flex items-center" key={l}>
                {l}
              </span>
            ))}
          </div>
          {Array.from({ length: 100 })
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="tabular-nums hover:bg-slate-600 rounded-sm text-2xl flex justify-center items-center"
              >
                <span className="w-1 h-1 bg-white rounded-full"></span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
