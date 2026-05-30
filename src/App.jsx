import { Link } from "lucide-react";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-100 h-30 p-1.5 bg-zinc-100 rounded-xl">
        <div className="h-full flex justify-between">
          <div className="flex gap-4">
            <img
              className="w-25 h-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sofa img"
            />
            <div className=" flex flex-col justify-between">
              <div>
                <p className="font-semibold">Sofa</p>
                <p className="text-xs text-neutral-500">DINING ROOM</p>
              </div>
              <div>
                <p className="text-xs">DT01</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link size={15} className="text-zinc-500" />
            <div className="flex flex-col justify-between">
              <div>
                <p className=" font-semibold">Anchor</p>
                <p className="text-[10px]">PRODUCT NAME</p>
              </div>
              <div>
                <p className="font-semibold">Frama</p>
                <p className="text-xs">BRAND</p>
              </div>
            </div>
          </div>
          {/* ----------------- */}
        </div>
      </div>
    </div>
  );
};

export default App;
