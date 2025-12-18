import { Header } from '../components/header/Header'
import { Layout } from '../components/layout/Layout'
import { PageContent } from '../features/home/components/PageContent'

function Home() {
  return (
    <Layout>
      <Header currentPage='Home' />
      <PageContent />
    </Layout>
  )
}

export default Home
