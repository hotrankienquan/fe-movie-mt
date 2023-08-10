import Image from 'next/legacy/image'
import { Inter } from 'next/font/google'
import LayoutRoot from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
const inter = Inter({ subsets: ['latin'] })
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */
const Home = (props: AppProps) => {
  return (
      <LayoutRoot>
        <Dashboard />
      </LayoutRoot>
  )
}
export default Home;
