export default class AlertComponent {
    constructor() {
        this.parent = document.getElementById("alert");
    }

    startHide() {
        this.element.classList.remove("show");
        this.element.classList.add("hide");
        this.hideTimeout = setTimeout(() => {
            this.element.remove();
        }, 3000);
        this.element.addEventListener("mouseover", () => this.mouseOver = this.onMouseOver());
    }

    onMouseOver() {
        this.clear();
        this.element.classList.add("show");
        this.element.classList.remove("hide");
        this.element.addEventListener("mouseleave", () => this.onMouseLeave());
    }

    onMouseLeave() {
        this.clear();
        this.startHide();
    }

    onCloseButton() {
        this.element.remove();
        this.clear();
    }

    clear() {
        clearTimeout(this.displayTimeout);
        clearTimeout(this.hideTimeout);
        this.element.addEventListener("mouseover", () => this.mouseOver);
        this.element.removeEventListener("mouseleave", () => this.onMouseLeave);
        this.element.removeEventListener("mouseover", () => this.onMouseOver);
    }
}