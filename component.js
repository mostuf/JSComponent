import Alert from '/Alert/alert.js';
window.Alert = Alert;

class ComponentManager {
    constructor(element) {
        document.querySelectorAll("[data-component]").forEach(element => {
            switch (element.dataset.component) {
                case "alert":
                    element.id = "alert";
                    break;
            }
        });
    }
}

let componentManager = new ComponentManager();