import Card from "./components/Card";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center w-175 h-62 bg-lime-200">
        <div className="absolute top-0 z-10 opacity-50 scale-80 hover:-translate-9">
          <Card />
        </div>

        <div className="absolute top-8 z-20 opacity-80 scale-90">
          <Card />
        </div>

        <div className="absolute top-16 z-30">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
