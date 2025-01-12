const inputText = document.querySelector<HTMLInputElement>("#inputText");
const button = document.querySelector("button");
const toDoList = document.querySelector<HTMLUListElement>("#myList");
const errorMsg = document.querySelector<HTMLDivElement>(".errorMsg");

button?.addEventListener("click", function () {
    const inputValue = inputText?.value;

    if (inputValue) {
        // Neues Listenelement erstellen und hinzufügen
        const inputContent = "- " + inputValue;
        let newItem = document.createElement("li");
        newItem.innerHTML = inputContent;
        toDoList?.appendChild(newItem);

        // Eingabefeld und Fehlermeldung zurücksetzen
        inputText.value = "";
        if (errorMsg) errorMsg.innerHTML = "";
    } else {
        // Fehlermeldung anzeigen
        if (errorMsg) {
            errorMsg.innerHTML = `<p>Das Eingabefeld darf nicht leer sein</p>`;
            setTimeout(() => {
                errorMsg.innerHTML = "";
            }, 2000);
        }
    }
});
