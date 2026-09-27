import { useState } from 'react'
import SkillItem from './SkillItem'

type Skill = {
  id: number
  name: string
}

type ProfileCardProps = {
  name: string
  bio: string
  email: string
  github: string
  image: string
  skills: Skill[]
}

function ProfileCard({
  name,
  bio,
  email,
  github,
  image,
  skills,
}: ProfileCardProps) {

  const [liked, setLiked] = useState(false)

  return (
    <section className={`card ${liked ? 'liked' : ''}`}>

      <div className="profile">

        <img
          src={image}
          alt={`${name} profile avatar`}
        />

        <div className="info">

          <h2>{name}</h2>

          <p>{bio}</p>

          <div className="links">

            <a href={`mailto:${email}`}>
              Email
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

          <h3>My Skills</h3>

          {skills.length > 0 ? (
            <ul>
              {skills.map((skill) => (
                <SkillItem
                  key={skill.id}
                  skill={skill}
                />
              ))}
            </ul>
          ) : (
            <p>No skills added yet.</p>
          )}

          <button
            type="button"
            onClick={() => setLiked(!liked)}
          >
            {liked ? '♥ Liked' : '♡ Like'}
          </button>

        </div>

      </div>

    </section>
  )
}

export default ProfileCard