
const quest = document.getElementById("question")
const yesBtn = document.getElementById("yes")
const noBtn = document.getElementById("no")


noBtn.addEventListener("mouseover", () => {
    let rand = Math.floor(Math.random() * ( 500 - 100) + 1)
    let rand2 = Math.floor(Math.random() * ( -300 - 100) + 1)
    noBtn.style.transform = "translate("+rand+"px, "+rand2+"px)"
})

yesBtn.addEventListener("click", () => {
    quest.innerHTML = "YESS!!!!, let's play! invite me Reiss #3262"
})