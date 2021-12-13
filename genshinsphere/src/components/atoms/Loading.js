import React from 'react'
import eulaEat from 'static/images/loading/eulaEat.png'
import eulaSee from 'static/images/loading/eulaSee.png'
import fischlHaha from 'static/images/loading/fischlHaha.png'
import heheTao from 'static/images/loading/heheTao.png'
import monaHehe from 'static/images/loading/monaHehe.png'
import qiqiFallen from 'static/images/loading/qiqiFallen.png'
import reallyPaimon from 'static/images/loading/reallyPaimon.png'
import saraStop from 'static/images/loading/saraStop.png'
import sayuAnnoyed from 'static/images/loading/sayuAnnoyed.png'
import surprisedTao from 'static/images/loading/surprisedTao.png'
import worriedGanyu from 'static/images/loading/worriedGanyu.png'

const imgList = [
    eulaEat,
    eulaSee,
    fischlHaha,
    heheTao,
    monaHehe,
    qiqiFallen,
    reallyPaimon,
    saraStop,
    sayuAnnoyed,
    surprisedTao,
    worriedGanyu
]

function Loading() {
    let index = Math.floor(Math.random() * (imgList.length));

    return (
        <div className = "loadingScreen">
            <img src = {imgList[index]} className = "loadingImg" alt = "Loading..." />
            <div className = "dot" style = {{"--order": 1}}></div>
            <div className = "dot" style = {{"--order": 2}}></div>
            <div className = "dot" style = {{"--order": 3}}></div>
            <div className = "dot" style = {{"--order": 4}}></div>
        </div>
    )
}

export default Loading
