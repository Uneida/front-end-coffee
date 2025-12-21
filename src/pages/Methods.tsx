import { useParams } from "react-router";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { PageContentLayout } from "../components/pageContentLayout/PageContentLayout";
import { PageContent } from "../features/methods/components/PageContent";
import { DetailsPageContent } from "../features/methods/components/detailsPageContent/DetailsPageContent";

function Methods() {
  const params = useParams();

  const id = params?.id;

  return (
    <Layout>
      <Header currentPage="Methods" />
      <PageContentLayout>
        {id ? <DetailsPageContent methodId={id} /> : <PageContent />}
      </PageContentLayout>
    </Layout>
  );
}

export default Methods;
