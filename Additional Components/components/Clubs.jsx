import React from 'react'

export default function ClubSpace() {
    return (
        <div id="inChat">
            <div id="list">
                <div className="inList">
                    <h2 className="ti">
                        <img
                            className="backHome"
                            src="https://cdn-icons-png.flaticon.com/128/9332/9332031.png"
                            height="25px"
                            width="25px"
                            alt=""
                        />{" "}
                        Back
                    </h2>
                    <div className="specs">
                        <h3 className="sel">
                            options{" "}
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/9058/9058776.png"
                                height="20px"
                                width="20px"
                                alt=""
                                onclick="openHome()"
                            />
                        </h3>
                        <div className="write">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
                                width="25px"
                                height="25px"
                                alt=""
                            />
                        </div>
                        <div className="fav">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/2550/2550223.png"
                                width="25px"
                                height="25px"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="searchIn">
                        <input type="text" placeholder="Search" />
                        <img
                            id="magicSearch"
                            src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png"
                            height="20px"
                            alt=""
                        />
                    </div>
                    <div id="breakThrough">
                        <div className="card">
                            <div className="dp">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
                                    height="60px"
                                    width="60px"
                                    alt=""
                                />
                            </div>
                            <div className="textPatch">
                                <h4 id="">Coding Club</h4>
                                <p>Hi, whats goin on?</p>
                            </div>
                            <div className="detailsz">
                                <p>7:06</p>
                                <p className="tip">2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ************************************************************** */}
            <div id="msg-win">
                <div className="inMsg-win">
                    <div className="headWidget">
                        <div className="profilePic">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/4140/4140040.png"
                                width="60px"
                                height="60px"
                                alt=""
                            />
                        </div>
                        <div className="userName">
                            <h3>Group</h3>
                            <p>Someone is Typing...</p>
                        </div>
                        <div className="contactOpt">
                            <img
                                id="videoCall"
                                src="https://cdn-icons-png.flaticon.com/128/3747/3747177.png"
                                width="25px"
                                height="25px"
                                alt=""
                            />
                            <img
                                id="voiceCall"
                                src="https://cdn-icons-png.flaticon.com/128/1959/1959251.png"
                                width="25px"
                                height="25px"
                                alt=""
                            />
                            <img
                                id="moreOptions"
                                src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
                                width="25px"
                                height="25px"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="msg-screen">
                        <div className="left">Hey !</div>
                        <div className="right">Hi !</div>
                    </div>
                    <div className="editor">
                        <div className="emoticons">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/1023/1023656.png"
                                height="35px"
                                width="35px"
                                alt=""
                            />
                        </div>
                        <div className="inputField">
                            <input type="text" placeholder="Type your message here..." />
                        </div>
                        <div className="attachments">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/2356/2356589.png"
                                width="25px"
                                height="25px"
                                alt=""
                            />
                        </div>
                        <div className="mic">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/4675/4675109.png"
                                height="25px"
                                width="25px"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
