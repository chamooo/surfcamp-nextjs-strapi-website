import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route) {
    const url = `${BASE_URL}/api/${route}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getInfoBlocks(context) {
    const data = await fetchDataFromStrapi(
        `info-blocks-${context}?populate[info_blocks][populate]=*`
    );

    const infoBlocksData = processInfoBlocksData(data.data.info_blocks);

    return infoBlocksData;
}

export function processInfoBlocksData(blocksData) {
    return blocksData.map((blockData) => ({
        ...blockData,
        image: blockData.image
            ? {
                  url: BASE_URL + blockData.image.url,
                  alt: blockData.image.alt,
              }
            : null,
    }));
}
