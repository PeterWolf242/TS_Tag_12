const textInput = document.querySelector<HTMLInputElement>("#textInput");
const btnAddText = document.querySelector<HTMLButtonElement>("#btnAddText");
const btnReset = document.querySelector<HTMLButtonElement>("#btnReset");
const output = document.querySelector<HTMLElement>(".output");


btnAddText?.addEventListener("click", function () {
    // * Aktuelles Datum und Zeit holen;
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const fullDate = `${day}.${month}.${year}`;
    const fullTime = `${hours}:${minutes}:${seconds}`;

    // * Wert aus dem Inputfeld holen
    if (textInput != null && output != null) {
        const inputContent = textInput.value;

        const newTExtItem = output.ownerDocument.createElement("p");
        output.appendChild(newTExtItem);
        newTExtItem!.innerHTML = `${fullDate}, ${fullTime}: ${inputContent}`;
    }
}
)

btnReset?.addEventListener("click", function () {
    if (output != null && textInput != null) {
        output.innerHTML = "";
        textInput.value = "";
    }
    console.log("Reset-Button gedrückt");
})