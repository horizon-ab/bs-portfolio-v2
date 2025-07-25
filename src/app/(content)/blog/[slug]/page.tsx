import { notFound } from "next/navigation"
import { parsedMdxFiles, Post } from '@/lib/fetchPosts'
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize"
import { mdxComponents } from "@/components/markdownComponents";

export type BlogPostPageParams = {
    params: Promise<{
        slug: string
    }>
};

export const generateMetadata = async ({
    params,
    searchParams
}: {
    params: { slug: string };
    searchParams: { id: string };
}) => {
    const { slug } = await params;
    const posts = await parsedMdxFiles();
    const post = posts.find((p) => p.slug == slug);
    return {
        title: post?.title,
        description: post?.description
    }
}

export function MdxLayout({ children, props }: { children: string, props: Post} ) {
    return (
        <div className="flex flex-col items-center gap-10 p-10 text-xl">
            <div className="flex flex-col items-start w-2/3 gap-5">
                <div className="text-5xl">{props.title}</div>
                <div className="">Published {props.date}</div>
            </div>
            <div className="flex flex-col gap-10 w-2/3">
                <MDXRemote
                    source={children}
                    options={{
                        mdxOptions: {
                            
                        }
                    }}
                    components={mdxComponents}
                />
            </div>
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
    const posts = await parsedMdxFiles();
    const postComponent = posts.find((p) => p.slug == slug)
    if (!postComponent) return notFound();

    return (
        <MdxLayout props={postComponent}>{postComponent.content}</MdxLayout>
    );
}