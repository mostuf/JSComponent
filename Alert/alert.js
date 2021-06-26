import AlertComponent from './alertComponent.js';
import css from './alertComponent.js';

/** Représente une alerte à afficher */
export default class Alert {

    /**
     * Méthode pour afficher un message basic
     * @param {String} message Le message à afficher
     * @param {Integer} time (facultatif) Le temps avant d'effacer le message (5 secondes par défaut)
     */
    static message(message, time = 5000) {
        this.display(message, "basic", time);
    }

    /**
     * Méthode pour afficher un message d'erreur
     * @param {String} message Le message à afficher
     * @param {Integer} time (facultatif) Le temps avant d'effacer le message (5 secondes par défaut)
     */
    static error(message, time = 5000) {
        this.display(message, "error", time);
    }

    /**
     * Méthode pour afficher un message d'alerte
     * @param {String} message Le message à afficher
     * @param {Integer} time (facultatif) Le temps avant d'effacer le message (5 secondes par défaut)
     */
    static warning(message, time = 5000) {
        this.display(message, "warning", time);
    }

    /**
     * Méthode pour afficher un message générique
     * @param {String} message Le message à afficher
     * @param {String} type Le type de message à afficher
     * @param {Integer} time Le temps avant d'effacer le message
     */
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