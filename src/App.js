import React from "react";
import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import {getDevice} from "./utils";
import {Toast, Modal} from "bootstrap";
import {useParams} from "react-router-dom";
import {defaultSizes, defaultKeywords} from "./data";
import {Footer} from "./partials/Footer";
import {Header} from "./partials/Header";
import {ToastMessags} from "./partials/ToastMessags";
import {HelpModal} from "./partials/HelpModal";

function getDeviceWidth() {
    return window.screen.width * window.devicePixelRatio
}

function getDeviceHeight() {
    return window.screen.height * window.devicePixelRatio
}

function Control({hsize, htopic}) {
    const [sizes, setSizes] = useState(defaultSizes)
    const [keywords, setKeywords] = useState(defaultKeywords)
    const [size, setSize] = useState(0)
    const [keyword, setKeyword] = useState(0)
    const [imgUrl, setImgUrl] = useState('https://source.unsplash.com/random/'+getDeviceWidth()+'x'+getDeviceHeight()+"?"+keywords[keyword]['english'])
    const [getting, setGetting]  = useState(false)
    const [toastTitle, setToastTitle] = useState("通知")
    const [toastMessage, setToastMessage] = useState("获取成功！")
    const [useMirror, setUseMirror] = useState(true)

    const listItems = sizes.map((obj,idx) =>
        <option  key={idx} value={idx}>{obj.name}</option>
    );
    const keywordItems = keywords.map((obj, idx) =>
        <option  key={idx} value={idx}>{obj.chinese}</option>
    )

    const showToast = (message) => {
        var toastLiveExample = document.getElementById('liveToast')
        var toast = new Toast(toastLiveExample)
        setToastTitle('通知')
        setToastMessage(message)
        toast.show()
    }
    useEffect(() => {
        let deviceName = getDevice()
        // 之后提取其中的 X 和 Y 值
        // let X = hsize ? hsize.split('x')[0] : sizes[size]["x"]
        // let Y = hsize ? hsize.split('x')[1] : sizes[size]["y"]
        if (htopic) {
            setKeywords([{chinese:htopic, english:htopic}, ...keywords])
        }
        // 将设备尺寸存入清单
        setSizes([{name:getDeviceWidth() + " x " + getDeviceHeight() + " ≈ Your "+deviceName, x:getDeviceWidth(), y:getDeviceHeight()}, ...sizes])
        // if (!hsize || !htopic) {
        //     window.location.replace("/"+X+"x"+Y+"/"+UrlTopic)
        // }
        getImg(getDeviceWidth() , getDeviceHeight())

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        // handleGet()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sizes])
    const getImg = (X, Y) => {
        setGetting(true)
        axios.get('/api/'+X+'x'+Y+"?"+keywords[keyword]['english'])
            .then(function (response) {
                // console.log(response);
                // console.log(response.request.responseURL);
                let oldMainUrl = imgUrl.split('?')[0];
                let newMainUrl = response.request.responseURL.split('?')[0];
                if(oldMainUrl === newMainUrl){
                    showToast("内容重复，请尝试重新获取。")
                } else {
                    showToast("获取成功！")
                }
                if(useMirror){
                    setImgUrl(response.request.responseURL.replace(/images\.unsplash\.com/, "dogefs.s3.ladydaily.com/~/source/unsplash"))
                } else {
                    setImgUrl(response.request.responseURL);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                showToast("错误："+error)
            })
            .then(function () {
                // always executed
                setGetting(false)
            })
    }
    const handleGet = () => {
        // console.log("Get!")
        // console.log(sizes[size])
        getImg(sizes[size]['x'], sizes[size]['y'])
        // let imageUrl = 'https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']
        // setImgUrl('https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']+"?"+keywords[keyword]['english'])
        // console.log("url:",imgUrl)
        // document.getElementById('random_wallpaper').src=imgUrl
    }
    const handleSizeSelect = (event) => {
        console.log(event.target.value)
        setSize(event.target.value)
    }
    const handleKeywordSelect = (event) => {
        console.log(event.target.value)
        setKeyword(event.target.value)
    }
    const handleUseMirror = (event) => {
        // console.log(event)
        setUseMirror(!useMirror)
    }
    const showHelpModel = () => {
        var myModal = document.getElementById('exampleModal')
        var modal = new Modal(myModal)
        modal.show()
    }
      return (
          <>
              <ToastMessags Title={toastTitle} Message={toastMessage} />
              <HelpModal url={imgUrl}/>
              <div className="row justify-content-center px-sm-1 px-lg-5 py-2 gx-5">

                  <div className="col-sm-12 col-lg-4 m-auto gy-4">
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
                      <div className="form-check form-switch mt-2 m-auto">
                          <input className="form-check-input" type="checkbox" role="switch"
                                 id="flexSwitchCheckDefault"
                                 checked={useMirror}
                                 onChange={handleUseMirror}
                          >
                          </input>
                          <label className="form-check-label"
                                 htmlFor="flexSwitchCheckDefault">Use Chinese Mirrors (
                              <a href="https://unsplash.dogedoge.com/" target="_blank" rel="noreferrer">
                                  dogedoge</a>)
                          </label>
                      </div>
                      <button type="button" className="col btn btn-primary mt-2 w-100"
                              onClick={handleGet}
                              disabled={getting}>

                          {getting ?
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Get"
                          }
                      </button>
                      <button type="button" className="col btn btn-primary mt-2 w-100"
                              onClick={() => {
                                  console.log("download:", imgUrl)
                                  window.open(imgUrl)
                              }}>Download</button>
                      <button type="button" className="col btn btn-primary mt-2 w-100"
                              onClick={showHelpModel}>Help</button>

                      {/*<div>*/}
                      {/*    <p>随机接口: {'https://source.unsplash.com/random/'+sizes[size]['x']+'x'+sizes[size]['y']+"?"+keywords[keyword]['english']}</p>*/}
                      {/*    <p>图片直链: {imgUrl}</p>*/}
                      {/*</div>*/}

                  </div>
                  <div className="col-sm-12 col-lg-8 align-content-center h-100 ">
                      <img className="mh-100 mw-100 mt-2 shadow rounded"
                           id="random_wallpaper"
                           width={sizes[size]['x']+'px'}
                           src={imgUrl} alt="random" />
                  </div>
              </div>
          </>
      )
}

function Main({hsize, htopic}) {
    return (
        <main className="px-3 mb-4">
            <Control hsize={hsize} htopic={htopic}/>
        </main>
    )
}

function App() {
    let params = useParams()
    return (
        <div className="container-fluid h-100 p-3 mx-auto d-flex flex-column">
            <Header />
            <Main hsize={params.size} htopic={params.topic}/>
            <Footer />
        </div>
    );
}

export default App;
