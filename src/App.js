import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

const sizes = [
    {name:'0480 x 0854 - Android One', x:480, y:854},
    {name:'0640 x 1136 - iPhone SE（SE, 5S, 5C）', x:640, y:1136},
    {name:'0720 x 1280 - Oppo A57', x:720, y:1280},
    {name:'0720 x 1560 - 小米CC9e', x:720, y:1560},
    {name:'0828 x 1792 - iPhone 11 （11，XR）', x:828, y:1792},
    {name:'1080 x 1920 - Google Pixel', x:1080, y:1920},
    {name:'1080 x 2040 - 小米MIX', x:1080, y:2040},
    {name:'1080 x 2160 - Google Pixel 3 (3,Lite)', x:1080, y:2160},
    {name:'1080 x 2240 - HUAWEI P20 Pro', x:1080, y:2240},
    {name:'1080 x 2244 - HUAWEI Mate20', x:1080, y:2244},
    {name:'1080 x 2246 - Moto P30 Note', x:1080, y:2246},
    {name:'1080 x 2270 - Moto G7 PLUS', x:1080, y:2270},
    {name:'1080 x 2280 - Samsung Galaxy S10e', x:1080, y:2280},
    {name:'1080 x 2310 - HUAWEI nova 5i', x:1080, y:2310},
    {name:'1080 x 2312 - HUAWEI nova 4e', x:1080, y:2312},
    {name:'1080 x 2340 - iPhone 12 Mini', x:1080, y:2340},
    {name:'1080 x 2400 - 小米10 Pro', x:1080, y:2400},
    {name:'1125 x 2436 - iPhone X (X,XS)', x:1125, y:2436},
    {name:'1170 x 2532 - iPhone 12 Pro', x:1170, y:2532},
    {name:'1176 x 2400 - HUAWEI Mate30 Pro', x:1176, y:2400},
    {name:'1200 x 2640 - Huawei P40 Pro', x:1200, y:2640},
    {name:'1242 x 2688 - iPhone 11 Pro Max', x:1242, y:2688},
    {name:'1284 x 2778 - iPhone 12 Pro Max', x:1284, y:2778},
    {name:'1440 x 0900 - MacBook Air 13', x:1440, y:900},
    {name:'1440 x 2560 - HUAWEI P10 Plus', x:1440, y:2560},
    {name:'1440 x 2560 - Google Pixel XL', x:1440, y:2560},
    {name:'1440 x 3040 - Samsung Galaxy S10', x:1440, y:3040},
    {name:'1440 x 3120 - OnePlus 7 Pro', x:1440, y:3120},
    {name:'1536 x 2048 - iPad mini 4 (mini 4, mini 2)', x:1536, y:2048},
    {name:'1620 x 2160 - iPad 10.2', x:1620, y:2160},
    {name:'1668 x 2224 - iPad Air 10.5', x:1668, y:2224},
    {name:'1668 x 2388 - iPad Pro 11', x:1668, y:2388},
    {name:'1800 x 2560 - Google Pixel C', x:1800, y:2560},
    {name:'1920 x 1080 - iMac 21.5', x:1920, y:1080},
    {name:'2048 x 2732 - iPad Pro 12.9', x:2048, y:2732},
    {name:'2256 x 1504 - Surface Laptop', x:2256, y:1504},
    {name:'2304 x 1440 - MacBook', x:2304, y:1440},
    {name:'2560 x 1440 - iMac 27', x:2560, y:1440},
    {name:'2560 x 1600 - MacBook Pro 13', x:2560, y:1600},
    {name:'2736 x 1824 - Surface Pro', x:2736, y:1824},
    {name:'2880 x 1800 - MacBook Pro 15', x:2880, y:1800},
    {name:'3000 x 2000 - Surface Book', x:3000, y:2000},
    {name:'3072 x 1920 - MacBook Pro 16', x:3072, y:1920},
    {name:'3200 x 1800 - Dell XPS 13', x:3200, y:1800},
    {name:'3440 x 1440 - LG 34UC98-W', x:3440, y:1440},
    {name:'3840 x 2160 - Dell XPS 15', x:3840, y:2160},
    {name:'4096 x 2304 - iMac 21.5 4K', x:4096, y:2304},
    {name:'4500 x 3000 - Surface Studio', x:4500, y:3000},
    {name:'5120 x 2880 - iMac 27 5K', x:5120, y:2880},
    {name:'6016 x 3384 - Apple Pro Display XDR', x:6016, y:3384},
];

