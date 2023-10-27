import Image from 'next/image';
import styles from './layout.module.css';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Tuyet Minh Nhat';
export const siteTitle = 'Nextjs example website';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta
                    name="description"
                    content="Day la content cuar me ta"
                />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            className={utilStyles.borderCircle}
                            src="/images/profile.jpg"
                            alt="home"
                            width={150}
                            height={150}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href={'/'}>
                            <Image
                                priority
                                className={utilStyles.borderCircle}
                                src="/images/profile.jpg"
                                alt="home"
                                width={50}
                                height={50}
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <>
                    <div className={styles.backToHome}>
                        <Link href="/">Back to home</Link>
                    </div>
                </>
            )}
        </div>
    );
}