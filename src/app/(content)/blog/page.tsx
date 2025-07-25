import BlogDisplay from "@/components/blogDisplay"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'blog',
    description: 'blog overview'
  }

export default function Blog() {

    return (
        <div className="flex flex-col items-center gap-10 p-10 text-xl">
            <div className="flex flex-col items-start w-2/3 gap-10">
                <div className="text-5xl">Blog</div>
                <div className="">Some tech stuff and some non-tech stuff:</div>
            </div>
            <BlogDisplay />
        </div>
    );
}