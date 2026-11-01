# Body Mass Index Calculator

A responsive single-page BMI calculator with metric and imperial units, plus short sections on what a BMI result means and where BMI falls short. Built with plain HTML, CSS and JavaScript, with no frameworks or build step.

## Project structure

```
bmi-calculator/
├── index.html      # Page markup
├── styles.css      # Styling and responsive rules
├── script.js       # Unit toggle and BMI calculation
├── README.md
└── images/
    └── person.jpg  # Photo for the "What your BMI result means" section
```

## Getting started

1. Keep the folder structure as shown above.
2. Open `index.html` in a modern browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# or
npx serve
```

An internet connection is needed on first load for the Inter font from Google Fonts. Without it, the page falls back to system fonts.

## How the calculator works

- **Metric:** enter height in centimetres and weight in kilograms. BMI = kg ÷ m².
- **Imperial:** enter height in feet and inches, and weight in stone and pounds. BMI = (lbs ÷ in²) × 703.
- The result updates as you type and shows your BMI, a category, and the weight range that falls within a BMI of 18.5 to 24.9 for your height.
- Switching units clears the fields and returns to the welcome message.

| BMI | Category |
|---|---|
| Below 18.5 | Underweight |
| 18.5 to 24.9 | Healthy weight |
| 25 to 29.9 | Overweight |
| 30 and above | Obese |

## Customization

- **Colors and font:** edit the CSS variables at the top of `styles.css` (`--navy`, `--text`, `--blue`, `--line`, `--pale`, `--font`).
- **Text:** edit the copy directly in `index.html`.
- **Photo:** replace `images/person.jpg`. A cut-out photo with a transparent or plain background works best, since it sits on a light blue panel and overlaps its top edge.
- **BMI categories:** adjust the thresholds in the `category()` function in `script.js`.

## Responsive behavior

- Above 900px: the hero is a two-column layout with the calculator card overlapping the blue panel, and the limitation cards are staggered.
- 900px and below: everything stacks into a single column and the decorative arcs are hidden.
- 480px and below: the height and weight fields stack, and the result box becomes a single column.

## Accessibility

- Radio buttons and inputs are real form controls with visible focus states.
- The result area is announced to screen readers when it changes.

## Disclaimer

BMI is a general screening tool, not a diagnosis. It does not account for muscle mass, age, sex, pregnancy or ethnicity. For personal health advice, talk to a doctor or nurse.

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- Photo: supplied by the project owner. Make sure you have the right to use it before publishing.
