import '../style.css'

import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'


type Skill = {
  id: number
  name: string
}

function App() {

  const skills: Skill[] = [
    {
      id: 1,
      name: 'Problem solving',
    },
    {
      id: 2,
      name: 'Teamwork',
    },
    {
      id: 3,
      name: 'Communication skills',
    },
  ]

  return (
    <>
      <Header
        name="Alibek Burakhanov"
        subtitle="Aspiring Web Developer"
      />

      <main>

        <ProfileCard
          name="Alibek Burakhanov"
          bio="My name is Alibek Burakhanov. I am an ITM student interested in web development. I want to improve my HTML, CSS and JavaScript skills and learn how to create modern websites."
          email="burakhanovalibek@gmail.com"
          github="https://github.com/qlibeek"
          image="profile.jpg"
          skills={skills}
        />

      </main>

      <Footer
        year={2026}
        name="Alibek Burakhanov"
      />
    </>
  )
}

export default App
