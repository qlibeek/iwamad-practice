import LikeButton from './LikeButton'
import SkillBadge from './SkillBadge'
import Card from './ui/Card'

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
  return (
    <Card>
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
                <li key={skill.id}>
                  <SkillBadge skill={skill.name} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No skills added yet.</p>
          )}

          <LikeButton />
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard