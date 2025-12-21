import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { METHODS_MOCK } from "../../mocks/methods";
import { MethodsItem } from "../methodsItem/MethodsItem";

type DetailsPageContentProps = {
  methodId: string;
};

export function DetailsPageContent({ methodId }: DetailsPageContentProps) {
  const navigate = useNavigate();

  const currentMethod = useMemo(() => {
    return METHODS_MOCK.find((method) => method.id === methodId);
  }, [methodId]);

  useEffect(() => {
    if (!currentMethod) {
      navigate("/not-found");
    }
  }, [currentMethod, navigate]);

  if (!currentMethod) {
    return null;
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={() => navigate(-1)}>&lt;- Voltar</button>
        <h1>Método selecionado:</h1>
      </div>
      <div>
        <MethodsItem methodsItem={currentMethod} />
      </div>
    </div>
  );
}
