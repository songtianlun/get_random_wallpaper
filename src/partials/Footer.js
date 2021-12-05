import logo from "../logo.svg";
import React from "react";

export function Footer() {
    return (
        <footer className="mt-auto pt-2 mt-3 border-top">

            {/* Copyrights note */}
            <div className="fw-light text-secondary mr-4 mx-4">
                Copyright © 2021 •
                <a className="text-secondary hover:underline" href="https://www.frytea.com/" target="_blank" rel="noreferrer"> Frytea </a>•
                <a className="text-secondary hover:underline" href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer"> 粤 ICP 备 19144283 号 </a> <br/>
                Powered by
                <a className="animate-spin" target="_blank" rel="noreferrer" href="https://unsplash.com">
                    <svg className="ms-1" height="16" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m7.5 6.75v-6.75h9v6.75zm9 3.75h7.5v13.5h-24v-13.5h7.5v6.75h9z"/>
                    </svg>
                </a>
                <a className="animate-spin" target="_blank" href="https://reactjs.org/" rel="noreferrer">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            </div>
        </footer>
    )
}
