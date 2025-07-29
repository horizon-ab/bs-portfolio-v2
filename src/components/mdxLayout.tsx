import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./markdownComponents"
import { Post } from "@/lib/fetchPosts"

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