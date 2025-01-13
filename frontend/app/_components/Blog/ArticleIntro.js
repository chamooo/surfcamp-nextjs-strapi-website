import { formatDate } from "@/app/utils/helpers.utils";

const ArticleIntro = ({ article }) => {
    const { headline, makeHeroTextWhite, image, author, publishedAt } = article;

    return (
        <section
            className={`article-intro ${makeHeroTextWhite ? "hero--dark" : ""}`}
        >
            <div className="article-intro__background">
                <img src={image.url} alt={image.alt} />
            </div>
            <h3 className="article-intro__headline">{headline}</h3>
            <p className="copy-small bold">{formatDate(publishedAt)}</p>
            <p className="copy-small">{author}</p>
        </section>
    );
};

export default ArticleIntro;
