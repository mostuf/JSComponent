export default class ProgressBar {
    constructor(element) {
        this.type = element.dataset.type;
        this.element = element;
        this.element.classList.add("progressBar");
        this.progress = document.createElement("div");
        if (this.type == "undefined") {
            this.changeType("basic");
        } else {
            this.changeType(this.type);
        }
        this.element.appendChild(this.progress);
        this.changePercent(parseInt(this.element.dataset.percent));
    }

    changePercent(percent) {
        this.percent = percent;
        if (this.percent > 100) {
            this.percent = 100;
        } else if (this.percent < 1) {
            this.percent = 1;
        }

        this.progress.style.width = `${this.percent}%`;
    }

    changeType(type) {
        this.progress.classList.remove(...this.progress.classList);
        this.progress.classList.add("progress");
        this.progress.classList.add(this.type);
    }
}