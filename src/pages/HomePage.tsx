import ProfileCard from '../components/ProfileCard'

type Skill = {
  id: number
  name: string
}

type HomePageProps = {
  name: string
  bio: string
  email: string
  github: string
  image: string
  skills: Skill[]
}

function HomePage({
  name,
  bio,
  email,
  github,
  image,
  skills,
}: HomePageProps) {
  return (
    <ProfileCard
      name={name}
      bio={bio}
      email={email}
      github={github}
      image={image}
      skills={skills}
    />
  )
}

export default HomePage