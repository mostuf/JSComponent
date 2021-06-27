import Alert from '/Alert/alert.js';
import ProgressBar from '/ProgressBar/ProgressBar.js';
import Combobox from '/Combobox/combobox.js';


class ComponentManager {
    constructor(element) {
        window.Alert = Alert;
        window.ProgressBar = ProgressBar;
        document.querySelectorAll("[data-component]").forEach(element => {
            switch (element.dataset.component) {
                case "alert":
                    element.id = "alert";
                    break;
                case "progress-bar":
                    new ProgressBar(element, element.dataset.type);
                    break;
                case "combobox":
                    if (element.dataset.trigger != null) {
                        new Combobox(element, element.dataset.trigger);
                    } else {
                        new Combobox(element, 3);
                    }
                    break;
            }
        });
    }
}

let componentManager = new ComponentManager();