const keywords =[
    {chinese:"所有类型", english:"Wallpapers"},
    {chinese:"三维渲染图", english:"3DRenders"},
    {chinese:"纹理和图案", english:"Textures&Patterns"},
    {chinese:"建筑", english:"Architecture"},
    {chinese:"新颖视角", english:"Experimental"},
    {chinese:"自然", english:"Nature"},
    {chinese:"时尚", english:"Fashion"},
    {chinese:"电影", english:"Film"},
    {chinese:"食品", english:"Food&Drink"},
    {chinese:"健康与幸福", english:"Health&Wellness"},
    {chinese:"实事", english:"Current Events"},
    {chinese:"人类", english:"People"},
    {chinese:"室内", english:"Interiors"},
    {chinese:"街头摄影", english:"Street"},
    {chinese:"旅行", english:"Travel"},
    {chinese:"动物", english:"Animals"},
    {chinese:"精神性", english:"Spirituality"},
    {chinese:"艺术和文化", english:"Arts&Culture"},
    {chinese:"历史", english:"History"},
    {chinese:"工作场所", english:"Business&Work"},
    {chinese:"田径", english:"Athletics"},
]

function Control() {

    const [size, setSize] = useState(38);
    const [keyword, setKeyword] = useState(0);
    const [imgUrl, setImgUrl] = useState('https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']+"?"+keywords[keyword]['english'])
    const listItems = sizes.map((obj,idx) =>
        <option  key={idx} value={idx}>{obj.name}</option>
    );
    const keywordItems = keywords.map((obj, idx) =>
        <option  key={idx} value={idx}>{obj.chinese}</option>
    )
    useEffect(() => {
        handleGet()
    }, [])
    const handleGet = () => {
        // console.log("Get!")
        // console.log(sizes[size])
        // let imageUrl = 'https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']
        setImgUrl('https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']+"?"+keywords[keyword]['english'])
        // console.log("url:",imgUrl)
        document.getElementById('random_wallpaper').src=imgUrl
        axios.get('/api/'+sizes[size]['x']+'x'+sizes[size]['y']+"?"+keywords[keyword]['english'])
            .then(function (response) {
                // handle success
                // console.log(response);
                // console.log(response.request.responseURL);
                setImgUrl(response.request.responseURL);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    const handleSizeSelect = (event) => {
        console.log(event.target.value)
        setSize(event.target.value)
    }
    const handleKeywordSelect = (event) => {
        console.log(event.target.value)
        setKeyword(event.target.value)
    }
      return (
          <>
              <div className="row justify-content-center px-5 py-2 ">

                  <div className="col-md-8 col-lg-5 m-auto">
                      <div className="mx-4">
                          <h6 className="m-0"><strong>说明：</strong></h6>
                          <p className="m-0 mb-4">这是一个随机美图生成器，选择尺寸、主题，点击 <mark>Get</mark>
                              获取，点击 <mark>Download</mark> 跳转直链。</p>
                      </div>
                      <select
                          className="col-8 form-select mt-2"
                          aria-label="Default select example"
                          defaultValue={size}
                          onChange={handleSizeSelect}>
                          {listItems}
                      </select>
                      <select
                          className="col form-select mt-2"
                          aria-label="Default select example"
                          defaultValue={keyword}
                          onChange={handleKeywordSelect}>
                          {keywordItems}
                      </select>
                      <button type="button" className="col btn btn-primary mt-2 w-100" onClick={handleGet}>Get</button>
                      <button type="button" className="col btn btn-primary mt-2 w-100"
                              onClick={() => {
                                  console.log("download:", imgUrl)
                                  window.open(imgUrl)
                              }}>Download</button>
                      {/*<div>*/}
                      {/*    <p>随机接口: {'https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']+"?"+keywords[keyword]['english']}</p>*/}
                      {/*    <p>图片直链: {imgUrl}</p>*/}
                      {/*</div>*/}

                  </div>
                  <div className="col-md-8 col-lg-6 align-content-center h-100 ">
                      <img className="mh-100 mw-100 mt-2 shadow rounded" id="random_wallpaper" src={imgUrl} alt="random" />
                  </div>
              </div>
          </>
      )
}

function Main() {
    return (
        <Control />
    )
}

function Header() {
    return (
        <header className="row h-auto ">
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor"
                         className="me-2 bi bi-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path
                            d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                    <span className="fs-4"><h1 className="fs-4 my-1">Get Random Wallpaper</h1></span>
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

function Footer() {
    return (
        <footer className="row h-auto pt-2 mt-3 border-top">

            {/* Copyrights note */}
            <div className="fs-6 fw-light text-secondary mr-4 mx-4">
                Copyright © 2021 •
                <a className="text-secondary hover:underline" href="https://www.frytea.com/" target="_blank"> Frytea </a>•
                <a className="text-secondary hover:underline" href="http://beian.miit.gov.cn/" target="_blank"> 粤 ICP 备 19144283 号 </a> <br/>
                Powered by
                <a className="animate-spin" target="_blank" href="https://unsplash.com">
                    <svg className="ms-1" height="16" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m7.5 6.75v-6.75h9v6.75zm9 3.75h7.5v13.5h-24v-13.5h7.5v6.75h9z"/>
                    </svg>
                </a>
                <a className="animate-spin" target="_blank" href="https://reactjs.org/">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            </div>
        </footer>
    )
}

function App() {
  return (
    <div className="container py-3 min-vh-100">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
