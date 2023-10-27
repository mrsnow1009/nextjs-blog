import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import { getAllPostsData, sortDatas } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

// export async function getStaticProps() {
//     const allPostsData = getSortPostData();
//     return {
//         props: {
//             allPostsData
//         }
//     }
// };

export default function Home({ allSortPostsData }) {
    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h1 className={utilStyles.headingLg}>Blog</h1>
                    <ul className={utilStyles.list}>
                        {allSortPostsData.map(({ id, title, date }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <h4>
                                    <Link href={`/posts/${id}`} title={title}>{title}</Link>
                                </h4>
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </Layout>
        </>
    );
};

export async function getStaticProps({ params }) {
    const allPostsData = getAllPostsData();
    const allSortPostsData = sortDatas(allPostsData);
    return {
        props: {
            allSortPostsData
        }
    }

} 