let x = 0
function shouldHide() {
    ++x
    return ( x % 2 === 1 )
}


document.querySelector(".hamburguror").addEventListener(
    "click",
    event => {

        if (shouldHide()) {
            document.querySelector(".logo").style.display = "none"
        } else {
            document.querySelector(".logo").style.display = "block"
        }    
    }
)

const imageX= document.querySelector(".x")
const imageY= document.querySelector(".y")
const imageF= document.querySelector(".fax")



window.addEventListener(
    "keydown",
    event => { 
        imageX.style.filter = "invert(1)"
        imageY.style.filter = "invert(1)"
        imageF.style.filter = "invert(1)"
        document.body.style.background = "black"


    }
)

window.addEventListener(
    "keyup",
    event => {
        imageX.style.filter = "invert(0)"
        imageY.style.filter = "invert(0)"
        imageF.style.filter = "invert(0)"
        document.body.style.background = "white"



    }
)
