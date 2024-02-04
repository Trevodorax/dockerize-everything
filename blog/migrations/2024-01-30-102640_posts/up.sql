CREATE TABLE posts
(
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(300) NOT NULL,
    summary      VARCHAR(500) NOT NULL,
    body         TEXT         NOT NULL,
    published    BOOLEAN      NOT NULL DEFAULT false,
    published_at TIMESTAMP    NOT NULL DEFAULT now()
);

INSERT INTO posts (title, summary, body, published)
VALUES
    (
        'An Interactive Guide to CSS Grid',
        'CSS Grid is an incredibly powerful tool for building layouts on the web, but like all powerful tools, there''s a significant learning curve. In this tutorial, we''ll build a mental model for how CSS Grid works and how we can use it effectively. I''ll share the biggest 💡 lightbulb moments I''ve had in my own learning journey.',
        '<p>CSS Grid is one of the most amazing parts of the CSS language. It gives us a ton of new tools we can use to create sophisticated and fluid layouts.</p><p>It''s also surprisingly complex. It took me quite a while to truly become comfortable with CSS Grid!</p><p>In this tutorial, I''m going to share the biggest 💡 lightbulb moments I''ve had in my own journey with CSS Grid. You''ll learn the fundamentals of this layout mode, and see how to do some pretty cool stuff with it. ✨</p><blockquote><strong>Browser support?</strong><br><br>CSS Grid is the most modern tool for building layouts in CSS, but it isn''t exactly “bleeding edge”; it''s been supported by all major browsers since 2017!<br>According to caniuse, CSS Grid is supported for 97.8% of users. This is excellent browser support; Flexbox is only about 0.5% more supported!</blockquote><h2>Mental model</h2><p>CSS is comprised of several different layout algorithms, each designed for different types of user interfaces. The default layout algorithm, Flow layout, is designed for digital documents. Table layout is designed for tabular data. Flexbox is designed for distributing items along a single axis.</p><p><a href="https://www.joshwcomeau.com/css/interactive-guide-to-grid/">Read more on Josh W. Comeau''s blog</a></p>',
        true
    ),
    (
        'Rust ownership, the hard way',
        'In order to truly understand Rust, one needs to understand its crucial differentiating feature: ownership. Let’s go through it in detail the hard way.',
        '<p>This article is an introduction to Rust’s concept of ownership. It’s designed for someone who is already a programmer but who is not especially familiar (maybe even not at all familiar) with Rust. It doesn’t attempt to explain all the concepts it deals with, but for the most part it should be clear enough. If you’re a beginner you may also find that you don’t understand various parts of it; in such a case, you might like to hold the article while you go and learn more about them elsewhere; you’ll find more value in coming back to this article after.</p><p>This concept of ownership is the pivotal part of Rust; it’s the part that makes its combination of efficiency and safety possible. While the rest of Rust is pretty similar to what you’ll find in mainstream languages, so pattern matching and algebraic data types aren’t widespread in C‐style languages, but they’re conceptually simple., these concepts of ownership and lifetimes are different from anything in any mainstream language, so it’s likely to be the part that you’ll spend the longest trying to grok; if you don’t give up but persist, then when it all clicks, working in Rust will be a joy, and you’ll have unlocked a marvellous ability to reason about code. You’ll also probably wish you could transplant a lot of the aspects of Rust’s ownership model to other languages you deal with.</p><p>This article deals with the concepts and theory of ownership and lifetimes; it doesn’t provide much in the way of practical usage examples; those you can find elsewhere. But it does explain all the rules that go to make Rust’s ownership model what it is. (It is called “the hard way” for a reason.)</p><p><a href="https://chrismorgan.info/blog/rust-ownership-the-hard-way/">Read more on Chris Morgan''s blog.</a><p>',
        true
    );
