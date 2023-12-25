window.addEventListener("load", () => {  
    console.log("onload Job");
    const buttonDisappear = document.querySelector("#button-for-disappear-box");
    const box = document.querySelector("#prev-box-spec");

    buttonDisappear.addEventListener("click", ()=>{
        console.log("Job");
        console.log("box.classList");
        box.classList.toggle("hidden");
        buttonDisappear.classList.toggle("hidden");
    })

    const buttonAppear = document.querySelector("#button-for-appear-box");

    buttonAppear.addEventListener("click", ()=>{
        box.classList.toggle("hidden");
        buttonDisappear.classList.toggle("hidden");

        var r = document.querySelector(':root');
        r.style.setProperty('--main-color', r.style.getPropertyValue('--main-color-def'))
        r.style.setProperty('--main-size', r.style.getPropertyValue('--main-size-def'))
        saveVarInLocalStorage("--main-color", r.style.getPropertyValue('--main-color-def'));
        saveVarInLocalStorage("--main-size", r.style.getPropertyValue('--main-size-def'));
    })

    console.log("save");
    var r = document.querySelector(':root');
    if (r.style.getPropertyValue('--main-size') != r.style.getPropertyValue('--main-size-def') || 
        (r.style.getPropertyValue('--color-size') != r.style.getPropertyValue('--main-color-def'))) {
        console.log("in save");
        box.classList.toggle("hidden");
        buttonDisappear.classList.toggle("hidden");
    }
});

function changeColor(color) {
    var r = document.querySelector(':root');
    if (color === 'A1') {
        //r.style.setProperty('--main-color', 'lightblue')
        r.style.setProperty('--main-color', 'white')
    } else if (color === 'A2') {
        r.style.setProperty('--main-color', 'black')
    } else if (color === 'A3') {
        r.style.setProperty('--main-color', 'blue')
    } else if (color === 'A4') {
        r.style.setProperty('--main-color', 'yellow')
    } else if (color === 'A5') {
        r.style.setProperty('--main-color', 'brown')
    } else {
        r.style.setProperty('--main-color', 'black')
    }
    saveVarInLocalStorage("--main-color", r.style.getPropertyValue('--main-color'));
}

function changeFontSize(fontsize) {
    var r = document.querySelector(':root');
    if (fontsize === 'S1') {
        r.style.setProperty('--main-size', '12px')
    } else if (fontsize === 'S2') {
        r.style.setProperty('--main-size', '14px')
    } else if (fontsize === 'S3') {
        r.style.setProperty('--main-size', '18px')
    } else if (fontsize === 'S4') {
        r.style.setProperty('--main-size', '22px')
    } else if (fontsize === 'S5') {
        r.style.setProperty('--main-size', '26px')
    } else {
        r.style.setProperty('--main-size', '14px')
    }
    saveVarInLocalStorage("--main-size", r.style.getPropertyValue('--main-size'));
} 

function saveVarInLocalStorage(nameVariable, valueVariable) {
    console.log(nameVariable, valueVariable);
    localStorage.setItem(nameVariable, valueVariable);
}

// window.addEventListener('load', () => {
document.addEventListener("DOMContentLoaded", () => {  
    var r = document.querySelector(':root');
    var mainFontSize = localStorage.getItem("--main-size");
    var mainColor = localStorage.getItem("--main-color");
    if (mainFontSize) {
        r.style.setProperty('--main-size', mainFontSize)
    }
    if (mainColor) {
        r.style.setProperty('--main-color', mainColor)
    }
});