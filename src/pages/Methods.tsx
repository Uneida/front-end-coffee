import { Header } from '../components/header/Header'
import { Layout } from '../components/layout/Layout'
import { PageContent } from '../features/methods/components/PageContent'

function Methods() {
  return (
    <Layout>
      <Header currentPage='Methods' />
      <PageContent />
    </Layout>
  )
}

export default Methods
