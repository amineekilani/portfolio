const iconPaths: Record<string, string> = {
    'chevron-down': 'm6 9 6 6 6-6',
    'mail-outline': 'M3 5h18v14H3z M3 6l9 7 9-7',
    'phone-portrait-outline': 'M7 2h10v20H7z M10 18h4',
    'calendar-outline': 'M3 5h18v16H3z M8 2v6 M16 2v6 M3 10h18',
    'location-outline': 'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
    'logo-linkedin': 'M20.45 20.45h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.456v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.995 20.452H3.67V9h3.325v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
    'logo-github': 'M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .297Z',
    'briefcase-outline': 'M3 7h18v14H3z M8 7V4h8v3 M3 12h18 M10 12v2h4v-2',
    'book-outline': 'M4 4h6a4 4 0 0 1 4 4v13a4 4 0 0 0-4-4H4z M20 4h-2a4 4 0 0 0-4 4v13a4 4 0 0 1 4-4h2z',
    'people-outline': 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8',
    'paper-plane': 'M22 2 11 13 M22 2l-7 20-4-9-9-4z',
    'close-outline': 'm18 6-12 12M6 6l12 12',
    'eye-outline': 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
}

export function Icon({ name }: { name: string }) {
    if (name.startsWith('logo-')) {
        return <svg className="portfolio-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={iconPaths[name]} /></svg>
    }
    return <svg className="portfolio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={iconPaths[name]} /></svg>
}