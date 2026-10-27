import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  name: string
  subtitle: string
  year: number
}

function Layout({ name, subtitle, year }: LayoutProps) {
  return (
    <>
      <Header
        name={name}
        subtitle={subtitle}
      />

      <main>
        <Outlet />
      </main>

      <Footer
        year={year}
        name={name}
      />
    </>
  )
}

export default Layout