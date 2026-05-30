import { Link } from "lucide-react";

const Card = () => {
  return (
    <div className="w-96 h-22 p-1.5 bg-olive-100 rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-20 h-19">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sofa img"
            />
          </div>

          <div className="flex flex-col justify-between py-1">
            <div>
              <p className="font-medium text-[13px]">Sofa</p>
              <p className="text-[9px] text-neutral-400">DINING ROOM</p>
            </div>
            <p className="font-medium text-[13px]">DT01</p>
          </div>
        </div>

        <div className="flex mr-14 gap-2 py-1">
          <Link size={12} className="text-neutral-400 mt-1" />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-medium text-[13px]">Anchor</p>
              <p className="text-[9px] text-neutral-400">PRODUCT NAME</p>
            </div>
            <div>
              <p className="font-medium text-[13px]">Frama</p>
              <p className="text-[9px] text-neutral-400">BRAND</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
