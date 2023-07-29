const left = document.querySelector("#left-side");
const root = document.querySelector("html")
console.log(root)

const handleOnMove = (e) => {
    // calculating amount by which the mouse has moved 
    // window.innerWidth is a read-only property that gives us the width of the window including any vertical scrollbars
    // if we want the width of the widow without the scrollbar then we should get the width of root <html> element's width instead
    // If our cursor still goes to the scrollbar then e.clientX will be greater than root.clientWidth which will make p greater than 100 and give us horizontal scrollbar, to avoid this we use the Math.min function to make sure that p doesn't go past 100
    // p will be in range [0, 100]
    const p = Math.min(1, e.clientX / root.clientWidth) * 100

    // change the width of the left-side to be p in percentage
    left.style.width = `${p}%`;
}

// listener for mouse movement
document.onmousemove = (e) => handleOnMove(e);

// listener for touch movement on mobile
document.ontouchmove = (e) => handleOnMove(e.touches[0]);