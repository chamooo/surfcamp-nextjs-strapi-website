import HeroSection from "../_components/HeroSection";
import InfoBlock from "../_components/InfoBlock";
import { getInfoBlocks } from "../utils/strapi.utils";

export default async function Home() {
    const heroHeadline = (
        <>
            discover.
            <br />
            your.
            <br />
            spirit.
            <br />
        </>
    );

    const infoBlocksData = await getInfoBlocks("experience");

    return (
        <main>
            <HeroSection
                headline={heroHeadline}
                theme="orange"
                imgSrc="/assets/hero-experience.png"
            />
            {infoBlocksData.map((blockData) => (
                <InfoBlock key={blockData.id} data={blockData} />
            ))}
        </main>
    );
}
