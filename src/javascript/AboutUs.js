import React, { Component } from 'react';
import '../css/AboutUs.css'
import Header from './Header.js'
import logo from '../images/sakura_logo.png'
import $ from "jquery";
import kimjunho_before from '../images/kimjunho_before.jpg'
import kimsungmi_before from '../images/kimsungmi_before.jpg'
import kimjunsoo_before from '../images/kimjunsoo_before.jpg'
import kimteawon_before from '../images/kimteawon_before.jpg'
import kimjunho_after from '../images/kimjunho_after.jpg'
import kimsungmi_after from '../images/kimsungmi_after.jpg'
import kimjunsoo_after from '../images/kimjunsoo_after.png'
import kimteawon_after from '../images/kimteawon_after.jpg'
import kimteawon_after2 from '../images/kimteawon_after2.jpg'
import css_img from "../images/css.png"
import erdcloud_img from "../images/erdcloud.png"
import firebase_img2 from "../images/firebase2.png"
import github_img from "../images/github.png"
import html_img from "../images/html.png"
import javascript_img from "../images/javascript.png"
import jquery_img from "../images/jquery.png"
import jsx_img from "../images/jsx.png"
import nodejs_img2 from "../images/nodejs2.png"
import npm_img from "../images/npm.png"
import react_img from "../images/react.png"
import vscode_img from "../images/vscode.png"
import yarn_img from "../images/yarn.png"
import bootstrap_img from "../images/bootstrap.png"


class AboutUs extends Component{
    constructor(){
        super();
        this.state={
            state1 : 0,
            state2 : 0,
            state3 : 0,
            state4 : 0
        }
    }

    imgChange(state, tagName){
        if(state === 0){
            if(tagName === "kimjunho-itag"){
                this.state.state1 = 1;
                $(".kimjunho-itag").attr("src",kimjunho_after);
            }else if(tagName === "kimsungmi-itag"){
                this.state.state2 = 1;
                $(".kimsungmi-itag").attr("src",kimsungmi_after);
            }else if(tagName === "kimjunsoo-itag"){
                this.state.state3 = 1;
                $(".kimjunsoo-itag").attr("src",kimjunsoo_after);
            }else if(tagName === "kimteawon-itag"){
                this.state.state4 = 1;
                $(".kimteawon-itag").attr("src",kimteawon_after);
            }
        }else if(state === 1){
            if(tagName === "kimjunho-itag"){
                this.state.state1 = 0;
                $(".kimjunho-itag").attr("src",kimjunho_before);
            }else if(tagName === "kimsungmi-itag"){
                this.state.state2 = 0;
                $(".kimsungmi-itag").attr("src",kimsungmi_before);
            }else if(tagName === "kimjunsoo-itag"){
                this.state.state3 = 0;
                $(".kimjunsoo-itag").attr("src",kimjunsoo_before);
            }else if(tagName === "kimteawon-itag"){
                this.state.state4 = 2;
                $(".kimteawon-itag").attr("src",kimteawon_after2);
            }
        }else if(state === 2){
            if(tagName === "kimteawon-itag"){
                this.state.state4 = 0;
                $(".kimteawon-itag").attr("src",kimteawon_before);
            }
        }
    }

