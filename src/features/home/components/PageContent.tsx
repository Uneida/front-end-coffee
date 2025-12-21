import { useEffect, useState } from "react";
import { CoffeeItem } from "../../coffee/components/coffeeItem/CoffeeItem";
import { MethodsItem } from "../../methods/components/methodsItem/MethodsItem";
import "./pageContent.css";
import { Input } from "../../../components/input/Input";
import { useSearchParams } from "react-router";
import { useLoadCoffee } from "../../coffee/api/loadCoffee";
import { useLoadMethods } from "../../methods/api/loadMethods";
import { Loader } from "../../../components/loader/Loader";

const findBySearch = (match: string, search: string) => {
  return match.toLowerCase().includes(search.toLowerCase());
};

export const PageContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const { coffee, isLoading: isLoadingCoffee } = useLoadCoffee();
  const { methods, isLoading: isLoadingMethods } = useLoadMethods();

  useEffect(() => {
    setSearchParams({ search });
  }, [search, setSearchParams]);

  const filteredCoffee = coffee?.filter(
    (coffee) =>
      findBySearch(coffee.name, search) ||
      findBySearch(coffee.producer, search) ||
      findBySearch(coffee.vintage, search) ||
      findBySearch(coffee.roastLevel, search)
  );

  const filteredMethods = methods?.filter(
    (method) =>
      findBySearch(method.methodType, search) ||
      findBySearch(method.extractionTime, search) ||
      findBySearch(method.coffeeAmount, search) ||
      findBySearch(method.waterAmount, search)
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "16px 0",
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          width: "100%",
        }}
      >
        <h2>Busca:</h2>
        <Input value={search} onChange={setSearch} />
      </div>
      <div>
        <h1>Carta de Cafés</h1>
      </div>
      <div className="grid">
        {filteredCoffee?.map(function (item) {
          return <CoffeeItem key={item.id} coffeeItem={item} />;
        })}
        {!filteredCoffee?.length && !isLoadingCoffee && (
          <p>Nenhum café encontrado</p>
        )}
        {isLoadingCoffee && <Loader />}
      </div>
      <div>
        <h1>Métodos</h1>
      </div>
      <div className="grid">
        {filteredMethods?.map(function (item) {
          return <MethodsItem key={item.id} methodsItem={item} />;
        })}
        {!filteredMethods?.length && !isLoadingMethods && (
          <p>Nenhum método encontrado</p>
        )}
        {isLoadingMethods && <Loader />}
      </div>
    </div>
  );
};
