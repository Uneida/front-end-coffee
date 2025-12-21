import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { PageContentLayout } from "../components/pageContentLayout/PageContentLayout";
import { PageContent } from "../features/home/components/PageContent";

function Home() {
  return (
    <Layout>
      <Header currentPage="Home" />
      <PageContentLayout>
        <PageContent />
      </PageContentLayout>
    </Layout>
  );
}

export default Home;
