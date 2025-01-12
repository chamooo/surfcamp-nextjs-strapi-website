import { formatDate } from "@/app/utils/helpers.utils";
import Link from "next/link";

const FeaturedArticle = ({ article }) => {
    return (
        <Link
            href={`/blog/${article.slug}`}
            className="featured-items__article"
        >
            <div className="featured-items__article-img">
                <img
                    src={article.image.url}
                    alt={article.image.alternativeText || article.headline}
                />
            </div>
            <div className="featured-items__article-text">
                <h5 className="featured-items__article-title">
                    {article.headline}
                </h5>
                <p className="copy-small">{formatDate(article.publishedAt)}</p>
            </div>
        </Link>
    );
};

export default FeaturedArticle;
