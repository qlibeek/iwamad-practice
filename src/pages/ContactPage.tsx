type ContactPageProps = {
  email: string
}

function ContactPage({ email }: ContactPageProps) {
  return (
    <section className="card">
      <h2>Contact</h2>

      <p>
        Email:{' '}
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </section>
  )
}

export default ContactPage