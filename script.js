
let allBtn = document.querySelectorAll('button')
allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.innerText)
        document.body.style.backgroundColor = e.target.innerText;
    })
})

// allBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         console.log(e.target.innerText)
//         changeColor(e.target.innerText)
//     })
// })
// function changeColor(color) {
//     let body = document.querySelector('body')
//     body.style.backgroundColor = color
// }

// let btn1 = document.querySelector('#btn1')
// // const myfun = () => {
// //     changeColor("green")
// // }

// // btn1.addEventListener("click", changeColor);

// btn1.addEventListener("click", (e) => {
//     console.log("clicked", e.target.innerText)
// })