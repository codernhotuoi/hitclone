const menuMobie = document.querySelector(".header-menu-mobile")
const menuIcon = document.querySelector(".menu-logo")
console.log(menuIcon)
menuIcon.addEventListener("click", () => {
    menuMobie.classList.toggle("show")
})
