import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

async function fetchDataFromStrapi(endpoint, options = {}) {
    const url = `${BASE_URL}/api/${endpoint}`;

    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from Strapi: ${error.message}`);
        throw new Error("Failed to fetch data. Please try again later.");
    }
}

function processData(items) {
    return items.map((item) => ({
        ...item,
        image: processedImage(item),
    }));
}

export function processedImage(item) {
    if (!item.image) return null;
    const image = item.image
        ? {
              url: `${BASE_URL}${item.image.url}`,
              alt: item.image.alternativeText || "Image",
          }
        : null;
    return image;
}

export function processedMedia(item) {
    if (!item.media) return null;

    const mediaType = item.media.mime.startsWith("video/") ? "video" : "image";

    const media = {
        url: `${BASE_URL}${item.media.url}`,
        alt: item.media.alternativeText || "Image",
        mediaType: mediaType,
        mime: item.media.mime,
    };

    return media;
}

export async function getInfoBlocks(context) {
    const endpoint = `info-blocks-${context}?populate[info_blocks][populate]=*`;
    const data = await fetchDataFromStrapi(endpoint);

    return processData(data?.data?.info_blocks || []);
}

export async function getBlogArticlesData(
    page = 1,
    pageSize = 3,
    options = {}
) {
    const endpoint = `blog-articles?populate=articleContent.image,articleContent.media&populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    const data = await fetchDataFromStrapi(endpoint, options);

    const articles = processData(data?.data || []);
    return {
        articles,
        pagination: data?.meta?.pagination,
    };
}

export async function fetchArticleBySlug(slug) {
    const endpoint = `blog-articles?filters[slug][$eq]=${slug}&populate=articleContent.image,articleContent.media&populate=image`;
    const data = await fetchDataFromStrapi(endpoint);
    return data.data[0];
}

export function getHighlightArticle(articles) {
    return articles.find((article) => article.isHighlightArticle);
}

export function getFeaturedArticles(articles) {
    return articles.filter((article) => !article.isHighlightArticle);
}
