const button = document.querySelector("button");
const wrapper = document.querySelector<HTMLDivElement>(".wrapper");
const array: any[] = [];

button?.addEventListener("click", function () {
    const item = document.createElement("div");
    wrapper?.appendChild(item);
    array.push(item);

    for (let i = 0; i < array.length; i++) {
        item.innerHTML = `<p>${i + 1}</p>`;
    }
})
