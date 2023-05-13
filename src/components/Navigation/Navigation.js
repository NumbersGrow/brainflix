function Navigation(props) {
    return (
        <header className="header">
            <div className="header__logo">
                {props.logo}
            </div>
            <nav className="header__links header__links--left">
                <a href="/">Home</a> |
                <a href="/">About</a> |
                <a href="/">Contact</a>
            </nav>

            <div className="header__links header__links--right">
                <input className="search" placeholder="Search..." />
                <p className="lastPressed"></p>
            </div>
        </header>
    );
}

export default Navigation;