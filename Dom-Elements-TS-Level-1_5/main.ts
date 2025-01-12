const output = document.querySelector<HTMLDivElement>(".output");
const button = document.querySelector("button");

const urlLine = document.location;

button?.addEventListener("click", function () {
    console.log("Button gedrückt");

    if (output != null)
        output.innerHTML = `<p>Die URL der Seite lautet: ${urlLine}</p>`;
})
