import { notFound } from "next/navigation"
import { parsedMdxFiles, Post } from '@/lib/fetchPosts'
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize"

export type BlogPostPageParams = {
    params: Promise<{
        slug: string
    }>
};

export function MdxLayout({ children, props }: { children: string, props: Post} ) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start w-2/3 gap-10">
                <div className="text-5xl">{props.title}</div>
                <div className="">{props.date}</div>
            </div>
            <MDXRemote
                source={children}
                options={{
                    mdxOptions: {
                        
                    }
                }}
            />
        </div>
    )
}

export async function generateStaticParams() {
    const posts = await parsedMdxFiles();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost(props: BlogPostPageParams) {
    const params = await props.params;
    const { slug } = params;
    const components = await parsedMdxFiles();
    const postComponent = components.find((p) => p.slug == slug)
    if (!postComponent) return notFound();

    return (
        <MdxLayout props={postComponent}>{postComponent.content}</MdxLayout>
    );
}