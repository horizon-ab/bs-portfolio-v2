import { notFound } from "next/navigation"
import { parsedMdxFiles } from '@/lib/fetchPosts'
import { MdxLayout } from "@/components/mdxLayout";

export type BlogPostPageParams = {
    params: Promise<{
        slug: string
    }>,
    // searchParams?: { id?: string } add later if you want filtering
};

export const generateMetadata = async ({
    params,
}: BlogPostPageParams) => {
    const { slug } = await params;
    const posts = await parsedMdxFiles();
    const post = posts.find((p) => p.slug == slug);

    if (!post) notFound();

    return {
        title: post?.title || "Blog Post",
        description: post?.description || "A blog post"
    }
}
export async function generateStaticParams() {
    const posts = await parsedMdxFiles();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost(props: BlogPostPageParams) {
    const params = await props.params;
    const { slug } = params;
    const posts = await parsedMdxFiles();
    const postComponent = posts.find((p) => p.slug == slug)
    if (!postComponent) return notFound();

    return (
        <MdxLayout props={postComponent}>{postComponent.content}</MdxLayout>
    );
}