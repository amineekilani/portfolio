import { Icon } from '../components/Icon'
import portfolioData from '../data/portfolio.json'

const projects = portfolioData.projects
type Project = (typeof projects)[number]

type ProjectsPageProps = { active: boolean }

export function ProjectsPage({ active }: ProjectsPageProps) {
    return (
        <article className={`projects${active ? ' active' : ''}`}>
            <header><h2 className="h2 article-title">Projects</h2></header>
            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {projects.map((project) => (
                        <li className="blog-post-item" key={project.title}>
                            {project.codeUrl ? <a href={project.codeUrl} target="_blank" rel="noreferrer"><ProjectCard project={project} /></a> : <div className="project-card"><ProjectCard project={project} /></div>}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}

function ProjectCard({ project }: { project: Project }) {
    const imageName = project.title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '-').replaceAll('/', '-')

    return (
        <>
            <figure className="blog-banner-box">
                {project.codeUrl && <div className="project-item-icon-box"><Icon name="eye-outline" /></div>}
                <img src={`${import.meta.env.BASE_URL}projects/${imageName}.jpg`} alt={project.title} loading="lazy" />
            </figure>
            <div className="blog-content">
                <div className="blog-meta"><p className="blog-category">{project.technologies.join(' - ')}</p><span className="dot" /><time>{project.period}</time></div>
                <h3 className="h3 blog-item-title">{project.title}</h3><p className="blog-text" style={{ textAlign: 'justify' }}>{project.longDescription}</p>
            </div>
        </>
    )
}