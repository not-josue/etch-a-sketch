const colors = [
    "fuchsia",
    "lime",
    "olive",
    "teal",
    "aquamarine",
    "blueviolet",
    "chocolate",
    "coral",
    "cornflowerblue",
    "crimson",
    "goldenrod",
    "sandybrown",
    "lightsalmon",
    "orchid",
    "deeppink",
    "gold",
    "indigo",
    "lightgreen",
    "mediumpurple",
    "peru",
    "plum",
    "tomato",
    "turquoise",
    "violet",
    "pink",
    "powderblue",
    "mistyrose",
];

const MAX_VALUE = 100;

const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

const container = document.querySelector("#container");
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

document.onkeydown = (e) => {
    if (e.key === "Enter") buttonEl.click();
};

buttonEl.onclick = () => {
    const value = Number(inputEl.value);

    if (value == NaN) {
        prompt("Please enter a valid number.");
        inputEl.value = "";
        inputEl.focus();
        return;
    } else if (value > MAX_VALUE) {
        prompt(
            "Please enter a value that is equal to or less than 100."
        );
        inputEl.value = "";
        inputEl.focus();
        return;
    } else {
        container.style.display = "flex";
        removeDivs();
        createDivs(value);
        inputEl.value = "";
        inputEl.focus();
    }
};

const createDivs = (size) => {
    for (let i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.setAttribute("data-value", "0.1");
        container.appendChild(div);
        addListener(div);
    }
};

const removeDivs = () => {
    const divEls = document.querySelectorAll(
        "#container div"
    );

    if (divEls.length === 0) return;
    else {
        for (let i = 0; i < divEls.length; i++)
            container.removeChild(divEls[i]);
    }
};

const addListener = (div) => {
    div.onmouseover = () => {
        // hasn't been hovered yet
        if (colors.indexOf(div.style.backgroundColor) < 0) {
            div.style.backgroundColor = getRandomColor();
            div.style.opacity = Number(div.dataset.value);
        } else {
            if (div.style.opacity < 1) {
                const newValue =
                    Number(div.dataset.value) + 0.1;
                div.setAttribute(
                    "data-value",
                    String(newValue)
                );
                div.style.opacity = newValue;
            }
        }
    };
};

// for (let i = 0; i < 16; i++) {
//     const div = document.createElement("div");
//     div.setAttribute("data-value", "0.1");
//     container.appendChild(div);
//     div.onmouseover = () => {
//         // hasn't been hovered yet
//         if (colors.indexOf(div.style.backgroundColor) < 0) {
//             div.style.backgroundColor = getRandomColor();
//             div.style.opacity = Number(div.dataset.value);
//         } else {
//             if (div.style.opacity < 1) {
//                 const newValue =
//                     Number(div.dataset.value) + 0.1;
//                 div.setAttribute(
//                     "data-value",
//                     String(newValue)
//                 );
//                 div.style.opacity = newValue;
//             }
//         }
//     };
// }
