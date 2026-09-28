export const navigationPages = ['About Me', 'Profile', 'Skills', 'Projects', 'Certifications', 'Contact']
export const skillCategories = ['All', 'Programming', 'Development', 'Database', 'Tools', 'Other']

export const hobbies = [
    ['Football', 'icon-football.svg', 'Watching football is an exciting experience, filled with tactical brilliance, dramatic moments, and shared emotions. It is a chance to appreciate the beauty of the game and connect with fellow fans worldwide.'],
    ['Series & Movies', 'icon-series-movies.svg', 'Watching series and movies is my way of exploring diverse cultures and storytelling styles. It inspires creativity and provides moments of reflection and entertainment.'],
    ['Gaming', 'icon-gaming.svg', 'Gaming offers a vibrant escape into imaginative worlds. It is a chance to relax, challenge my mind, and dive into adventures that balance creativity with moments of pure fun.'],
] as const

export type Hobby = (typeof hobbies)[number]

export const services = [
    ['Web Development', 'icon-web-dev.svg', 'Building engaging and functional websites that connect users to the digital world'],
    ['Problem Solving', 'icon-lightbulb.svg', 'Tackling challenges with creativity and logic to deliver effective solutions'],
    ['Keeping Learning', 'icon-learning.svg', 'Embracing new knowledge and skills to stay ahead in a dynamic field'],
]