export default class AlertComponent {
    /**
     * Prépare le manager d'alert
     */
    constructor() {
        this.parent = document.getElementById("alert");
    }

    /**
     * Commence à masquer un alert
     */
    startHide() {
        this.element.classList.remove("show");
        this.element.classList.add("hide");
        this.hideTimeout = setTimeout(() => {
            this.element.remove();
        }, 3000);
        this.element.addEventListener("mouseover", () => this.mouseOver = this.onMouseOver());
    }

    /**
     * Annule le masquage de l'alert
     */
    onMouseOver() {
        this.clear();
        this.element.classList.add("show");
        this.element.classList.remove("hide");
        this.element.addEventListener("mouseleave", () => this.onMouseLeave());
    }

    /**
     * Relance le masquage de l'alert
     */
    onMouseLeave() {
        this.clear();
        this.startHide();
    }

    /**
     * Supprime l'alert
     */
    onCloseButton() {
        this.element.remove();
        this.clear();
    }

    /**
     * Enlène tous les événements et timers de l'alert
     */
    clear() {
        clearTimeout(this.displayTimeout);
        clearTimeout(this.hideTimeout);
        this.element.addEventListener("mouseover", () => this.mouseOver);
        this.element.removeEventListener("mouseleave", () => this.onMouseLeave);
        this.element.removeEventListener("mouseover", () => this.onMouseOver);
    }
}