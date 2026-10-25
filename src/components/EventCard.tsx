import Card from './ui/Card'
import Tag from './ui/Tag'
import { Link } from 'react-router'
import type { CampusEvent } from '../data/events'

type EventCardProps = {
  event: CampusEvent
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="card">
      <Card>
        <h2>{event.title}</h2>
        <p>{event.date}</p>
        <p>{event.place}</p>
        <Tag>{event.seats} seats</Tag>
        <Link to={`/events/${event.id}`}>Details</Link>
      </Card>
    </article>
  )
}

export default EventCard