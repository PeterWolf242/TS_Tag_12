const examples = document.querySelectorAll<HTMLElement>(".example");
const button = document.querySelector("button");

let isColor = true;

button?.addEventListener("click", function () {

    if (isColor) {
        examples.forEach(element => {
            element.style.backgroundColor = "#666";
        });
    } else {
        examples.forEach(element => {
            element.style.backgroundColor = "blue";
        });
    }

    isColor = !isColor;
});
