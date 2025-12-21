import { useEffect, useEffectEvent, useState } from "react";
import type { CoffeeType } from "../types";
import { COFFEE_MOCK } from "../mocks/coffee";

const cache = {
  isLoaded: false,
};

export const useLoadCoffee = () => {
  const [coffee, setCoffee] = useState<CoffeeType[]>();

  const setCoffeeEvent = useEffectEvent(() => {
    setCoffee(COFFEE_MOCK);
  });

  useEffect(() => {
    if (cache.isLoaded) {
      setCoffeeEvent();
      return;
    }
    setTimeout(() => {
      setCoffeeEvent();
      cache.isLoaded = true;
    }, 500);
  }, []);

  return { coffee, isLoading: !coffee };
};
