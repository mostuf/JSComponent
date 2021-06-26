export default class Alert {
    static message(message, time = 5000) {
        this.display(message, "message", time);
    }

    static error(message, time = 5000) {
        this.display(message, "error", time);
    }

    static warning(message, time = 5000) {
        this.display(message, "warning", time);
    }

    static display(message, type, time) {
        this.alert = document.getElementById("alert");
        Alert.alert.classList.remove(...Alert.alert.classList);
        Alert.clear();
        Alert.alert.innerHTML = `${message} <i class="fas fa-times"></i>`;
        Alert.alert.classList.add(type);
        Alert.alert.classList.add("show");
        Alert.displayTimeout = setTimeout(function() {
            Alert.startHide();
        }, time);
        Alert.alert.addEventListener("mouseover", Alert.onMouseOver);
        Alert.alert.querySelector(".fa-times").addEventListener("click", Alert.onCloseButton);
    }

    static startHide() {
        Alert.alert.classList.remove("show");
        Alert.alert.classList.add("hide");
        Alert.hideTimeout = setTimeout(function() {
            Alert.alert.classList.remove(...Alert.alert.classList);
        }, 3000);
        Alert.alert.addEventListener("mouseover", Alert.onMouseOver);
    }

    static onMouseOver() {
        Alert.clear();
        Alert.alert.classList.add("show");
        Alert.alert.classList.remove("hide");
        Alert.alert.addEventListener("mouseleave", Alert.onMouseLeave);
    }

    static onMouseLeave() {
        Alert.alert = document.getElementById("alert");
        Alert.clear();
        Alert.startHide();
    }

    static onCloseButton() {
        Alert.alert.classList.remove(...Alert.alert.classList);
        Alert.clear();
    }

    static clear() {
        clearTimeout(Alert.displayTimeout);
        clearTimeout(Alert.hideTimeout);
        Alert.alert.addEventListener("mouseover", Alert.onMouseOver);
        Alert.alert.removeEventListener("mouseleave", Alert.onMouseLeave);
        Alert.alert.removeEventListener("mouseover", Alert.onMouseOver);
    }
}