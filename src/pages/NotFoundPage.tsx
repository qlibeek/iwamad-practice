import { NavLink } from 'react-router'

type NotFoundPageProps = {
  message: string
}

function NotFoundPage({ message }: NotFoundPageProps) {
  return (
    <section className="card">
      <h2>404 - Page Not Found</h2>
      <p>{message}</p>

      <NavLink to="/">
        Go back Home
      </NavLink>
    </section>
  )
}

export default NotFoundPage