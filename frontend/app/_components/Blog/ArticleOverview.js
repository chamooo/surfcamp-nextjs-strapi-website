import Link from "next/link";

const ArticleOverview = ({ article }) => {
    const { excerpt, articleContent } = article;

    const headlines = articleContent.filter(
        (component) => component.__component === "blog-article.headline"
    );

    return (
        <div className="article-overview">
            <div className="article-overview__info">
                <h3 className="article-overview__headline">In this article</h3>
                <p className="h5 article-overview__excerpt">{excerpt}</p>
            </div>
            <ul className="article-overview__contents">
                {headlines.map((headline, index) => (
                    <li key={headline.anchor}>
                        <Link href={`#${headline.anchor}`}>
                            {index + 1}. {headline.headline}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleOverview;
