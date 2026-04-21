# Dice Roller

A lightweight and interactive web application to simulate rolling one or more dice directly in the browser.

## Overview

Dice Roller is a simple front-end project built with HTML, CSS, and JavaScript. Users can select how many dice to roll, generate random outcomes, and instantly view both the numeric results and matching dice face images.

This project is ideal for beginners learning DOM manipulation, event handling, and random number generation in JavaScript.

## Features

- Roll between **1 and 6 dice** in a single click
- Generate random values from **1 to 6** for each die
- Display results as:
  - Numeric output (e.g., `2 | 5 | 1`)
  - Visual dice images based on each rolled value
- Simple and clean UI
- Fully client-side (no backend required)

## Tech Stack

- **HTML5** for structure
- **CSS3** for styling and layout
- **Vanilla JavaScript (ES6)** for app logic and DOM updates

## Project Structure

```text
Dice Roller/
├── index.html        # Main webpage structure
├── style.css         # Styling for layout and components
├── script.js         # Dice roll logic and UI updates
└── images/           # Dice face images (1.png to 6.png)
```

## How to Run

1. Download or clone this repository.
2. Ensure the `images` folder includes dice images named `1.png` through `6.png`.
3. Open `index.html` in any modern web browser.

No additional dependencies or installation steps are required.

## Usage

1. Enter the number of dice (minimum: 1, maximum: 6).
2. Click the **Roll** button.
3. View:
   - Rolled values in the result area
   - Corresponding dice images below

## Example Output

If the user rolls 3 dice, the output may look like:

- Values: `3 | 6 | 2`
- Images: Dice face images for 3, 6, and 2

## Future Improvements

- Add roll history
- Add total/sum of all dice
- Add animation while rolling
- Improve responsive design for smaller screens
- Add theme switcher (light/dark)

## Author

**Ahmed Raza**

## License

This project is available for learning and personal use.
