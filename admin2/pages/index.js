import Head from 'next/head';
import { useRouter } from 'next/router';
import useRequireLogin from 'hooks/useRequireLogin';
import Layout from 'components/layout/Layout';
import styles from './Home.module.css';

export default function Home() {
  const { loading } = useRequireLogin();
  const router = useRouter();
  const { id } = router.query;

  if (loading) {
    return null;
  }

  return (
    <Layout headerType={`content`}>
      {/* <div className={styles.container}> */}
      <Head>
        <title>Horizon Admin</title>
        <meta name="description" content="Horizon Admin" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <span className={styles.orange}>Horizon</span>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Here, where magic happens</code>
        </p>

        <div className={styles.grid}>
          <a href="/content" className={styles.card}>
            <h2>Content Management &rarr;</h2>
            <p>Control what can user see...</p>
          </a>

          <a href="/analysis/dashboard" className={styles.card}>
            <h2>Analysis &rarr;</h2>
            <p>See what user did...</p>
          </a>

          <a href="/onlineOrdering" className={styles.card}>
            <h2>Online Ordering &rarr;</h2>
            <p>Who ordered your product...</p>
          </a>

          <a href="/mailingList" className={styles.card}>
            <h2>Mailing List &rarr;</h2>
            <p>Send important messages...</p>
          </a>
        </div>
      </main>

      {/* </div> */}
    </Layout>
  );
}
