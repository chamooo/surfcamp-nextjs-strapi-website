const Headline = ({ component }) => {
    return (
        <h2 id={component.anchor} className="h3 article-headline">
            {component.headline}
        </h2>
    );
};

export default Headline;
