import Link from "next/link";

const Header = () => {
    const navItems = [
        {
            displayName: "the camp.",
            slug: "/",
        },
        {
            displayName: "the experience.",
            slug: "/experience",
        },
        {
            displayName: "the blog.",
            slug: "/blog",
        },
    ];
    return (
        <header className="header">
            <Link href="/">
                <img className="header__logo" src="/assets/logo.svg" alt="" />
            </Link>
            <ul className="header__nav">
                {navItems.map((item) => (
                    <li key={item.slug}>
                        <Link className="h5" href={item.slug} key={item.slug}>
                            {item.displayName}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/events">
                <button className="btn btn--black btn--small">Book now</button>
            </Link>
        </header>
    );
};

export default Header;
