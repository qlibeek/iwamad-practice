import { describe, expect, it } from 'vitest'
import {
  validateRegistration,
  type RegistrationValues,
} from './validateRegistration'

const valid: RegistrationValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  password: 'almaty2026',
  confirmPassword: 'almaty2026',
  acceptTerms: true,
}

describe('validateRegistration', () => {
  it('accepts valid values', () => {
    expect(validateRegistration(valid)).toEqual({})
  })

  it('rejects a name that is only spaces', () => {
    const errors = validateRegistration({
      ...valid,
      fullName: '   ',
    })

    expect(errors.fullName).toBe('Enter your full name')
  })

  it('rejects an invalid email', () => {
    const errors = validateRegistration({
      ...valid,
      email: 'aliya@example',
    })

    expect(errors.email).toBe(
      'Enter a valid email, like name@example.com',
    )
  })

  it('accepts a password with 8 characters and a digit', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almaty26',
      confirmPassword: 'almaty26',
    })

    expect(errors).toEqual({})
  })

  it('rejects a password that is too short', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almaty2',
      confirmPassword: 'almaty2',
    })

    expect(errors.password).toBe('Use at least 8 characters')
  })

  it('rejects a password without a number', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almatycity',
      confirmPassword: 'almatycity',
    })

    expect(errors.password).toBe('Include at least one number')
  })

  it('rejects a different confirmation password', () => {
    const errors = validateRegistration({
      ...valid,
      confirmPassword: 'almaty2027',
    })

    expect(errors.confirmPassword).toBe('Passwords do not match')
  })

  it('rejects unchecked terms', () => {
    const errors = validateRegistration({
      ...valid,
      acceptTerms: false,
    })

    expect(errors.acceptTerms).toBe('Accept the terms to continue')
  })
})