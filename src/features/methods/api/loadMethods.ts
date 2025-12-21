import { useEffect, useEffectEvent, useState } from "react";
import { METHODS_MOCK } from "../mocks/methods";
import type { MethodsType } from "../types";

const cache = {
  isLoaded: false,
};

export const useLoadMethods = () => {
  const [methods, setMethods] = useState<MethodsType[]>();

  const setMethodsEvent = useEffectEvent(() => {
    setMethods(METHODS_MOCK);
  });

  useEffect(() => {
    if (cache.isLoaded) {
      setMethodsEvent();
      return;
    }
    setTimeout(() => {
      setMethodsEvent();
      cache.isLoaded = true;
    }, 500);
  }, []);

  return { methods, isLoading: !methods };
};
