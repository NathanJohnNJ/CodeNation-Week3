// images
const armsUp = document.getElementById("armsUp");
const hiHat = document.getElementById("hiHat");
const snare = document.getElementById("snareImg");
const floorTom = document.getElementById("floorTom");
const ride = document.getElementById("rideImg");
const kickDrum = document.getElementById("kickDrum");
const hitSnare = document.getElementById("hitSnare");
const hitHiHat = document.getElementById("hitHiHat");
const hitRide = document.getElementById("hitRide");
const hitTom = document.getElementById("hitTom");
const clapImg = document.getElementById("clapImg");
const kickImg = document.getElementById("kickImg");
const boomImg = document.getElementById("boomImg");
const legsImg = document.getElementById("legsImg");
const tinkImg = document.getElementById("tinkImg");
const nothingImg = document.getElementById("nothingImg");
// buttons
const boombtn = document.getElementById("boombtn");
const clapbtn = document.getElementById("clapbtn");
const kickbtn = document.getElementById("kickbtn");
const hihatbtn = document.getElementById("hihatbtn");
const openhatbtn = document.getElementById("openhatbtn");
const ridebtn = document.getElementById("ridebtn");
const snarebtn = document.getElementById("snarebtn");
const tinkbtn = document.getElementById("tinkbtn");
const tombtn = document.getElementById("tombtn");
// audio
const boomaudio = document.getElementById("boom");
const clapaudio = document.getElementById("clap");
const kickaudio = document.getElementById("kick");
const hihataudio = document.getElementById("hihat");
const openhataudio = document.getElementById("openhat");
const rideaudio = document.getElementById("ride");
const snareaudio = document.getElementById("snare");
const tinkaudio = document.getElementById("tink");
const tomaudio = document.getElementById("tom");

//Key press listeners
document.addEventListener('keypress', (event) => {
    var name = event.key;
    console.log(`Key pressed ${name}`);
    if (event.key.toLowerCase() == 'a'){
    armsUp.style.display = "none";
    legsImg.style.display = "none";
    boomImg.style.display = "flex";
    play(boomaudio);
    setTimeout(() => {revert(boomImg); legsImg.style.display = "flex";}, 1000);
    } else if(event.key.toLowerCase() == 'b'){
    armsUp.style.display = "none";
    legsImg.style.display = "none";
    kickImg.style.display = "flex";
    play(kickaudio);
    setTimeout(() => {revert(kickImg); legsImg.style.display = "flex";}, 1000);
} else if (event.key.toLowerCase() == 'c'){
    armsUp.style.display = "none";
    hitHiHat.style.display = "flex";
    play(hihataudio);
    setTimeout(() => {revert(hitHiHat)}, 1000);
} else if (event.key.toLowerCase() == 'd'){
    armsUp.style.display = "none";
    hitHiHat.style.display = "flex";
    play(openhataudio);
    setTimeout(() => {revert(hitHiHat)}, 1000);
} else if (event.key.toLowerCase() == 'e'){
    armsUp.style.display = "none";
    hitRide.style.display = "flex";
    play(rideaudio);
    setTimeout(() => {revert(hitRide)}, 1000);
} else if (event.key.toLowerCase() == 'f'){
    armsUp.style.display = "none";
    hitSnare.style.display = "flex";
    play(snareaudio);
    setTimeout(() => {revert(hitSnare)}, 1000);
} else if (event.key.toLowerCase() == 'g'){
    armsUp.style.display = "none";
    hitTom.style.display = "flex";
    play(tomaudio);
    setTimeout(() => {revert(hitTom)}, 1000);
} else if (event.key.toLowerCase() == 'h'){
    armsUp.style.display = "none";
    clapImg.style.display = "flex";
    play(clapaudio);
    setTimeout(() => {revert(clapImg)}, 1000);
} else if (event.key.toLowerCase() == 'i'){
    tinkImg.style.display = "flex"
    play(tinkaudio);
    setTimeout(() => {tinkImg.style.display = "none"}, 2000);
} else {
    nothingImg.style.display = "flex"
    setTimeout(() => {nothingImg.style.display = "none"}, 2500);
}});

// function to play audio file
function play(audio){
    audio.play();
}
// function to revert image back to original
function revert(img){
    armsUp.style.display = "flex";
    img.style.display = "none";
}

// EventListeners for images
hiHat.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitHiHat.style.display = "flex";
    const hihataudio = document.getElementById("hihat");
    play(hihataudio);
    setTimeout(() => {revert(hitHiHat)}, 1000);
});
snare.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitSnare.style.display = "flex";
    play(snareaudio);
    setTimeout(() => {revert(hitSnare)}, 1000);
});
ride.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitRide.style.display = "flex";
    play(rideaudio);
    setTimeout(() => {revert(hitRide)}, 1000);
});
floorTom.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitTom.style.display = "flex";
    play(tomaudio);
    setTimeout(() => {revert(hitTom)}, 1000);
});

// button listeners
hihatbtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitHiHat.style.display = "flex";
    play(hihataudio);
    setTimeout(() => {revert(hitHiHat)}, 1000);
});
openhatbtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitHiHat.style.display = "flex";
    play(openhataudio);
    setTimeout(() => {revert(hitHiHat)}, 1000);
});
snarebtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitSnare.style.display = "flex";
    play(snareaudio);
    setTimeout(() => {revert(hitSnare)}, 1000);
});
ridebtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitRide.style.display = "flex";
    play(rideaudio);
    setTimeout(() => {revert(hitRide)}, 1000);
});
tombtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    hitTom.style.display = "flex";
    play(tomaudio);
    setTimeout(() => {revert(hitTom)}, 1000);
});
clapbtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    clapImg.style.display = "flex";
    play(clapaudio);
    setTimeout(() => {revert(clapImg)}, 1000);
});
boombtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    legsImg.style.display = "none";
    boomImg.style.display = "flex";
    play(boomaudio);
    setTimeout(() => {revert(boomImg); legsImg.style.display = "flex";}, 1000);
});
kickbtn.addEventListener("click", () => {
    armsUp.style.display = "none";
    legsImg.style.display = "none";
    kickImg.style.display = "flex";
    play(kickaudio);
    setTimeout(() => {revert(kickImg); legsImg.style.display = "flex";}, 1000);
});
tinkbtn.addEventListener("click", () => {
    tinkImg.style.display = "flex"
    play(tinkaudio);
    setTimeout(() => {tinkImg.style.display = "none";}, 2000);
});
