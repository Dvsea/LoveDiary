var btn = document.querySelector("button")
var alter = document.querySelector(".alert-danger")
btn.onclick= (event) => {
    event.preventDefault()
    var answer = document.querySelector("#answer")
    if (answer.value === "莫兰迪蓝") {
        location.href = "part2.html"
    }else{
        alter.style.visibility="visible"
    }
}