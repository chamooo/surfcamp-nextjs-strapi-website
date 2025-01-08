"use client";

import { useState } from "react";

const NewsletterSubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [hasSubscribed, setHasSubscribed] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (email) {
            setHasSubscribed(true);
            setEmail("");
        }
    };

    return (
        <section className="newsletter">
            {!hasSubscribed ? (
                <>
                    <div className="newsletter__info">
                        <h4>Subscribe to our newsletter</h4>
                        <p className="copy">
                            Unlock Exclusive Insights and Stay In the Know –
                            Subscribe to Our Newsletter Today to always stay in
                            touch
                        </p>
                    </div>

                    <form className="newsletter__form" onSubmit={onSubmit}>
                        <input
                            type="text"
                            className="newsletter__email input"
                            placeholder="Enter your E-mail address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="newsletter__subscribe btn btn--medium btn--turquoise">
                            Subscribe
                        </button>
                    </form>
                </>
            ) : (
                <h4 className="newsletter__thanks">
                    Thank you for subscribing!
                </h4>
            )}
        </section>
    );
};

export default NewsletterSubscribeForm;
