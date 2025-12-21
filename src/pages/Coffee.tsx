import { useParams } from "react-router";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { PageContentLayout } from "../components/pageContentLayout/PageContentLayout";
import { PageContent } from "../features/coffee/components/PageContent";
import { DetailsPageContent } from "../features/coffee/components/detailsPageContent/DetailsPageContent";

function Coffee() {
  const params = useParams();

  const id = params?.id;

  return (
    <Layout>
      <Header currentPage="Coffee" />
      <PageContentLayout>
        {id ? <DetailsPageContent coffeeId={id} /> : <PageContent />}
      </PageContentLayout>
    </Layout>
  );
}

export default Coffee;
