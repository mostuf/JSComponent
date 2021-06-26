import AlertComponent from './alertComponent.js';
import css from './alertComponent.js';

export default class Alert {
    static message(message, time = 5000) {
        this.display(message, "basic", time);
    }

    static error(message, time = 5000) {
        this.display(message, "error", time);
    }

    static warning(message, time = 5000) {
        this.display(message, "warning", time);
    }

    static display(message, type, time) {
        let alert = new AlertComponent();
        alert.element = document.createElement("div");
        alert.element.classList.add("alert");
        alert.element.innerHTML = `<span class="message">${message}</span> <i class="fas fa-times"></i>`;
        alert.parent.insertAdjacentElement("afterbegin", alert.element);
        alert.element.classList.add(type);
        alert.element.classList.add("show");
        alert.displayTimeout = setTimeout(() => alert.startHide(), time);
        alert.element.addEventListener("mouseover", () => alert.mouseOver = alert.onMouseOver());
        alert.element.querySelector(".fa-times").addEventListener("click", () => alert.onCloseButton());
    }
}