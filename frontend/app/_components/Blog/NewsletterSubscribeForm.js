"use client";
const NewsletterSubscribeForm = () => {
    return (
        <section className="newsletter">
            <div className="newsletter__info">
                <h4>Subscribe to our newsletter</h4>
                <p className="copy">
                    Unlock Exclusive Insights and Stay In the Know – Subscribe
                    to Our Newsletter Today to always stay in touch
                </p>
            </div>
            <form className="newsletter__form">
                <input
                    type="text"
                    className="newsletter__email input"
                    placeholder="Enter your E-mail address"
                />
                <button className="newsletter__subscribe btn btn--medium btn--turquoise">
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default NewsletterSubscribeForm;
