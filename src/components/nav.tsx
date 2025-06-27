import Link from "next/link"

const navLinks = {
    "baysalt.dev" : {
        link : "/",
    },
    "blog" : {
        link : "/blog",
    },
}

export function NavBar() {
    return (
        <nav className="flex flex-row p-10 text-xl gap-10">
            {Object.entries(navLinks).map(([name, { link }]) => {
                return (
                    <Link key={name} href={link}>{name}</Link>
                )
            })}
        </nav>
    );
}