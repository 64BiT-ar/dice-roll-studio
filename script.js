

function Roll(){
    let userInput = Number(document.getElementById("number_of_dice_inp").value);

    let dice_values = [];
    let dice_images = [];

    let dice_number_display = document.getElementById("right");
    let dice_image_display = document.getElementById("dice_images");

    for(let i=0; i<userInput; i++){
        let value = Math.floor(Math.random()* 6) + 1;
        dice_values.push(value);
        dice_images.push(`<img src="images/${value}.png">`);
    }
    let space = " ";
    dice_number_display.textContent = `${space} ${dice_values.join(" | ")}`;
    dice_image_display.innerHTML= dice_images.join("");

}