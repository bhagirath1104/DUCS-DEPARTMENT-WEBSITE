# Department of Computer Science — University of Delhi Homepage

## Project purpose

This project is a responsive, static homepage prototype for the Department of Computer Science, University of Delhi. It presents departmental information, navigation, academic sections, faculty details and contact information in a semantic HTML structure.

## Objectives

- Create a clear departmental homepage using semantic HTML5.
- Provide accessible navigation with dropdown sections and a mobile menu.
- Present an introduction and two image areas.
- Display faculty details in a structured table.
- Apply responsive styling and basic accessibility practices.
- Keep content, styling and JavaScript in separate files.

## Features

- Department header and University of Delhi logo image area.
- Main navigation with About Us and Academics dropdowns.
- Mobile navigation toggle with an accessible expanded state.
- Department introduction and two image areas.
- History, Vision and Mission, Undergraduate, Postgraduate and Research sections.
- Faculty table with name, designation and date-of-joining fields.
- Department footer and automatically updated copyright year.
- Skip link, keyboard focus styling, semantic landmarks and reduced-motion support.

## Technologies

- HTML5
- CSS3 (Flexbox, Grid and media queries)
- Vanilla JavaScript
- Modern web browser

No framework, package installation or backend server is required.

## Directory structure

```text
du-computer-science-homepage/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── navigation.js
│
├── images/
│   ├── university-of-delhi-logo.png
│   └── department-computer-science.jpg
│
├── docs/
│   └── testing.md
│
└── README.md
```

## How to run

1. Extract the project folder.
2. Keep the folder structure and filenames unchanged.
3. Open `index.html` in a modern web browser.
4. Alternatively, open the folder in Visual Studio Code and use the Live Server extension.
5. Resize the browser to check the mobile layout and use the Menu button at narrow widths.

The project is static and can run locally without an internet connection.

## Requirements implemented

| Requirement | Implementation |
|---|---|
| R1 — Department header | Header with university and department names |
| R2 — Navigation with dropdowns | About Us and Academics use native `details` and `summary`; mobile menu uses JavaScript |
| R3 — Department introduction | About the Department section |
| R4 — Two images | Two image elements with alternative text and captions |
| R5 — Faculty details | Faculty table with the three requested fields |
| R6 — Department footer | Footer with department name and contact placeholder |
| Accessibility | Semantic landmarks, skip link, visible focus, alt text, responsive layout and reduced-motion handling |
| Maintainability | Separate HTML, CSS, JavaScript and documentation files |

## Important content replacement before submission or publication

The two image files in `images/` are clearly marked placeholder graphics, not official University of Delhi or department photographs. Replace them with authorized image files while retaining the filenames, or update the image paths in `index.html`.

Also replace all bracketed placeholders with verified information:
- Official departmental introduction and history.
- Approved vision and mission statements.
- Programme and research details.
- Faculty names, designations and dates of joining.
- Official postal address, email and telephone number.

Do not publish placeholder faculty records or placeholder contact details as factual information.

## Student details and contributions

Complete this table with the actual team information. Do not leave placeholders in the submitted copy.

| Student name | Roll number | Contribution |
|---|---|---|
| [Student 1] | [Roll number] | [Actual contribution] |
| [Student 2] | [Roll number] | [Actual contribution] |
| [Student 3] | [Roll number] | [Actual contribution] |

If this is an individual project, retain only the relevant student row and describe the work personally completed.

## Limitations

- This is a static front-end prototype; it has no database, login, content-management system or server-side functionality.
- Departmental facts, faculty records and contact information are placeholders pending verification.
- The supplied image assets are placeholders and must be replaced with approved official assets.
- Browser, assistive-technology and formal WCAG conformance testing must be completed in the target environment.
- The visual layout and behavior may vary slightly between browsers.

## Authoritative references

- WHATWG HTML Living Standard: https://html.spec.whatwg.org/
- MDN HTML documentation: https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN CSS documentation: https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN CSS media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
- MDN JavaScript documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- W3C Web Content Accessibility Guidelines (WCAG) 2.2: https://www.w3.org/TR/WCAG22/

These references describe the technologies and accessibility guidance used as a basis for the prototype; they do not certify that this project conforms to WCAG.
