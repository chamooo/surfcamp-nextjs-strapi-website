import ArticleComponent from "@/app/_components/Blog/ArticleComponent";
import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import FeaturedArticles from "@/app/_components/FeaturedArticles/FeaturedArticles";
import {
    getBlogArticlesData,
    fetchArticleBySlug,
} from "@/app/utils/strapi.utils";

export async function generateMetadata({ params }) {
    const article = await fetchArticleBySlug(params.article);

    return {
        title: article.headline,
        description: article.description,
    };
}

export default async function Page({ params }) {
    const currentSlug = params.article;

    const articlesData = await getBlogArticlesData(1, 9999999, {
        next: { revalidate: 60 },
    });
    const articles = articlesData.articles;

    const article = articles.find((article) => article.slug === currentSlug);

    const otherArticles = articles.filter(
        (article) => article.slug !== currentSlug
    );

    if (!article) return null;
    return (
        <main>
            <ArticleIntro article={article} />
            <div className="article-section">
                <ArticleOverview article={article} />
                {article?.articleContent.map((component) => (
                    <ArticleComponent
                        component={component}
                        key={component.id}
                    />
                ))}
                <FeaturedArticles
                    initialArticles={otherArticles}
                    headline="Explore more articles"
                />
            </div>
        </main>
    );
}
