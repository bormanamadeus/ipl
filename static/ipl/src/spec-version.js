//TODO - setting colors for visual impaired system
window.addEventListener("load", () => {  
    console.log("onload Job");
    const buttonDisappear = document.querySelector("#button-for-disappear-box");
    // const buttonDisappear = document.querySelector("#button-disappear");
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
        r.style.setProperty('--main-color', r.style.getPropertyValue('--main-color-def'));
        r.style.setProperty('--text-color', r.style.getPropertyValue('--text-color-def'));
        r.style.setProperty('--extra-back-color', r.style.getPropertyValue('--extra--back-color-def'));
        r.style.setProperty('--main-size', r.style.getPropertyValue('--main-size-def'));
        saveVarInLocalStorage("--main-color", r.style.getPropertyValue('--main-color-def'));
        saveVarInLocalStorage("--text-color", r.style.getPropertyValue('--text-color-def'));
        saveVarInLocalStorage("--extra-back-color", r.style.getPropertyValue('--extra-back-color-def'));
        saveVarInLocalStorage("--main-size", r.style.getPropertyValue('--main-size-def'));

        console.log('DEACTIVE-image')
        localStorage.removeItem('deactive-image');
        let images = document.querySelectorAll("img");
        for (var i = 0; i < images.length; i++) {
            images[i].style.visibility = "visible";
        }
        let slider = document.querySelector(".carousel-container");
        if (slider) {slider.style.visibility = "visible";}
    })

    const buttonDeactiveImages = document.querySelector("#box-deactivate-images--button");
    buttonDeactiveImages.addEventListener("click", ()=>{
        console.log('start buttonDeactiveImages');
        let images = document.querySelectorAll("img");
        for (var i = 0; i < images.length; i++) {
            console.log('before: ', i, images[i], images[i].style.visibility);
            images[i].style.visibility = "hidden";
            console.log('after: ', i, images[i], images[i].style.visibility);
        }
        let slider = document.querySelector(".carousel-container");
        if (slider) {
            slider.style.visibility = "hidden";
            console.log('slider: ', slider, slider.style.visibility);
            console.log('deactive-image start');
        }
        saveVarInLocalStorage('deactive-image', true);
    })

    const buttonActiveImages = document.querySelector("#box-activate-images--button");
    buttonActiveImages.addEventListener("click", ()=>{
        console.log('start buttonActiveImages');
        let images = document.querySelectorAll("img");
        for (var i = 0; i < images.length; i++) {
            console.log('before: ', i, images[i], images[i].style.visibility);
            images[i].style.visibility = "visible";
            console.log('after: ', i, images[i], images[i].style.visibility);
        }
        let slider = document.querySelector(".carousel-container");
        if (slider) {slider.style.visibility = "visible";}
        localStorage.removeItem('deactive-image');
    })

    console.log("save");
    var r = document.querySelector(':root');
    if (r.style.getPropertyValue('--main-size') != r.style.getPropertyValue('--main-size-def') || 
        (r.style.getPropertyValue('--main-color') != r.style.getPropertyValue('--main-color-def')) ||
        (localStorage.getItem('deactive-image'))) {
        console.log("in save");
        box.classList.toggle("hidden");
        buttonDisappear.classList.toggle("hidden");
    }
});

function changeColor(color) {
    function setColor(settings, root_selector) {
        for (let param_name in settings) {
            root_selector.style.setProperty(param_name, settings[param_name]);
        }
    }
    var r = document.querySelector(':root');
    if (color === 'A1') {
        //r.style.setProperty('--main-color', 'lightblue')
        r.style.setProperty('--main-color', 'white');
        r.style.setProperty('--extra-back-color', 'white');
        r.style.setProperty('--text-color', 'black');
    } else if (color === 'A2') {
        r.style.setProperty('--main-color', 'black');
        r.style.setProperty('--extra-back-color', 'black');
        r.style.setProperty('--text-color', 'white');
    } else if (color === 'A3') {
        r.style.setProperty('--main-color', 'blue');
        r.style.setProperty('--extra-back-color', 'blue');
        r.style.setProperty('--text-color', 'black');
    } else if (color === 'A4') {
        r.style.setProperty('--main-color', 'yellow');
        r.style.setProperty('--extra-back-color', 'yellow');
        r.style.setProperty('--text-color', 'black');
    } else if (color === 'A5') {
        r.style.setProperty('--main-color', 'brown');
        r.style.setProperty('--extra-back-color', 'brown');
        r.style.setProperty('--text-color', 'yellow');
    } else {
        r.style.setProperty('--main-color', 'black');
        r.style.setProperty('--extra-back-color', 'black');
        r.style.setProperty('--text-color', 'white');
    }
    saveVarInLocalStorage("--main-color", r.style.getPropertyValue('--main-color'));
    saveVarInLocalStorage("--text-color", r.style.getPropertyValue('--text-color'));
    saveVarInLocalStorage("--extra-back-color", r.style.getPropertyValue('--extra-back-color'));
}

function changeFontSize(fontsize) {
    var r = document.querySelector(':root');
    if (fontsize === 'S1') {
        r.style.setProperty('--main-size', '14px')
    } else if (fontsize === 'S2') {
        r.style.setProperty('--main-size', '18px')
    } else if (fontsize === 'S3') {
        r.style.setProperty('--main-size', '22px')
    } else if (fontsize === 'S4') {
        r.style.setProperty('--main-size', '26px')
    } else if (fontsize === 'S5') {
        r.style.setProperty('--main-size', '30px')
    } else {
        r.style.setProperty('--main-size', '34px')
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
    var textColor = localStorage.getItem("--text-color");
    var backColor = localStorage.getItem("--extra-back-color");
    var deactive_image = localStorage.getItem("deactive-image");
    if (mainFontSize) {
        r.style.setProperty('--main-size', mainFontSize);
    }
    if (mainColor) {
        r.style.setProperty('--main-color', mainColor);
    }
    if (textColor) {
        r.style.setProperty('--text-color', textColor);
    }
    if (backColor) {
        r.style.setProperty('--extra-back-color', backColor);
    }
    console.log('deactive_image -> ', deactive_image);
    if (deactive_image) {
        let images = document.querySelectorAll("img");
        for (var i = 0; i < images.length; i++) {
            images[i].style.visibility = "hidden";
        }
        let slider = document.querySelector(".carousel-container");
        if (slider) {
            slider.style.visibility = "hidden";
            console.log('slider: ', slider);
        }
    }
});