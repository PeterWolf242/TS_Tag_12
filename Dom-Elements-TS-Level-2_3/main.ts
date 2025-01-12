const button = document.querySelector("button");
const menuItems = document.querySelectorAll<HTMLAnchorElement>("nav a");
const home = document.querySelector<HTMLAnchorElement>("nav a:nth-of-type(1)");
const news = document.querySelector<HTMLAnchorElement>("nav a:nth-of-type(2)");
const contact = document.querySelector<HTMLAnchorElement>("nav a:nth-of-type(3)");

let changeColor = true;

button?.addEventListener("click", function () {

    if (changeColor) {

        if (home != null && news != null && contact != null) {
            home.style.backgroundColor = "#f6c89f";
            news.style.backgroundColor = "#ffe7d1";
            contact.style.backgroundColor = "#4b8e8d";

            menuItems.forEach(element => {
                element.style.color = "#333";
            });
        }
    } else {
        menuItems.forEach(element => {
            element.style.color = "#fff";
            element.style.backgroundColor = "#333";
        }
        )
    }

    changeColor = !changeColor;
})
