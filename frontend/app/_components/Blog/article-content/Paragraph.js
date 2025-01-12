import ReactMarkdown from "react-markdown";

const Paragraph = ({ component }) => {
    const { text } = component;

    if (!text) return null;

    return (
        <ReactMarkdown className="copy article-paragraph">{text}</ReactMarkdown>
    );
};

export default Paragraph;
