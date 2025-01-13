import {
    getBlogArticlesData,
    getFeaturedArticles,
    getHighlightArticle,
} from "@/app/utils/strapi.utils";
import BlogPreviewItem from "./BlogPreviewItem";

const BlogPreview = async () => {
    const { articles } = await getBlogArticlesData();

    const highlightArticle = getHighlightArticle(articles);
    const featuredArticles = getFeaturedArticles(articles)?.slice(0, 3);
    const previewArticles = [highlightArticle, ...featuredArticles];

    return (
        <section className="blog-preview">
            <h2 className="blog-preview__headline">the blog.</h2>
            <div className="blog-preview__container">
                {previewArticles.map((article) => (
                    <BlogPreviewItem key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
};

export default BlogPreview;
