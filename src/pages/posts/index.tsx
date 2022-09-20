import { GetStaticProps } from 'next'
import Head from 'next/head'
import { createClient } from '../../services/prismicio'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'

export default function posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href=''>
                        <time>123 de março</time>
                        <strong>Title</strong>
                        <p>subtittle</p>
                    </a>
                    <a>
                        <time>123 de março</time>
                        <strong>Title</strong>
                        <p>subtittle</p>
                    </a>

                    <a>
                        <time>123 de março</time>
                        <strong>Title</strong>
                        <p>subtittle</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = createClient()
    const response = await prismic.getByType(
        Prismic.predicate.at("document.type", "posts")
        ,
        {
            fetch: ["post.tittle", "post.content"],
            pageSize: 100,
        }

    )
    console.log(response)
    return {
        props: {}
    }
}