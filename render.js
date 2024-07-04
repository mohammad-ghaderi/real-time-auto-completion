
window.api.doRead()

const inp = document.querySelector("#exampleTextarea");
const list = document.querySelector(".list-group");

let segested = []

inp.addEventListener("keyup", (e) => {
    list.innerHTML = null;
    const words = e.target.value.split(" ");
    const word = words[words.length - 1];
    if (word.length > 1) {
        segested = window.api.findAllWords(word, 10);
        for (let i = 0; i < segested.length; i++) {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = segested[i];
            list.appendChild(li);
        }
    }
})


