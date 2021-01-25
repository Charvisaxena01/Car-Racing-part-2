canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
canva_images = ["track.jpg", "track2.jpg", "track3.jpg", "track4.jpg"];
random_img = Math.floor(Math.random() * 4);
car1_width = 150;
car1_height = 70;
car1_image = "car.png"
car1_x = 10;
car1_y = 10;

car2_width = 160;
car2_height = 90;
car2_image = "car0.png";
car2_x = 10;
car2_y = 100;

background_can_img = canva_images[random_img];

function add() {
    background_canvas = new Image;
    background_canvas.onload = set_background;
    background_canvas.src = background_can_img;

    car1_img = new Image;
    car1_img.onload = set_img;
    car1_img.src = car1_image;

    car2_img = new Image;
    car2_img.onload = set_img2;
    car2_img.src = car2_image;
}

function set_background() {
    ctx.drawImage(background_canvas, 0, 0, canvas.width, canvas.height);
}

function set_img() {
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);
}

function set_img2() {
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        console.log("up");
        car1_up();
    }
    if (keyPressed == "37") {
        console.log("left");
        car1_left();
    }
    if (keyPressed == "39") {
        console.log("right");
        car1_right();
    }
    if (keyPressed == "40") {
        console.log("down");
        car1_down();
    }
    if (keyPressed == "65") {
        console.log("a key");
        car2_left();
    }
    if (keyPressed == "83") {
        console.log("s key");
        car2_down();
    }

    if (keyPressed == "68") {
        console.log("d key");
        car2_right();
    }
    if (keyPressed == "87") {
        console.log("w key");
        car2_up()
    }
}

function car1_up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log(car1_y);
        set_background();
        set_img();
        set_img2();
    }
}

function car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log(car1_y);
        set_background();
        set_img();
        set_img2();
    }
}

function car1_right() {
    if (car1_x <= 650) {
        car1_x = car1_x + 10;
        console.log(car1_x);
        set_background();
        set_img();

        set_img2();
        won();
    }
}

function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log(car1_x);
        set_background();
        set_img();
        set_img2();
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log(car2_y);
        set_background();
        set_img();
        set_img2();
    }
}

function car2_down() {
    if (car2_y <= 490) {
        car2_y = car2_y + 10;
        console.log(car2_y);
        set_background();
        set_img();
        set_img2();
    }
}

function car2_right() {

    if (car2_x <= 640) {
        car2_x = car2_x + 10;
        console.log(car2_x);
        set_background();
        set_img();
        set_img2();
        won();

    }
}

function car2_left() {

    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log(car2_x);
        set_background();
        set_img();
        set_img2();
    }
}

function won() {

    if (car1_x > 650) {
        console.log("car1 won")
        document.getElementById("score").innerHTML = "Orange car won!"

    }
    if (car2_x > 640) {
        document.getElementById("score").innerHTML = "White car won!"
    }

}