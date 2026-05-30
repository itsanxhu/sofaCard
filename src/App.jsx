import Card from "./components/Card";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center w-175 h-62">
        <div className="absolute top-0 z-10">
          <div className="opacity-60 scale-80 transition-all duration-300 hover:-translate-y-14 hover:scale-100 cursor-pointer hover:opacity-100">
            <Card
              title="Desk Lamp"
              category="Living Room"
              sku="DL01"
              productName="Shift"
              brand="Frama"
            />
          </div>
        </div>
        <div className="absolute top-8 z-20">
          <div className="opacity-80 scale-90 transition-all duration-300 hover:-translate-y-16 hover:scale-100 cursor-pointer hover:opacity-100">
            <Card
              title="Table"
              category="OPTION 4"
              sku="TB01"
              productName="Pearl"
              brand="Frama"
            />
          </div>
        </div>
        <div className="absolute top-16 z-30">
          <div className="transition-all duration-300 hover:-translate-y-10 cursor-pointer">
            <Card
              title="Sofa"
              category="DINING ROOM"
              sku="DT01"
              productName="Anchor"
              brand="Frama"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
