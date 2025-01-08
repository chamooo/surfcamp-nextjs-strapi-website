import Link from "next/link";

const Button = ({ buttonData }) => {
    if (!buttonData) return null;

    const { slug, color, text } = buttonData;

    const classnames = `btn btn--medium btn--${color}`;

    if (!slug) {
        return <button className={classnames}>{text}</button>;
    }

    return (
        <Link href={`/${slug}`} className={classnames}>
            {text}
        </Link>
    );
};

export default Button;
