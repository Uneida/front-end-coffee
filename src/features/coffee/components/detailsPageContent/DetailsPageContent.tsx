import { useEffect, useMemo } from "react";
import { COFFEE_MOCK } from "../../mocks/coffee";
import { CoffeeItem } from "../coffeeItem/CoffeeItem";
import { useNavigate } from "react-router";

type DetailsPageContentProps = {
  coffeeId: string;
};

export function DetailsPageContent({ coffeeId }: DetailsPageContentProps) {
  const navigate = useNavigate();

  const currentCoffee = useMemo(() => {
    return COFFEE_MOCK.find((coffee) => coffee.id === coffeeId);
  }, [coffeeId]);

  useEffect(() => {
    if (!currentCoffee) {
      navigate("/not-found");
    }
  }, [currentCoffee, navigate]);

  if (!currentCoffee) {
    return null;
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={() => navigate(-1)}>&lt;- Voltar</button>
        <h1>Café selecionado:</h1>
      </div>
      <div>
        <CoffeeItem coffeeItem={currentCoffee} />
      </div>
    </div>
  );
}
