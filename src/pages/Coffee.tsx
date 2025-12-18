import { Header } from '../components/header/Header'
import { Layout } from '../components/layout/Layout'
import { PageContentLayout } from '../components/pageContentLayout/PageContentLayout'
import { PageContent } from '../features/coffee/components/PageContent'

function Coffee() {
  return (
    <Layout>
      <Header currentPage='Coffee' />
      <PageContentLayout>
        <PageContent />
      </PageContentLayout>

    </Layout>
  )
}

export default Coffee
