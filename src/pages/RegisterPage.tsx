import { useState, type ChangeEvent, type FormEvent } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import TextField from '../components/ui/TextField'
import {
  validateRegistration,
  type RegistrationErrors,
  type RegistrationValues,
} from '../lib/validateRegistration'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [errors, setErrors] = useState<RegistrationErrors>({})
  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({})
  const [submitted, setSubmitted] = useState(false)
  const [registered, setRegistered] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value, checked, type } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as keyof RegistrationValues

    setTouched((current) => ({
      ...current,
      [field]: true,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateRegistration(values)

    setErrors(validationErrors)
    setSubmitted(true)

    if (Object.keys(validationErrors).length === 0) {
      setRegistered(true)
    }
  }

  if (registered) {
    return (
      <main>
        <Card>
          <p role="status">
            Thanks, {values.fullName}. You are registered.
          </p>
        </Card>
      </main>
    )
  }

  const showError = (field: keyof RegistrationValues) =>
    submitted || touched[field] ? errors[field] : undefined

  return (
    <main>
      <Card>
        <h2>Register</h2>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <TextField
            name="fullName"
            label="Full name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={showError('fullName')}
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={showError('email')}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={showError('password')}
          />

          <TextField
            name="confirmPassword"
            label="Confirm password"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={showError('confirmPassword')}
          />

          <label className="check">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Accept the terms
          </label>

          {showError('acceptTerms') && (
            <p className="field-error">
              {showError('acceptTerms')}
            </p>
          )}

          <Button type="submit">Create account</Button>
        </form>
      </Card>
    </main>
  )
}

export default RegisterPage