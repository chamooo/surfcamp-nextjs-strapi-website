import { processedMedia } from "@/app/utils/strapi.utils";

const LandscapeMedia = ({ component }) => {
    const { imageCaption } = component;
    const media = processedMedia(component);
    const { url, alt, mediaType, mime } = media;
    return (
        <div className="article-image">
            {mediaType === "video" ? (
                <video playsInline muted autoPlay loop type={mime}>
                    <source src={url}></source>
                </video>
            ) : (
                <img src={url} alt={alt} />
            )}

            {imageCaption && (
                <p className="copy article-image__caption copy-small">
                    {imageCaption}
                </p>
            )}
        </div>
    );
};

export default LandscapeMedia;
