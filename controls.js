// controls class 
class Controls {
    constructor() {
        //initially value are false. when we press arrow key form keyboard this value are changed to ture, and card move according to direction
        this.right = false;
        this.left = false;
        this.reverse = false;
        this.forward = false;

        //we need a method to trigger the keyboard 
        this.addKeyboardListener();
    }

    //addkeyboardlistener method
    addKeyboardListener() {

        //keydown event 
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;

                case "ArrowRight":
                    this.right = true;
                    break;

                case "ArrowUp":
                    this.forward = true;
                    break;

                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            // console.table(this)
        };

        //keyup event
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;

                case "ArrowRight":
                    this.right = false;
                    break;

                case "ArrowUp":
                    this.forward = false;
                    break;

                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            // console.table(this)
        };

    }
    //method end
}