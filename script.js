"use strict";
const root = document.getElementById("root");
const addProgressBar = (time = 3) => {
    const progress = document.createElement("div");
    const progressBar = document.createElement("div");
    progress.classList.add("progress");
    progressBar.classList.add("progress-bar");
    const transition = `transition: width ${time}s ease`;
    progressBar.style = transition;
    progress.appendChild(progressBar);
    root.appendChild(progress);
    setTimeout(() => {
        progressBar.classList.add("w-100");
    }, 50);
    progressBar.addEventListener("transitionend", () => {
        count--;
        if (count > 0) {
            addProgressBar();
        }
    });
    progressBar.removeEventListener("transitionend", () => { });
};
var count = 0;
const add = () => {
    if (count === 0) {
        addProgressBar();
    }
    count++;
};