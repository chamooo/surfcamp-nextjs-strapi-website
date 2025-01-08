import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Button from "./UI/Button";

const InfoBlock = ({ data }) => {
    const { headline, text, button, image, showImageOnRight } = data;

    return (
        <section className={`info ${showImageOnRight ? "info--reversed" : ""}`}>
            <img className="info__image" src={image.url} alt={image.alt} />
            <div className="info__text">
                <h2 className="info__headline">{headline}</h2>
                <ReactMarkdown className="copy">{text}</ReactMarkdown>
                <Button buttonData={button} />
            </div>
        </section>
    );
};

export default InfoBlock;
