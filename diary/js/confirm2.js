var btn = document.querySelector("button")
var alter = document.querySelector(".alert-danger")
btn.onclick= (event) => {
    event.preventDefault()
    var answer = document.querySelector("#answer")
    if (answer.value === "茶话弄") {
        location.href = "part3.html"
    }else{
        alter.style.visibility="visible"
    }
}