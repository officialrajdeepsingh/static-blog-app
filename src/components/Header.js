import Link from 'next/link'

export default function Header() {

    return (<>
        <header className="mx-auto bg-green-200 flex p-4 flex-wrap md:flex-row items-center">
            <Link href="/">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Rust + Tauri + Nextjs</span>
                </a>
            </Link>

            <nav className="md:ml-auto flex  flex-row flex-wrap items-center text-base justify-center">
                <ul className="flex flex-row">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/search">
                            <a className="mr-5 hover:text-gray-900">
                               Search
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="mr-5 hover:text-gray-900">
                                About
                            </a>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>

    </>
    )
}