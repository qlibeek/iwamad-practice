type Skill = {
  id: number
  name: string
}

type SkillItemProps = {
  skill: Skill
}

function SkillItem({ skill }: SkillItemProps) {
  return <li>{skill.name}</li>
}

export default SkillItem