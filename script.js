function shrinkAndHide(btn) {
let scale = 1;

const interval = setInterval(() => {
    scale -= 0.15;
    btn.style.transform = `scale(${scale})`;

    if (scale <= 0) {
    clearInterval(interval);
    btn.style.opacity = "0";
    btn.style.display = "none";
    }
}, 200);
}
