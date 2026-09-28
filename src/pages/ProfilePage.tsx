import { Icon } from '../components/Icon'
import portfolioData from '../data/portfolio.json'

type ProfilePageProps = { active: boolean }

export function ProfilePage({ active }: ProfilePageProps) {
    return (
        <article className={`profile${active ? ' active' : ''}`}>
            <header><h2 className="h2 article-title">Profile</h2></header>
            <section className="timeline">
                <div className="title-wrapper"><div className="icon-box"><Icon name="briefcase-outline" /></div><h3 className="h3">Experience</h3></div>
                <ol className="timeline-list">
                    {portfolioData.workExperience.map(({ title, period, company, companyUrl }) => (
                        <li className="timeline-item" key={`${title}-${period}`}>
                            <h4 className="h4 timeline-item-title">{title}</h4><span>{period}</span>
                            <p className="timeline-text"><a className="experience-link" href={companyUrl} target="_blank" rel="noreferrer">{company}</a></p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="timeline">
                <div className="title-wrapper"><div className="icon-box"><Icon name="book-outline" /></div><h3 className="h3">Education</h3></div>
                <ol className="timeline-list">
                    {portfolioData.education.map(({ field, period, degree, institution, institutionUrl }) => (
                        <li className="timeline-item" key={`${period}-${institution}`}>
                            <h4 className="h4 timeline-item-title">{field}</h4>
                            <span>{period} | {degree}</span>
                            <p className="timeline-text"><a className="experience-link" href={institutionUrl} target="_blank" rel="noreferrer">{institution}</a></p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="timeline">
                <div className="title-wrapper"><div className="icon-box"><Icon name="people-outline" /></div><h3 className="h3">Volunteering</h3></div>
                <ol className="timeline-list">
                    {portfolioData.volunteering.map(({ organization, organizationUrl, position }) => (
                        <li className="timeline-item" key={organization}>
                            <h4 className="h4 timeline-item-title"><a className="volunteer-link" href={organizationUrl} target="_blank" rel="noreferrer">{organization}</a></h4>
                            {position.map(({ title, period }) => <div key={`${period}-${title}`}><span>{period}</span><p className="timeline-text">{title}</p></div>)}
                        </li>
                    ))}
                </ol>
            </section>
            <section className="skill">
                <h3 className="h3 skills-title">Languages</h3>
                <ul className="skills-list content-card">
                    {portfolioData.languages.map(({ language, level, percent }) => (
                        <li className="skills-item" key={language}>
                            <div className="title-wrapper"><h5 className="h5">{language}</h5><data value={percent}>{level}</data></div>
                            <div className="skill-progress-bg"><div className="skill-progress-fill" style={{ width: `${percent}%` }} /></div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}