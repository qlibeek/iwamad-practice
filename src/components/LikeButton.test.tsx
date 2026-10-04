import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

describe('LikeButton', () => {
  test('changes visible text when clicked', async () => {
    const user = userEvent.setup()

    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>,
    )

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('♥ 0')

    await user.click(button)

    expect(button).toHaveTextContent('♥ 1')
  })
})