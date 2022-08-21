let randomingType = 0; //0- simple, 1- hex
const randomingButton = document.querySelectorAll(".show-type");
randomingButton.forEach(element => {
    element.addEventListener("click", function(event){
        console.log(randomingType);
        if(element.innerText==="Simple")
        randomingType=0;
        else
        randomingType=1;
    })
});

const buttonClicked = document.querySelector(".change").addEventListener("click", function(event){
    changeBackground();
})
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const simple=['red','green','blue','white','brown','purple','gray','pink','yellowgreen']
const display = document.querySelector(".color");
let chosenColor;
function changeBackground()
{
    switch (randomingType)
    {
        case 0:
            chosenColor = simple[getRandomNumber(simple.length)];
            break;
        default:
            chosenColor='#';
            for (let i = 0; i < 6; i++) {
                chosenColor+=hex[getRandomNumber(hex.length)];
                
            }
        }
        display.innerText=chosenColor;
        document.body.style.backgroundColor = chosenColor;
}

function getRandomNumber(len)
{
    return Math.floor(Math.random()*len);
}

