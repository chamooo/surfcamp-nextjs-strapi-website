import FeaturedArticle from "./FeaturedArticle";

const FeaturedArticles = ({ headline, articles }) => {
    return (
        <section className="featured-items">
            <h2 className="featured-items__headline h3">{headline}</h2>
            <div className="featured-items__container">
                {articles.map((article) => (
                    <FeaturedArticle key={article.slug} article={article} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedArticles;
