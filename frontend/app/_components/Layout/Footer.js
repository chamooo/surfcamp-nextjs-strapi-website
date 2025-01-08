import Link from "next/link";

const Footer = () => {
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
        {
            displayName: "the events.",
            slug: "/events",
        },
    ];

    const policies = [
        {
            displayName: "Imprint",
            slug: "/imprint",
        },
        {
            displayName: "Terms and Conditions",
            slug: "/terms-and-conditions",
        },
        {
            displayName: "Data Protection",
            slug: "/data-protection",
        },
    ];

    return (
        <footer className="footer">
            <nav className="footer__nav">
                <Link href="/">
                    <img
                        src="/assets/logo.svg"
                        alt=""
                        className="footer__logo"
                    />
                </Link>
                <ul className="footer__links">
                    {navItems.map((item) => (
                        <li key={item.slug}>
                            <Link className="h5" href={item.slug}>
                                {item.displayName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="footer__policies">
                <ul className="footer__policies-nav">
                    {policies.map((item) => (
                        <li key={item.slug}>
                            <Link className="copy" href={item.slug}>
                                {item.displayName}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="copy">© Wavezhub - all rights reserved</p>
            </div>
        </footer>
    );
};
export default Footer;
