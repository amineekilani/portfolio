import { Icon } from '../components/Icon'
import { skillCategories } from '../data/portfolio'
import portfolioData from '../data/portfolio.json'

type SkillsPageProps = {
    active: boolean
    selectedCategory: string
    categoryLabel: string
    selectOpen: boolean
    onSelectCategory: (category: string) => void
    onToggleSelect: () => void
}

export function SkillsPage({ active, selectedCategory, categoryLabel, selectOpen, onSelectCategory, onToggleSelect }: SkillsPageProps) {
    const filteredSkills = portfolioData.skills.filter(({ category }) => selectedCategory === 'All' || category.toLowerCase() === selectedCategory.toLowerCase())

    return (
        <article className={`skills${active ? ' active' : ''}`}>
            <header><h2 className="h2 article-title">Skills</h2></header>
            <section className="projects">
                <ul className="filter-list">
                    {skillCategories.map((category) => <li className="filter-item" key={category}><button className={selectedCategory === category ? 'active' : ''} type="button" onClick={() => onSelectCategory(category)}>{category}</button></li>)}
                </ul>
                <div className="filter-select-box">
                    <button className={`filter-select${selectOpen ? ' active' : ''}`} type="button" aria-label="Select skill category" aria-expanded={selectOpen} onClick={onToggleSelect}>
                        <span className="select-value">{categoryLabel}</span><span className="select-icon"><Icon name="chevron-down" /></span>
                    </button>
                    <ul className="select-list">{skillCategories.map((category) => <li className="select-item" key={category}><button type="button" onClick={() => onSelectCategory(category)}>{category}</button></li>)}</ul>
                </div>
                <ul className="skill-list">
                    {filteredSkills.map(({ title, category: skillCategory }) => {
                        const category = skillCategory.toLowerCase()
                        const imageName = title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '-').replaceAll('/', '-')

                        return (
                            <li className="skill-item active" data-filter-item data-category={category} key={title}>
                                <figure className="skill-img"><img src={`${import.meta.env.BASE_URL}skills/${imageName}.png`} alt={title} loading="lazy" /></figure>
                                <h3 className="skill-title">{title}</h3><p className="skill-category">{skillCategory}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </article>
    )
}