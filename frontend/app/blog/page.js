import HighlightArticle from "../_components/Blog/HighlightArticle";
import NewsletterSubscribeForm from "../_components/Blog/NewsletterSubscribeForm";
import FeaturedArticles from "../_components/FeaturedArticles/FeaturedArticles";
import {
    getBlogArticlesData,
    getFeaturedArticles,
    getHighlightArticle,
} from "../utils/strapi.utils";

export default async function Page() {
    const { articles, pagination } = await getBlogArticlesData();

    const highlightArticleData = getHighlightArticle(articles);

    const featuredArticles = getFeaturedArticles(articles);

    return (
        <main className="blog-page">
            <HighlightArticle data={highlightArticleData} />
            <NewsletterSubscribeForm />
            <FeaturedArticles
                initialArticles={featuredArticles}
                initialPagination={pagination}
                headline="Featured Articles"
            />
        </main>
    );
}

export const revalidate = 300;
