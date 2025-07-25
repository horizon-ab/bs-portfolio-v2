import { parsedMdxFiles } from "@/lib/fetchPosts"
import Link from "next/link";

export default async function BlogDisplay() {
    const posts = await parsedMdxFiles();
    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return (
        <div className="flex flex-col gap-5 w-2/3">
            {sortedPosts.map((post => {
                return(
                    <Link key={post.slug} className="border-1 p-5 w-full hover:line-through" href={`/blog/${post.slug}`}>{post.title} - {post.description}</Link>
                );
            }))}
        </div>
    )
}