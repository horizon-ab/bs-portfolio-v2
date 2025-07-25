import { ReactNode } from "react";

export default function ContentLayout({ children }: {children: ReactNode}) {
    return (
        <div className="">{children}</div> // flex flex-col items-center gap-10 p-10 text-xl
    )
}