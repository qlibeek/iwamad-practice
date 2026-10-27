import { describe, expect, it } from 'vitest'
import {
  validateSignup,
  type SignupValues,
} from './validateSignup'

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

describe('validateSignup', () => {
  it('accepts valid values', () => {
    expect(validateSignup(valid, 10)).toEqual({})
  })

  it("rejects tickets '0'", () => {
    const errors = validateSignup(
      { ...valid, tickets: '0' },
      10,
    )

    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it("rejects tickets '5'", () => {
    const errors = validateSignup(
      { ...valid, tickets: '5' },
      10,
    )

    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it("rejects tickets '1.5'", () => {
    const errors = validateSignup(
      { ...valid, tickets: '1.5' },
      10,
    )

    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it("accepts tickets '4'", () => {
    const errors = validateSignup(
      { ...valid, tickets: '4' },
      10,
    )

    expect(errors).toEqual({})
  })

  it('rejects more tickets than seats left', () => {
    const errors = validateSignup(
      { ...valid, tickets: '3' },
      2,
    )

    expect(errors.tickets).toBe('Only 2 seats left')
  })
})