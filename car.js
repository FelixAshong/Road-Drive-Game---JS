//car class
class Car {
    constructor(x, y, width, height) { //constractor take 4 artument paramitter x coordinate, y coordinate, width, and height of car
        //we store our paramitter to local property
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;


        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        /*thas Draw() method just dras reatangle 100px x, and 100px y coordinate. with 20px width and 30px height from constructor 
        *so we neew a controls
        * all method and property are defined into controls() class hold on controls.js file
        */
       this.control = new Controls();

    }


    /*Update method. update the car position according to updating controls() class paramitter when we pressed the key form keyboard
     *to make this update mehtod work. we have to loop over and over this method. so animate function into main.js file
     * this basically moving the car.
     */
    Update() {
        if (this.control.forward) {
            // this.y -=2; 
            this.speed += this.acceleration;
        }
        if (this.control.reverse) {
            // this.y += 2;
            this.speed -= this.acceleration;
        }
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
        }
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }

        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }


        /*
         * this is why to control backword moving. when car move backwordly, car control falip front to back
         * by default control in front in car. by presing let key front side of car rotate to left.
         * But, this determinde if card is moving backword. control flip to back side fo car.
         * by pressing left key backside of car is rotate to left.
         */
        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if (this.control.left) {
                // this.x -= 1;
                this.angle += 0.03 * flip; //word when press left arrow key
            }
            if (this.control.right) {
                // this.x += 1;
                this.angle -= 0.03 * flip; //work when press right arrow key
            }
        }

        //this are unite circle caltulation
        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
        // this.y -= this.speed;

    }

    //car have a draw method.  to draw the car into canvas. Draw method also take an arguement ctx which is references to canvas 20 context
    Draw(ctx) {
        //trnaslte and rotate word when presed lft or right key to move angle.
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
        ctx.restore();
    }
}