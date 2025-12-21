import { Loader } from "../../../components/loader/Loader";
import { useLoadMethods } from "../api/loadMethods";
import { MethodsItem } from "./methodsItem/MethodsItem";
import "./pageContent.css";

export const PageContent = () => {
  const { methods, isLoading } = useLoadMethods();
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
        <h1>Métodos de Extração</h1>
      </div>
      <div className="method-grid">
        {methods?.map(function (item) {
          return <MethodsItem key={item.id} methodsItem={item} />;
        })}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};
