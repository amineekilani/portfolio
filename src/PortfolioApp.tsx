import { useEffect, useState } from 'react'
import { Icon } from './components/Icon'
import { navigationPages, type Hobby } from './data/portfolio'
import portfolioData from './data/portfolio.json'
import { AboutPage } from './pages/AboutPage'
import { CertificationsPage } from './pages/CertificationsPage'
import { ContactPage } from './pages/ContactPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'
import './App.css'

function PortfolioApp() {
    const [activePage, setActivePage] = useState('About Me')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [skillCategory, setSkillCategory] = useState('All')
    const [skillCategoryLabel, setSkillCategoryLabel] = useState('Select category')
    const [skillSelectOpen, setSkillSelectOpen] = useState(false)
    const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null)
    const [time, setTime] = useState(() => new Date())
    const [canSubmit, setCanSubmit] = useState(false)
    const [formStatus, setFormStatus] = useState('')

    useEffect(() => {
        const interval = window.setInterval(() => setTime(new Date()), 1000)
        return () => window.clearInterval(interval)
    }, [])

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setSelectedHobby(null)
        }
        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [])

    const submitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        setFormStatus('Sending message...')
        try {
            const response = await fetch('https://formspree.io/f/xjkkpgdd', {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
            })
            if (!response.ok) throw new Error('Message could not be sent')
            setFormStatus('Your message has been sent successfully. Please wait patiently; you will receive a response soon.')
            form.reset()
            setCanSubmit(false)
        } catch {
            setFormStatus('Something went wrong. Please try again later.')
        }
    }

    const chooseSkillCategory = (category: string) => {
        setSkillCategory(category)
        setSkillCategoryLabel(category)
        setSkillSelectOpen(false)
    }

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(time)
    const formattedTime = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
    }).format(time)
    const phoneNumber = portfolioData.phone.replace(/\D/g, '').replace(/^00/, '')

    return (
        <>
            <main>
                <aside className={`sidebar${sidebarOpen ? ' active' : ''}`}>
                    <div className="sidebar-info">
                        <figure className="avatar-box"><img id="logo" src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Amine Kilani" width="80" /></figure>
                        <div className="info-content"><h1 className="name">Amine Kilani</h1><p className="title">Software Developer</p></div>
                        <button className="info_more-btn" type="button" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <span>{sidebarOpen ? 'Hide Contacts' : 'Show Contacts'}</span><Icon name="chevron-down" />
                        </button>
                    </div>
                    <div className="sidebar-info_more">
                        <div className="separator" />
                        <ul className="contacts-list">
                            <li className="contact-item"><div className="icon-box"><Icon name="mail-outline" /></div><div className="contact-info"><p className="contact-title">Email</p><a className="contact-link" href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></div></li>
                            <li className="contact-item"><div className="icon-box"><Icon name="phone-portrait-outline" /></div><div className="contact-info"><p className="contact-title">Phone</p><a className="contact-link" href={`tel:+${phoneNumber}`}>{portfolioData.phone}</a></div></li>
                            <li className="contact-item"><div className="icon-box"><Icon name="calendar-outline" /></div><div className="contact-info"><p className="contact-title">Birthday</p><time dateTime="2004-05-12">12 May 2004</time></div></li>
                            <li className="contact-item"><div className="icon-box"><Icon name="location-outline" /></div><div className="contact-info"><p className="contact-title">Location</p><address>Tunis, Tunisia</address></div></li>
                        </ul>
                        <div className="separator" />
                        <ul className="social-list">
                            <li className="social-item"><a className="social-link" href="https://www.linkedin.com/in/aminekilani" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="logo-linkedin" /></a></li>
                            <li className="social-item"><a className="social-link" href="https://github.com/amineekilani" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="logo-github" /></a></li>
                            <li className="social-item"><a className="social-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
                        </ul>
                        <time id="time">{formattedDate}<br />{formattedTime}</time>
                    </div>
                </aside>

                <div className="main-content">
                    <nav className="navbar" aria-label="Portfolio sections">
                        <ul className="navbar-list">
                            {navigationPages.map((page) => (
                                <li className="navbar-item" key={page}>
                                    <button className={`navbar-link${activePage === page ? ' active' : ''}`} type="button" onClick={() => { setActivePage(page); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{page}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <AboutPage active={activePage === 'About Me'} onSelectHobby={setSelectedHobby} />
                    <ProfilePage active={activePage === 'Profile'} />
                    <SkillsPage active={activePage === 'Skills'} selectedCategory={skillCategory} categoryLabel={skillCategoryLabel} selectOpen={skillSelectOpen} onSelectCategory={chooseSkillCategory} onToggleSelect={() => setSkillSelectOpen(!skillSelectOpen)} />
                    <ProjectsPage active={activePage === 'Projects'} />
                    <CertificationsPage active={activePage === 'Certifications'} />
                    <ContactPage active={activePage === 'Contact'} canSubmit={canSubmit} formStatus={formStatus} onSubmit={submitContactForm} onValidityChange={setCanSubmit} onClearStatus={() => setFormStatus('')} />
                </div>
            </main>
            <footer><p>&copy; {new Date().getFullYear()} Amine Kilani. All Rights Reserved.</p></footer>
            {selectedHobby && (
                <div className="modal-container active" onClick={() => setSelectedHobby(null)}>
                    <div className="overlay active" />
                    <section className="testimonials-modal" role="dialog" aria-modal="true" aria-labelledby="hobby-title" onClick={(event) => event.stopPropagation()}>
                        <button className="modal-close-btn" type="button" aria-label="Close" onClick={() => setSelectedHobby(null)}><Icon name="close-outline" /></button>
                        <div className="modal-img-wrapper"><figure className="modal-avatar-box"><img src={`${import.meta.env.BASE_URL}icons/${selectedHobby[1]}`} alt="" width="80" /></figure><img src={`${import.meta.env.BASE_URL}icons/icon-quote.svg`} alt="" /></div>
                        <div className="modal-content"><h4 className="h3 modal-title" id="hobby-title">{selectedHobby[0]}</h4><div className="testimonials-text"><p>{selectedHobby[2]}</p></div></div>
                    </section>
                </div>
            )}
        </>
    )
}

export default PortfolioApp