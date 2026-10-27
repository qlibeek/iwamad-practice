import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import EventsPage from './EventsPage'
import { events } from '../data/events'

describe('EventsPage', () => {
  it('renders one card per event', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>,
    )

    expect(
      document.querySelectorAll('article'),
    ).toHaveLength(events.length)
  })
})