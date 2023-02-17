class Controls {
    constructor(type) {
        this.forward = false;
        this.left = false;
        this.backward = false;
        this.right = false;

        switch (type) {
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward = true;
                break;
        }

    }

    #addKeyboardListeners() {
        document.onkeydown = (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowDown":
                    this.backward = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
            }
        }
        document.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowDown":
                    this.backward = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
            }
        }
    }
}