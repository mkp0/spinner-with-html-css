const text = document.querySelector(".fancy")
const strtext = text.textContent;

const splitText = strtext.split("")

text.textContent = ""

for(let i = 0 ; i < splitText.length ; i++)
{
    text.innerHTML+= "<span>" + splitText[i] + "</span>";
}

let char = 0
let timer = setInterval(onTick , 100);

function onTick()
{
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    console.log(char)
    char++;
    if(char >= splitText.length)
    {
        clearInterval(timer)
        return
    }
}