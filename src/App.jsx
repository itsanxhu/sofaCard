import Card from "./components/Card";

const App = () => {
  const cards = [
    {
      id: 1,
      title: "Floor Lamp",
      category: "Living Room",
      sku: "DL01",
      productName: "Shift",
      brand: "Frama",
      top: "top-0",
      z: "z-10",
      wrapper:
        "opacity-60 scale-80 transition-all duration-300 hover:-translate-y-14 hover:scale-100 cursor-pointer hover:opacity-100 active:scale-95 transition-transform duration-200",
      img: "/floorLamp.avif",
    },
    {
      id: 2,
      title: "Table",
      category: "OPTION 4",
      sku: "TB01",
      productName: "Pearl",
      brand: "Frama",
      top: "top-8",
      z: "z-20",
      wrapper:
        "opacity-80 scale-90 transition-all duration-300 hover:-translate-y-16 hover:scale-100 cursor-pointer hover:opacity-100 active:scale-95 transition-transform duration-200",
      img: "/table.avif",
    },
    {
      id: 3,
      title: "Sofa",
      category: "DINING ROOM",
      sku: "DT01",
      productName: "Anchor",
      brand: "Frama",
      top: "top-16",
      z: "z-30",
      img: "https://pelicanessentials.com/cdn/shop/files/image147068.webp?v=1727285584&width=800",
      wrapper:
        "active:scale-95 transition-transform duration-200 cursor-pointer",
      // wrapper:
      //   "transition-all duration-300 hover:-translate-y-10 cursor-pointer",
    },
  ];
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center w-175 h-62">
        {cards.map((card) => (
          <div key={card.id} className={`absolute ${card.top} ${card.z}`}>
            <div className={card.wrapper}>
              <Card
                id={card.id}
                title={card.title}
                category={card.category}
                sku={card.sku}
                productName={card.productName}
                brand={card.brand}
                img={card.img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
