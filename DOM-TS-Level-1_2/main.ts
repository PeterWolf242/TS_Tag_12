const info = document.querySelector<HTMLDivElement>("#info");
const container = document.querySelector<HTMLDivElement>("#container");

if (info != null && container != null) {
    const newHighlight = document.createElement("h1");
    newHighlight.textContent = "Hello World";
    info.appendChild(newHighlight);

    const newSecondHighlight = document.createElement("h2");
    newSecondHighlight.textContent = "How are you?";
    info.appendChild(newSecondHighlight);

    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a paragraph";
    container.appendChild(newParagraph);

    const newInputElement = document.createElement("input");
    newInputElement.setAttribute("type", "text");
    container.appendChild(newInputElement);

}