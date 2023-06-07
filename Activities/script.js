
const mistress = document.getElementById("img");
const button = document.getElementById("btn");
const misImg = document.getElementById("still");

button.addEventListener("click", () => {
    misImg.classList.toggle("myStyle");
    mistress.classList.toggle("imgStyle");
});

const imgbutton = document.getElementById("btn2");
const customImage = document.getElementById("img2");
const textInput = document.getElementById("textInput");
imgbutton.addEventListener("click", () => {
    console.log("Act 2 Click!");
    const url = textInput.value;
    console.log(url);
    customImage.src = url;
});

const textCol = document.getElementById('colInput');
const header = document.getElementById("thirdTitle");
const btnThree = document.getElementById("btn3");
// In the below whatever is placed in () becomes the event, it is not passing a variable to the code
btnThree.addEventListener("click", () => {
    const text = textCol.value; //This must go inside here so that it is executed after javascript has been called by the button click
    header.style.color = text;
});


document.addEventListener("click", () => {
    const coOrdX = new MouseEvent(clientX);
    const coOrdY = new MouseEvent(clientY);
    console.log(coOrdX);
    console.log(coOrdY);
    const para = document.getElementById('coords');
    para.textContent = `(${coOrdX}, ${coOrdY}) are the co-ordinates of where you clicked.`
});

closeBtn = document.getElementById("closeBtn");
const openBtn = document.getElementById("openBtn");

closeBtn.addEventListener("click", () => {
    closeBtn.parentNode.style.display = "none";
})

openBtn.addEventListener("click", () => {
    openBtn.previousElementSibling.style.display = "block";
})