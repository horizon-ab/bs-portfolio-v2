import path from "node:path"
import * as fs from "node:fs/promises"
import matter from "gray-matter"
import { cache } from "react"
import { Metadata } from "next"

export type Post = {
    slug: string,
    draft: boolean,
    title: string,
    date: string,
    tags: string[],
    description: string,
    content: string,
    updated?: string,
    href?: string,
}

async function parseMdxFiles() {
    const filePaths = await fs.readdir(path.join(process.cwd(), "posts"))

    const postsData = [];

    for (const filePath of filePaths) {
        const postFilePath = path.join(process.cwd(), "posts", filePath);
        const postContent = await fs.readFile(postFilePath, "utf8");
        const { data, content } = matter(postContent);
        
        // Only display posts if it's not a draft
        if (!data.draft) {
            const postData = { ...data, content: content } as Post;
            postsData.push(postData);
        }
    }

    return postsData;
    
}

export const parsedMdxFiles = cache(parseMdxFiles);