    render(){
        return(
            <div className="Main">
            <Header/>
    
            <main>
                <div className="page-view2">
                <div className="aboutus-page">

                <div className="aboutus-big-title-div3">
                    <div className="aboutus-big-title-logo-div2">
                        <span class="aboutus-big-icon material-icons">
                            layers
                        </span>
                    </div>
                    <div className="aboutus-big-title3">?????????????????????????????????</div>
                </div>

                <div className="project-content-main-div">
                    <div className="project-content1">
                        <font className="project-company">?????????????????????</font>???????????????????????????????????????????????????   
                    </div>
                    <div className="project-content2">
                        <font className="project-name-point">???</font>??????<font className="project-name-point">???</font>????????????
                    </div>
                </div>
                    <div className="aboutus-big-title-div2">
                        <div class="aboutus-big-title-logo-div2">
                            <span class="aboutus-big-icon material-icons">
                                construction
                            </span>
                        </div>
                        <div className="aboutus-big-title2">????????????</div>
                    </div>

                    <div className="member-img-div">
                        <div className="member-middle-div">
                            <div className="aboutus-big-title-div">
                                <div class="aboutus-big-title-logo-div">
                                    <span class="aboutus-big-icon material-icons">
                                        face
                                    </span>
                                </div>
                                <div className="aboutus-big-title-eng">MEMBERS</div>
                            </div>
                        <div className="img-div-component">
                            <div className="img-prvt-div kimjunho-img-div">
                                <img className="sajin-itag kimjunho-itag" src={kimjunho_before} alt="SAKURA" onClick={function(){
                                    this.imgChange(this.state.state1,"kimjunho-itag");
                                }.bind(this)}></img>
                            </div>
                            <div className="member-name-div">
                                ?????????????????????
                            </div>
                            <ul className="myfunction-title-ul">
                                <li className="myfunction-title-li">
                                    <span class="travel-icon material-icons">
                                        card_travel
                                    </span>
                                    ??????
                                </li> 
                            </ul>
                            <ul className="myfunction-content-ul">
                                <li className="myfunction-content-li">??? ????????????</li>
                                <li className="myfunction-content-li">??? ????????????</li>
                                <li className="myfunction-content-li">??? ABOUT US</li>
                            </ul>
                        </div>
                        <div className="img-div-component">
                            <div className="img-prvt-div kimsungmi-img-div">
                                <img className="sajin-itag kimsungmi-itag" src={kimsungmi_before} alt="SAKURA" onClick={function(){
                                    this.imgChange(this.state.state2,"kimsungmi-itag");
                                }.bind(this)}></img>
                            </div>
                            <div className="member-name-div">
                                ??????????????????
                            </div>
                            <ul className="myfunction-title-ul">
                                <li className="myfunction-title-li">
                                    <span class="travel-icon material-icons">
                                        card_travel
                                    </span>
                                    ??????
                                </li> 
                            </ul>
                            <ul className="myfunction-content-ul">
                                <li className="myfunction-content-li">??? Login/Logout</li>
                                <li className="myfunction-content-li">??? ????????????</li>
                                <li className="myfunction-content-li">??? My Page</li>
                            </ul>
                        </div>
                        <div className="img-div-component ">
                            <div className="img-prvt-div kimjunsoo-img-div">
                                <img className="sajin-itag kimjunsoo-itag" src={kimjunsoo_before} alt="SAKURA" onClick={function(){
                                    this.imgChange(this.state.state3,"kimjunsoo-itag");
                                }.bind(this)}></img>
                            </div>
                            <div className="member-name-div">
                                ?????????????????????
                            </div>
                            <ul className="myfunction-title-ul">
                                <li className="myfunction-title-li">
                                    <span class="travel-icon material-icons">
                                    card_travel
                                    </span>
                                    ??????
                                </li> 
                            </ul>
                            <ul className="myfunction-content-ul">
                                <li className="myfunction-content-li">??? ?????????????????????</li>
                                <li className="myfunction-content-li">??? ?????????????????????</li>
                                <li className="myfunction-content-li">??? ?????????????????????</li>
                            </ul>
                        </div>
                        <div className="img-div-component">
                            <div className="img-prvt-div kimteawon-img-div">
                                <img className="sajin-itag kimteawon-itag" src={kimteawon_before} alt="SAKURA" onClick={function(){
                                    this.imgChange(this.state.state4,"kimteawon-itag");
                                }.bind(this)}></img>
                            </div>
                            <div className="member-name-div">
                                ?????????????????????
                            </div>
                            <ul className="myfunction-title-ul">
                                <li className="myfunction-title-li">
                                    <span class="travel-icon material-icons">
                                        card_travel
                                    </span>
                                    ??????
                                </li> 
                            </ul>
                            <ul className="myfunction-content-ul">
                                <li className="myfunction-content-li">??? ??????????????????</li>
                                <li className="myfunction-content-li">??? ????????????????????????</li>
                                <li className="myfunction-content-li">??? MODAL??????????????????</li>
                            </ul> 
                        </div>
                        </div>
                    </div>
                    <div className="developer-img-view-div">
                        <div className="developer-img-div">
                            <div className="developer1-img">
                                <div className="developer-title">????????????LIBRARY???</div>
                                <div className="developer-len">
                                    <img className="developer-itag react-itag" src={react_img}/>
                                    <img className="developer-itag html_itag" src={html_img}/>
                                    <img className="developer-itag css_itag" src={css_img}/>
                                    <img className="developer-itag javascript_itag" src={javascript_img}/>
                                    <img className="developer-itag jsx-itag" src={jsx_img}/>
                                    <img className="developer-itag jquery_itag" src={jquery_img}/>
                                    <img className="developer-itag bootstrap_itag" src={bootstrap_img}/>
                                </div>
                            </div>

                            <div className="developer2-img">
                                <div className="developer-title">???SERVER???DECELOPER???</div>
                                <div className="developer-len">
                                    <img className="developer-itag nodejs_itag" src={nodejs_img2}/>
                                    <img className="developer-itag npm_itag" src={npm_img}/>
                                    <img className="developer-itag yarn_itag" src={yarn_img}/>    
                                </div>
                            </div>

                            <div className="developer3-img">
                                <div className="developer-title">???DB???</div>
                                <div className="developer-len2">
                                    <img className="developer-itag firebase-itag" src={firebase_img2}/>
                                </div>
                            </div>

                            <div className="developer4-img">
                                <div className="developer-title">???????????????</div>
                                <div className="developer-len">
                                    <img className="developer-itag vscode_itag" src={vscode_img}/>
                                    <img className="developer-itag erdcloud_itag" src={erdcloud_img}/>
                                    <img className="developer-itag github_itag" src={github_img}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </main>
            </div>
        );
    }
    
}

export default AboutUs;