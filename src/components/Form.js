import React from "react"
import memesData from "../memesData.js"

export default function Form() {
   const [memeImage, setMemeImage]=React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
       setMemeImage(memesArray[randomNumber].url)
        
    }
    return (
        <div class="container">
            <div class="row container1">
            <div class=" col-lg-3 box">
            <div class="imgBx">
            <img src="./images/zion.png"  alt="logo"/>
            </div>
            <div class="content">
                <h2>Axum Zion</h2>
                <p>The Church of Our Lady Mary of Zion is an Ethiopian Orthodox Tewahedo Church which is claimed to contain the Ark of the Covenant.</p>
                <a target="_blank" href="https://www.ethiopianorthodox.org/english/ethiopian/worship.html">Read More</a>
            </div>
            </div>
            <div class=" col-lg-3 box">
            <div class="imgBx">
            <img src="./images/lalibela.png"  alt="logo"/>
            </div>
            <div class="content">
                <h2>Lalibela Church</h2>
                <p>The eleven medieval monolithic churches a 'New Jerusalem' were carved out of rock, after Muslim conquests halted Christian pilgrimages to the holy Land.</p>
                <a  target="_blank" href="https://www.youtube.com/watch?v=excYNB26fhs">Read More</a>
            </div>
            </div>
            <div class=" col-lg-3 box">
            <div class="imgBx">
            <img src="./images/greek.png"  alt="logo"/>
            </div>
            <div class="content">
                <h2>The Greek Church in Ethiopia</h2>
                <p>The Greek Orthodox Church in Addis Ababa. Let's go to Addis Ababa in Ethiopia and let's visit The Greek Orthodox Church. </p>
                <a target="_blank" href="https://www.britannica.com/summary/Ethiopian-Orthodox-Tewahedo-Church">Read More</a>
            </div>
            </div>
            <div class="box col-lg-3">
            <div class="imgBx">
            <img src="./images/selasi.png"  alt="logo"/>
            </div>
            <div class="content">
                <h2>Ethiopian Orthodox</h2>
                <p>The Ethiopian Orthodox Church is an Oriental Orthodox Church. It is the only pre-colonial Orthodox church in Sub-Saharan Africa.</p>
                <a target="_blank" href="http://www.zeorthodox.org">Read More</a>
            </div>
            </div>
            </div>
            <div class="row">
            <div className="form">
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
                <img src={memeImage} className ="meme--image" />
        </div>
    </div>
    )
}

