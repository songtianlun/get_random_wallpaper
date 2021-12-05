import React from "react";

export function Header() {
    return (
        <header className="mb-auto">
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor"
                         className="me-2 bi bi-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path
                            d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                    <span className="fs-4"><h1 className="fs-5 my-1">Get Random Wallpaper</h1></span>
                </a>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a className="me-3 py-2 text-dark text-decoration-none" href="https://www.frytea.com/">Homepage</a>
                    <a className="me-3 py-2 text-dark text-decoration-none" href="https://www.frytea.com/">About</a>
                    {/*<a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>*/}
                    {/*<a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>*/}
                </nav>
            </div>
        </header>
    )
}
