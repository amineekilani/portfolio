import { hobbies, services, type Hobby } from '../data/portfolio'

type AboutPageProps = {
    active: boolean
    onSelectHobby: (hobby: Hobby) => void
}

export function AboutPage({ active, onSelectHobby }: AboutPageProps) {
    return (
        <article className={`about${active ? ' active' : ''}`}>
            <header><h2 className="h2 article-title">About me</h2></header>
            <section className="about-text">
                <p style={{ textAlign: 'justify' }}>Passionate about leveraging technology to solve complex problems, I am a recent graduate with a Bachelor&apos;s degree in Information Technology, specializing in Information Systems Development from the Higher Institute of Technological Studies of Radès. I have developed a solid foundation in software development and continuously strive to expand my skills beyond the classroom through self-learning. I am eager to apply my knowledge in real-world projects and grow in the field of IT.</p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What I am doing</h3>
                <ul className="service-list">
                    {services.map(([name, image, description]) => (
                        <li className="service-item" key={name}>
                            <div className="service-icon-box"><img src={`${import.meta.env.BASE_URL}icons/${image}`} alt={name} width="40" /></div>
                            <div className="service-content-box"><h4 className="h4 service-item-title">{name}</h4><p className="service-item-text">{description}</p></div>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="hobbies-interests">
                <h3 className="h3 testimonials-title">Hobbies &amp; Interests</h3>
                <ul className="testimonials-list has-scrollbar">
                    {hobbies.map((hobby) => (
                        <li className="testimonials-item" key={hobby[0]}>
                            <button className="content-card" type="button" onClick={() => onSelectHobby(hobby)}>
                                <figure className="testimonials-avatar-box"><img className="hobby-icon" src={`${import.meta.env.BASE_URL}icons/${hobby[1]}`} alt="" width="60" /></figure>
                                <h4 className="h4 testimonials-item-title">{hobby[0]}</h4>
                                <div className="testimonials-text"><p style={{ textAlign: 'justify' }}>{hobby[2]}</p></div>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}