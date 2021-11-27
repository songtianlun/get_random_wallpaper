import logo from './logo.svg';
import {useState} from "react";
import './App.css';

const sizes = [
    {id:1, name:'1125 x 2436 - iPhone X', x: 1125, y: 2436},
    {id:2, name:'1242 x 2208 - iPhone 8+ (8+, 7+, 6S+, 6+)', x: 1242, y: 2208},
    {id:3, name:'750 x 1334 - iPhone 8 (8, 7, 6S, 6)', x: 750, y: 1334},
];

function Control() {
    const listItems = sizes.map((size,idx) =>
        <option key={idx} value={idx}>{size.name}</option>
    );
    const [size, setSize] = useState(0);
    const handleGet = () => {
        console.log("Get!")
        console.log(sizes[size])
        let imageUrl = 'https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']
        console.log("url:",imageUrl)
        document.getElementById('random_wallpaper').src=imageUrl
    }
    const handleSelect = (event) => {
        console.log(event.target.value)
        setSize(event.target.value)
    }
      return (
          <>
              <div className="row px-5 py-2">
                  <select className="col form-select mb-3" aria-label="Default select example" onChange={handleSelect}>
                      {listItems}
                  </select>
                  <div className="col align-items-center">
                      <button type="button" className="btn btn-primary m-auto" onClick={handleGet}>Get</button>
                  </div>
              </div>
              <div className="mw-80 mh-80">
                  <img className="h-80 w-80" id="random_wallpaper" src="https://imagehost-cdn.frytea.com/images/2021/11/20/20211120191719b9e063d7829bfc75.png" alt="random" />
              </div>
          </>
      )
}

function Main() {
    return (
        <div className="h-80">
            <Control />
        </div>
    )
}

function Header() {
    return (
        <header className="h-10">
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94"
                         role="img"><title>Bootstrap</title>
                        <path fillRule="evenodd" clipRule="evenodd"
    d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
    fill="currentColor"/>
                    </svg>
                    <span className="fs-4">Get Random Wallpaper</span>
                </a>

                {/*<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">*/}
                {/*    <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>*/}
                {/*    <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>*/}
                {/*    <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>*/}
                {/*    <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>*/}
                {/*</nav>*/}
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer className="h-10 pt-4 my-md-5 pt-md-5 border-top">

            {/* Copyrights note */}
            <div className="text-sm text-gray-600 mr-4">
                Copyright © 2021 <a className="text-blue-600 hover:underline" href="https://www.frytea.com/">Frytea</a> •
                <a className="text-blue-600 hover:underline" href="http://beian.miit.gov.cn/"> 粤 ICP 备 19144283 号 </a> <br/>
                Powered by <a className="animate-spin" href="https://reactjs.org/"><img src={logo} className="App-logo" alt="logo" /></a>
            </div>
        </footer>
    )
}

function App() {
  return (
    <div className="container py-3">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
