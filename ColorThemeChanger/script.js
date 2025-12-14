document.addEventListener("DOMContentLoaded", () => {
    const currentColorEl = document.getElementById("currentColor");
    const genColorButton = document.getElementById("GenColor");
    const setColorButton = document.getElementById("setColor");
    const colorInput = document.querySelector("#colorInput");

    function toHex(n) {
        return "#" + n.toString(16).padStart(6, "0");
    }

    function GenColor() {
        const randomColor = toHex(Math.floor(Math.random() * 0xFFFFFF));
        UpdateColor(randomColor);
    }

    function Applycolor() {
        const input = (colorInput?.value || "").trim();
        if (input) {
            document.body.style.backgroundColor = input;
            UpdateColor(input);
        } else if (currentColorEl) {
            document.body.style.backgroundColor = currentColorEl.innerText;
        }
    }

    function UpdateColor(color) {
        if (currentColorEl) currentColorEl.textContent = color;
    }

    function Once() {
        const bg = getComputedStyle(document.body).backgroundColor;
        if (currentColorEl) currentColorEl.textContent = bg;
    }

    genColorButton?.addEventListener("click", GenColor);
    setColorButton?.addEventListener("click", Applycolor);
    Once();
}, { once: true });