"use client";
import { useState } from "react";

import FeaturedArticle from "./FeaturedArticle";
import { getBlogArticlesData } from "@/app/utils/strapi.utils";

const FeaturedArticles = ({
    headline,
    initialArticles,
    initialPagination = 1,
}) => {
    const [articles, setArticles] = useState(initialArticles);
    const [pagination, setPagination] = useState(initialPagination);
    const [loading, setLoading] = useState(false);

    const loadMoreArticles = async () => {
        if (!pagination || pagination.page >= pagination.pageCount) return;

        setLoading(true);

        try {
            const { articles: newArticles, pagination: newPagination } =
                await getBlogArticlesData(pagination.page + 1);

            setArticles((prev) => [...prev, ...newArticles]);
            setPagination(newPagination);
        } catch (error) {
            console.error("Error fetching more articles:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="featured-items">
            <h2 className="featured-items__headline h3">{headline}</h2>
            <div className="featured-items__container">
                {articles.map((article) => (
                    <FeaturedArticle key={article.slug} article={article} />
                ))}
            </div>
            {pagination?.page < pagination.pageCount && (
                <button
                    className="btn btn--medium btn--turquoise"
                    onClick={loadMoreArticles}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "See more"}
                </button>
            )}
        </section>
    );
};

export default FeaturedArticles;
