import '../style.css'

import { Route, Routes } from 'react-router'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import EventsPage from './pages/EventsPage'
import EventDetailsPage from './pages/EventDetailsPage'

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
    <Routes>
      <Route
        element={
          <Layout
            name="Alibek Burakhanov"
            subtitle="Aspiring Web Developer"
            year={2026}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              name="Alibek Burakhanov"
              bio="My name is Alibek Burakhanov. I am an ITM student interested in web development. I want to improve my HTML, CSS and JavaScript skills and learn how to create modern websites."
              email="burakhanovalibek@gmail.com"
              github="https://github.com/qlibeek"
              image={`${import.meta.env.BASE_URL}profile.jpg`}
              skills={skills}
            />
          }
        />

        <Route
          path="skills"
          element={<SkillsPage skills={skills} />}
        />

        <Route
          path="contact"
          element={
            <ContactPage email="burakhanovalibek@gmail.com" />
          }
        />

        <Route
          path="*"
          element={
            <NotFoundPage message="The page you are looking for does not exist." />
          }
        />
        <Route 
          path="register" 
          element={
            <RegisterPage />
          }
        />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:eventId" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  )
}

export default App