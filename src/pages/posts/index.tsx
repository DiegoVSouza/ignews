import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "../../services/prismicio";
import styles from "./styles.module.scss";
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
};

interface PostsProps {
    posts: Post[];
}
export default function posts({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/posts/preview/${post.slug}`}>
                            <a>
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>

                    ))}
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const client = createClient();
    const response = await client.get({
        predicates: [prismic.predicate.at("document.type", "publication")],
        fetch: ["post.tittle", "post.content"],
        pageSize: 100,
    });
    const posts = response.results.map((post) => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt:
                post.data.content.find((content) => content.type === "paragraph")
                    ?.text ?? "",
            updatedAt: new Date(post.last_publication_date).toLocaleDateString(
                "pt-BR",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }
            ),
        };
    });
    return {
        props: { posts },
    };
};
