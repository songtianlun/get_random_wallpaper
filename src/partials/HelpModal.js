import React from "react";

export function HelpModal({url}) {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">使用方法</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                第一次进入会根据您的设备尺寸获取对应尺寸的随机图片，
                                之后可选择 <strong>尺寸</strong> 和 <strong>主题</strong> 再次获取随机图片。
                            </p>
                            <p>
                                如果您对该图满意，
                                可以 <strong>长按保存</strong> 或点击 <strong>Download</strong> 获取原图到本地后设为壁纸。
                            </p>
                            <p>
                                如果您使用 <code>Ubuntu</code> 或其他使用 <code>GNOME</code> 桌面的 <code>Linux</code> 核心操作系统，可以使用以下命令将本图设置为壁纸：
                            </p>
                            <div className="bg-dark p-3 my-3 rounded">
                                <code className="text-light">
                                    $ gsettings set org.gnome.desktop.background picture-uri "{url}"
                                </code>
                            </div>
                            <h5>联系作者</h5>
                            <ul>
                                <li>Blog: <a href="https://blog.frytea.com">https://blog.frytea.com</a></li>
                                <li>HomePage: <a href="https://www.frytea.com">https://www.frytea.com</a></li>
                                <li>E-mail: <a href="mailto:songtianlun@frytea.com">songtianlun@frytea.com</a></li>
                                <li>WeChart/Phone: (+86)18803979433</li>
                                <li>Google Voice: (+1)936-6662109</li>
                            </ul>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
