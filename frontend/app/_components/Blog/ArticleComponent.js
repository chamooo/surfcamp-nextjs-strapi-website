import Headline from "./article-content/Headline";
import LandscapeMedia from "./article-content/LandscapeMedia";
import Paragraph from "./article-content/Paragraph";
import TextWithImage from "./article-content/TextWithImage";

const COMPONENT_MAP = {
    headline: Headline,
    "text-with-image": TextWithImage,
    paragraph: Paragraph,
    "landscape-media": LandscapeMedia,
};

const ArticleComponent = ({ component }) => {
    const componentType = component.__component.split("blog-article.").pop();
    const Component = COMPONENT_MAP[componentType];

    if (!Component) return null;

    return <Component component={component} />;
};

export default ArticleComponent;
