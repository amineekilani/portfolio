import type { FormEvent } from 'react'
import { Icon } from '../components/Icon'
import portfolioData from '../data/portfolio.json'

type ContactPageProps = {
    active: boolean
    canSubmit: boolean
    formStatus: string
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    onValidityChange: (isValid: boolean) => void
    onClearStatus: () => void
}

export function ContactPage({ active, canSubmit, formStatus, onSubmit, onValidityChange, onClearStatus }: ContactPageProps) {
    return (
        <article className={`contact${active ? ' active' : ''}`}>
            <header><h2 className="h2 article-title">Contact</h2></header>
            <section className="mapbox">
                <figure><iframe title="Map of Tunis, Tunisia" src={portfolioData.mapUrl} width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form className="form" onSubmit={onSubmit} onChange={(event) => { onValidityChange(event.currentTarget.checkValidity()); onClearStatus() }}>
                    <div className="input-wrapper"><input type="text" name="fullname" className="form-input" placeholder="Full name" required /><input type="email" name="email" className="form-input" placeholder="Email address" required /></div>
                    <textarea name="message" className="form-input" placeholder="Your Message" required />
                    <button className="form-btn" type="submit" disabled={!canSubmit}><Icon name="paper-plane" /><span>Send Message</span></button>
                    <p className="form-status" role="status">{formStatus}</p>
                </form>
            </section>
        </article>
    )
}