// our-domain.com/news
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <a href="/news/nextjs-is-a-great-framework">
                        NextJs is a Great Framework (with anchor)
                    </a>
                </li>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">
                        NextJs is a Great Framework (with Link)
                    </Link>
                </li>
                <li>Some else</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;
