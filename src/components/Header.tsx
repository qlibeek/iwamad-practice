import logo from '../assets/logo.svg'
import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
  name: string
  subtitle: string
}

function Header({ name, subtitle }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header>
      <img
        src={logo}
        alt="Alibek logo"
        className="site-logo"
      />
      <h1>{name}</h1>
      <p>{subtitle}</p>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/skills">
          Skills
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>

      <p>♥ Likes: {likes}</p>
    </header>
  )
}

export default Header