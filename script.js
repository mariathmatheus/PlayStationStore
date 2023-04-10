const menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px";

function showMenu() {
    menuList.style.maxHeight == "0px"
    ? (menuList.style.maxHeight = "120px")
    : (menuList.style.maxHeight = "0px");
}
