const gallery = document.querySelector<HTMLDivElement>("#gallery");

const pictureArray: string[][] = [["https://images.unsplash.com/photo-1457269449834-928af64c684d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTJCfGVufDB8fDB8fHww", "Eisblume"], ["https://images.unsplash.com/photo-1489674267075-cee793167910?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbnRlciUyQnxlbnwwfHwwfHx8MA%3D%3D", "Seifenblase im Schnee"],
["https://images.unsplash.com/photo-1487782310695-ed8583618566?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlciUyQnxlbnwwfHwwfHx8MA%3D%3D", "Laterne im Licht"]
]

if (gallery != null) {
    for (const imagePath of pictureArray) {
        const newItem = document.createElement("figure");

        gallery.appendChild(newItem);
        const imgItem = document.createElement("img");
        newItem.appendChild(imgItem);

        const figcaption = document.createElement("figcaption");
        newItem.appendChild(figcaption);

        figcaption.innerText = `${imagePath[1]}`;

        imgItem.src = imagePath[0];
        imgItem.alt = imagePath[1];
    }
}