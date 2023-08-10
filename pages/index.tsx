import Image from 'next/legacy/image'
import { Inter } from 'next/font/google'
import LayoutRoot from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */
const Home = (props: AppProps) => {
  return (
    <>
    <Head>
      <title>My page title</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
      <LayoutRoot>
        <Dashboard />
      </LayoutRoot>
    </>
  )
}
export default Home;
