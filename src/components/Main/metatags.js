export const generateMetaTags = (title, description, author) => {

    return `<!-- Primary -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="author" content="${author}">

<!-- Facebook -->
<meta property="og:url" content="https://yoursite.com/"> <!-- ENTER YOUR SITE URL -->
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta name="og:author" content="${author}">
<meta property="og:type" content="website">
<meta property="og:image" content=""> <!-- ENTER IMAGE URL -->

<!-- Twitter -->
<meta property="twitter:url" content="https://yoursite.com/"> <!-- ENTER YOUR SITE URL -->
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${description}">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:image" content=""> <!-- ENTER IMAGE URL -->`;

}