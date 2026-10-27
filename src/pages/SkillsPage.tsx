import SkillBadge from '../components/SkillBadge'
import Card from '../components/ui/Card'

type Skill = {
  id: number
  name: string
}

type SkillsPageProps = {
  skills: Skill[]
}

function SkillsPage({ skills }: SkillsPageProps) {
  return (
    <Card>
      <h2>My Skills</h2>

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
    </Card>
  )
}

export default SkillsPage