import Link from "next/link";

const HighlightArticle = ({ data }) => {
    const { highlight, excerpt, image, slug } = data;
    return (
        <article className="highlight-article">
            <div className="highlight-article__info">
                <h1 className="h3">{highlight}</h1>
                <p className="copy">{excerpt}</p>
                <Link
                    className="btn btn--turquoise btn--medium"
                    href={`/blog/${slug}`}
                >
                    Read more
                </Link>
            </div>
            <img src={image} alt="" className="highlight-article__image" />
        </article>
    );
};

export default HighlightArticle;
