import { Fragment } from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <Fragment>
            <h1>Homeeeeee Page</h1>
            <ul>
                <li>
                    <a href="/news/kek">The link</a>
                </li>
                <li>
                    <Link href="/news/kek">The Better Link</Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default HomePage;