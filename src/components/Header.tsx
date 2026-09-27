type HeaderProps = {
  name: string
  subtitle: string
}

function Header({ name, subtitle }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{subtitle}</p>
    </header>
  )
}

export default Header