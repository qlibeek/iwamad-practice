import SkillItem from '../components/SkillItem'

type Skill = {
  id: number
  name: string
}

type SkillsPageProps = {
  skills: Skill[]
}

function SkillsPage({ skills }: SkillsPageProps) {
  return (
    <section className="card">
      <h2>My Skills</h2>

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
    </section>
  )
}

export default SkillsPage