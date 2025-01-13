import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import { getInfoBlocks } from "./utils/strapi.utils";
import BlogPreview from "./_components/BlogPreview/BlogPreview";

export default async function Home() {
    const infoBlocksData = await getInfoBlocks("landing");

    const heroHeadline = (
        <>
            barrel.
            <br />
            your.
            <br />
            happines.
            <br />
        </>
    );

    return (
        <main>
            <HeroSection headline={heroHeadline} />
            {infoBlocksData.map((blockData) => (
                <InfoBlock key={blockData.id} data={blockData} />
            ))}
            <BlogPreview />
        </main>
    );
}
