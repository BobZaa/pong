let x = 0
function shouldHide() {
    ++x
    return ( x & 1 )
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