import portfolioData from '../data/portfolio.json'

type CertificationsPageProps = { active: boolean }

export function CertificationsPage({ active }: CertificationsPageProps) {
    return (
        <article className={`certifications${active ? ' active' : ''}`}>
            <header><h2 className="h2 article-title">Certifications</h2></header>
            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {portfolioData.certifications.map(({ name, issuer, date, url }) => {
                        const imageName = name.toLowerCase().replaceAll(' ', '-').replaceAll('.', '-').replaceAll('/', '-')

                        return (
                        <li className="blog-post-item" key={name}>
                            <a href={url} target="_blank" rel="noreferrer">
                                <figure className="blog-banner-box"><img src={`${import.meta.env.BASE_URL}certificates/${imageName}.jpg`} alt={name} loading="lazy" /></figure>
                                <div className="blog-content">
                                    <div className="blog-meta"><p className="blog-category">{issuer}</p><span className="dot" /><time>{date}</time></div>
                                    <h3 className="h3 blog-item-title">{name}</h3>
                                </div>
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </section>
        </article>
    )
}