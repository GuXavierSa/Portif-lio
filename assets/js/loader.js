/**
 * Assim que a página carregar todo o CSS, esconda o load e apareça o resto
 */
window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("hiden")
    document.querySelector("main").classList.remove("hiden")
})