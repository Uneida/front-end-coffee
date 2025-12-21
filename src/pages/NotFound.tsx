import { useNavigate } from "react-router";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { PageContentLayout } from "../components/pageContentLayout/PageContentLayout";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header />
      <PageContentLayout>
        <div>
          <h1>Página Não Encontrada</h1>
          <p>Desculpe, a página que você está procurando não existe.</p>
          <button onClick={() => navigate("/")}>&lt;- Voltar à home</button>
        </div>
      </PageContentLayout>
    </Layout>
  );
}

export default NotFound;
