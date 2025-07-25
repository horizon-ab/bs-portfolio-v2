import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
    h1: ({children, props}) => {
        return <div className="text-5xl" {...props}>{children}</div>
    },
    h2: ({children, props}) => {
        return <div className="text-4xl" {...props}>{children}</div>
    },

    h3: ({children, props}) => {
        return <div className="text-3xl" {...props}>{children}</div>
    },
    h4: ({children, props}) => {
        return <div className="text-2xl" {...props}>{children}</div>
    },



}