export default class Combobox {
    constructor(element, trigger) {
        this.element = element;
        this.trigger = trigger;
        this.actif = false;

        this.list = Array.from(this.element.querySelectorAll("[data-option]")).map(option =>
            option.dataset.option
        );

        this.input = document.createElement("input");
        this.input.classList.add("combobox");
        this.element.appendChild(this.input);


        this.combo = document.createElement("div");
        this.combo.classList.add("comboList");
        this.combo.style.width = this.input.offsetWidth - 2;
        this.element.appendChild(this.combo);

        this.element.addEventListener("keyup", () => {
            if (this.input.value.length == 0) {
                this.hideCombo();
            } else if (this.input.value.length >= this.trigger || this.actif) {
                this.showCombo();
            }

        });
    }

    showCombo() {
        this.actif = true;
        let filterList = this.list.filter(option => option.includes(this.input.value));
        this.combo.innerHTML = "";
        if (filterList.length == 0) {
            this.combo.insertAdjacentHTML("beforeend", `<div class="option" disabled>Aucun resultat</div>`)
        } else {
            for (let option of filterList) {
                this.combo.insertAdjacentHTML("beforeend", `<div class="option" data-value="${option}">${option}</div>`)
            }
        }
        this.combo.classList.add("show");
        this.combo.querySelectorAll(".option:not([disabled])").forEach(option =>
            option.addEventListener("click", (e) => {
                this.input.value = e.target.dataset.value;
                this.hideCombo();
            })
        );
    }

    hideCombo() {
        this.actif = false;
        this.combo.classList.remove("show");
    }
}