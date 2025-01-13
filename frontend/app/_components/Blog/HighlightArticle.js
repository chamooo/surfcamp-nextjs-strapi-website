import { processedImage } from "@/app/utils/strapi.utils";
import Link from "next/link";

const HighlightArticle = ({ data }) => {
    const { headline, excerpt, slug, image } = data;
    return (
        <article className="highlight-article">
            <div className="highlight-article__info">
                <h1 className="h3">{headline}</h1>
                <p className="copy">{excerpt}</p>
                <Link
                    className="btn btn--turquoise btn--medium"
                    href={`/blog/${slug}`}
                >
                    Read more
                </Link>
            </div>
            <img
                src={image.url}
                alt={image.alt || headline}
                className="highlight-article__image"
            />
        </article>
    );
};

export default HighlightArticle;
