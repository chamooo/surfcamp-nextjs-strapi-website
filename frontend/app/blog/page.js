import HighlightArticle from "../_components/Blog/HighlightArticle";
import NewsletterSubscribeForm from "../_components/Blog/NewsletterSubscribeForm";
import FeaturedArticles from "../_components/FeaturedArticles/FeaturedArticles";

export default function Page() {
    const highlightArticleData = {
        highlight: "3 tips for a super fast takeoff",
        excerpt: `Improving your take-off phase in surfing is a fundamental step toward riding waves with more confidence and style.
                Improving your take-off phase is a gradual process, and it may take time to master. Be patient, stay committed to practice, and enjoy the journey of becoming a better surfer. With dedication and persistence, you'll see progress and have more enjoyable rides. Here is how:`,
        slug: "slug",
        image: "/assets/hero-experience.png",
    };

    const featuredArticles = [
        {
            title: "surfboard shaping and design behind the scenes of crafting the perfect board ",
            image: "/assets/hero-home.png",
            date: "Monday, June 05, 2023",
            price: "580",
            slug: "slug",
        },
        {
            title: "surfboard shaping and design behind the scenes of crafting the perfect board ",
            image: "/assets/hero-home.png",
            date: "Monday, June 05, 2023",
            price: "580",
            slug: "slug",
        },
        {
            title: "surfboard shaping and design behind the scenes of crafting the perfect board ",
            image: "/assets/hero-home.png",
            date: "Monday, June 05, 2023",
            price: "580",
            slug: "slug",
        },
        {
            title: "surfboard shaping and design behind the scenes of crafting the perfect board ",
            image: "/assets/hero-home.png",
            date: "Monday, June 05, 2023",
            price: "580",
            slug: "slug",
        },
        {
            title: "surfboard shaping and design behind the scenes of crafting the perfect board ",
            image: "/assets/hero-home.png",
            date: "Monday, June 05, 2023",
            price: "580",
            slug: "slug",
        },
        {
            title: "surfboard shaping and design behind the scenes of crafting the perfect board ",
            image: "/assets/hero-home.png",
            date: "Monday, June 05, 2023",
            price: "580",
            slug: "slug",
        },
    ];

    return (
        <main className="blog-page">
            <HighlightArticle data={highlightArticleData} />
            <NewsletterSubscribeForm />
            <FeaturedArticles articles={featuredArticles} />
        </main>
    );
}
