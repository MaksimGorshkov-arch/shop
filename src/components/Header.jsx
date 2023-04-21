export function Header() {
    return (
        <nav>
            <div className="nav-wrapper grey darken-4">
                <a href="/" className="brand-logo right">React Shop</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="https://github.com/MaksimGorshkov-arch?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </div>
        </nav>
    )
}