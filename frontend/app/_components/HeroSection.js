import Link from "next/link";
const HeroSection = ({ imgSrc, headline, theme = "turquoise" }) => {
    const isDarkSection = theme === "orange";

    return (
        <section className={`hero ${isDarkSection ? "hero--dark" : ""}`}>
            <div className="hero__background">
                <img src={imgSrc || "/assets/hero-home.png"} alt="" />
            </div>
            <div className={`hero__headline hero__headline--${theme}`}>
                <h1>{headline}</h1>
            </div>
            <Link href="/events">
                <button className={`btn btn--medium btn--${theme}`}>
                    BOOK NOW
                </button>
            </Link>
            <img
                className={`hero__logo hero__logo--${theme}`}
                src="/assets/logo.svg"
                alt=""
            />
        </section>
    );
};

export default HeroSection;
