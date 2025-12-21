import "./pageContent.css";

import { CoffeeItem } from "./coffeeItem/CoffeeItem";
import { useLoadCoffee } from "../api/loadCoffee";
import { Loader } from "../../../components/loader/Loader";

export const PageContent = () => {
  const { coffee, isLoading } = useLoadCoffee();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Carta de Cafés</h1>
      </div>
      <div className="coffee-grid">
        {coffee?.map(function (item) {
          return <CoffeeItem key={item.id} coffeeItem={item} />;
        })}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};
