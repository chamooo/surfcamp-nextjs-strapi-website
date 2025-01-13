import { formatDate } from "@/app/utils/helpers.utils";
import Link from "next/link";

const BlogPreviewItem = ({ article }) => {
    const { image, headline, slug, publishedAt } = article;
    return (
        <Link href={`/blog/${slug}`} className="blog-preview__item">
            <div className="blog-preview__image">
                <img src={image.url} alt={image.alt || headline} />
            </div>
            <h5 className="blog-preview__headline">{headline}</h5>
            <p className="copy-small">{formatDate(publishedAt)}</p>
        </Link>
    );
};

export default BlogPreviewItem;
