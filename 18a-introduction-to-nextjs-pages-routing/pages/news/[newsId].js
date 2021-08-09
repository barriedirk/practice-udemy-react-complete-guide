// this is a dynamic page
// convention: [pageName].js

import { useRouter } from 'next/router';

// our-domain.com/news/something-important
// our-domain.com/news/abc
// our-domain.com/news/any-other-page

function DetailPage() {
    const router = useRouter();

    console.log('[ router.query.newsId ] ::: ', router.query.newsId);
    // how this work when your wrote the url on the browser
    // [ router.query.newsId ] :::  undefined
    // [ router.query.newsId ] :::  abc

    const newsId = router.query.newsId;

    // send a rquest to backend API
    // to fetch the news item with newsId

    return <h1>The Dynamic Page</h1>;
}

export default DetailPage;
