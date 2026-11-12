# Testing Documentation

## 1. Purpose

This document records the checks relevant to the Department of Computer Science homepage. It separates implementation visible in the source code from tests that still require execution in a browser or assistive technology.

## 2. Test environment

The following is a suggested environment, not a record of a completed test run:

- Operating system: Windows 10/11 or a supported equivalent.
- Editor: Visual Studio Code or another text editor.
- Browsers: current versions of Chrome, Firefox and Edge.
- Viewports: desktop (1366 × 768), tablet (768 × 1024), mobile (375 × 812 and 320 × 640).
- Assistive technology: a screen reader such as NVDA or VoiceOver, where available.

Record the actual device, operating system, browser and version when tests are performed.

## 3. Test procedures

| Test ID | Test | Procedure | Expected result |
|---|---|---|---|
| TC01 | Page load | Open `index.html` in a browser | Homepage loads without a missing-file error |
| TC02 | Semantic structure | Inspect page landmarks and headings | Header, navigation, main and footer are present and meaningful |
| TC03 | Skip link | Press Tab after page load and activate the skip link | Focus moves to the main content |
| TC04 | Desktop navigation | Use each navigation link and dropdown | Correct section is reached; dropdown content is available |
| TC05 | Keyboard dropdown | Focus a `summary`; use Enter or Space | Dropdown opens and closes using native browser behavior |
| TC06 | Mobile navigation | Set viewport to 600px or narrower and activate Menu | Navigation opens; `aria-expanded` updates |
| TC07 | Mobile link behavior | Open mobile menu and activate a link | Target section is reached and mobile menu closes |
| TC08 | Escape behavior | Open menu/dropdown and press Escape | Mobile menu and open dropdowns close; focus returns to Menu button |
| TC09 | Introduction images | Check both image files and their displayed content | Both intended images load and alt text describes their actual content |
| TC10 | Faculty table | Inspect the faculty table | Name, designation and date-of-joining columns are visible |
| TC11 | Footer | Navigate to the bottom of the page | Department footer and verified contact details are displayed |
| TC12 | Responsive layout | Test desktop, tablet and mobile widths | Content remains readable without unintended horizontal overflow |
| TC13 | Keyboard focus | Navigate the entire page using Tab and Shift+Tab | Focus is visible and follows a logical order |
| TC14 | Reduced motion | Enable reduced-motion preference in the operating system/browser | Smooth scrolling and non-essential motion are reduced |
| TC15 | Browser compatibility | Repeat core tests in Chrome, Firefox and Edge | Core content and interactions work consistently |
| TC16 | Screen reader | Inspect landmarks, headings, controls, images and table | Information is announced in a meaningful order |
| TC17 | Contrast and zoom | Check text contrast and zoom to 200% | Text remains readable; controls and content remain usable |

## 4. Results from source inspection

The following are source-code observations only. They are not claims that browser or assistive-technology tests have passed.

| Test area | Source inspection result | Execution status |
|---|---|---|
| HTML document structure | HTML5 doctype, language attribute and viewport metadata are included | Browser verification pending |
| Semantic landmarks | Header, nav, main, section and footer elements are included | Browser verification pending |
| Navigation destinations | The listed in-page destinations have matching section IDs | Browser verification pending |
| Dropdown implementation | Native `details` and `summary` elements are used | Keyboard/browser verification pending |
| Mobile menu | JavaScript toggles the menu and updates `aria-expanded` | Browser verification pending |
| Escape handling | JavaScript closes the mobile menu and open dropdowns | Browser verification pending |
| Introduction | Department introduction section is included | Official content approval pending |
| Images | Two image elements and local placeholder image files are included | Replace with official assets and verify |
| Faculty | Table includes name, designation and joining-date columns | Replace placeholder records with verified data |
| Footer | Department footer and contact placeholder are included | Replace with verified contact details |
| Focus styling | `:focus-visible` styling is defined | Visual keyboard test pending |
| Responsive styling | Flexbox, Grid and media queries are defined | Viewport testing pending |
| Reduced motion | A `prefers-reduced-motion` rule is defined | Preference testing pending |
| Contrast | Colors are specified in CSS | Contrast ratio measurement pending |
| Screen reader | Semantic labels and alternative text are present | Screen-reader testing pending |
| Cross-browser support | Standard HTML, CSS and JavaScript are used | Cross-browser testing pending |

**No browser-based or assistive-technology test is recorded as passed in this document.** Update this section only after performing the tests and recording the actual result.

## 5. Known limitations and pending work

1. Replace the two placeholder image files with authorized official images.
2. Replace placeholder introduction, history, vision, mission, programme and research text with approved departmental content.
3. Replace faculty names, designations and joining dates with verified records.
4. Add verified postal address, official email and telephone details.
5. Perform the test cases listed above in the actual target browsers and devices.
6. Measure color contrast and verify keyboard and screen-reader behavior.
7. Record defects, fixes, tester names and test dates.

## 6. Defect log

| Defect ID | Description | Priority | Status |
|---|---|---|---|
| DEF01 | Official images have not yet been supplied; current files are placeholders | High | Open |
| DEF02 | Departmental and academic text requires official verification | Medium | Open |
| DEF03 | Faculty records are placeholders | High | Open |
| DEF04 | Contact details are placeholders | Medium | Open |
| DEF05 | Browser, keyboard, screen-reader and responsive tests have not been executed and recorded | High | Open |
| DEF06 | Color contrast has not yet been measured against WCAG criteria | Medium | Open |

## 7. Test record

Complete this table after each test session.

| Date | Tester | Browser/device | Tests performed | Passed | Failed | Notes |
|---|---|---|---|---|---|---|
| [Date] | [Name] | [Browser/device] | [Test IDs] | [Count] | [Count] | [Observations] |

## 8. Accessibility reference

Use WCAG 2.2 as the accessibility reference when evaluating the finished site: https://www.w3.org/TR/WCAG22/

Relevant areas include text alternatives, information and relationships, contrast, resize/reflow, keyboard operation, visible focus and target size. This checklist is guidance for testing; it is not a claim of formal WCAG conformance.
