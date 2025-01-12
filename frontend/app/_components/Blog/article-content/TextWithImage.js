import { processedImage } from "@/app/utils/strapi.utils";
import ReactMarkdown from "react-markdown";

const TextWithImage = ({ component }) => {
    const { text, imageCaption, showImageOnRight, isLandscapeOrientation } =
        component;
    const image = processedImage(component);

    return (
        <div
            className={`article-text-image ${
                !showImageOnRight ? "article-text-image--reversed" : ""
            } ${!isLandscapeOrientation ? "article-text-image--portrait" : ""}`}
        >
            <ReactMarkdown className="article-text-image__text copy article-paragraph">
                {text}
            </ReactMarkdown>
            <div className="article-text-image__container">
                <div className="article-text-image__image">
                    <img src={image.url} alt={image.alt} />
                </div>
                {imageCaption && (
                    <p className="article-text-image__caption copy-small">
                        {imageCaption}
                    </p>
                )}
            </div>
        </div>
    );
};

export default TextWithImage;
