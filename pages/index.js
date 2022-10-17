import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to T5 Project!</h1>

        <p className={styles.description}>
          Go to the
          <Link href="/admin">
            <a> CMS.</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
