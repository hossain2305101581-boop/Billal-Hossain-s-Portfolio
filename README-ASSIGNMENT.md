# Portfolio Website — VS Code Project & Assignment Guide

## 1. Website purpose and audience
This is a personal portfolio for MD. Billal Hossain, a UI Designer and Front-End Developer with interests in programming and networking. It is intended for teachers, recruiters, potential collaborators, and visitors who want to learn about his skills and projects.

The light, minimal design uses a consistent navigation bar, clear headings, project cards, readable spacing, and responsive layouts so visitors can find information quickly.

## 2. Sitemap
```text
Home (index.html)
├── About (about.html)
├── Projects (projects.html)
│   ├── Banking Network Infrastructure
│   ├── Food App UI Design
│   ├── Business Website
│   ├── Data Center Energy Consumption Prediction
│   └── Computer Graphics Projects
└── Contact (contact.html)
```

## 3. Home page wireframe
```text
+--------------------------------------------------+
| BH.                    Home About Projects Contact|
|--------------------------------------------------|
| AVAILABLE FOR OPPORTUNITIES                      |
| Designing thoughtful          [Portrait photo]   |
| digital experiences.                             |
| Intro text + buttons                              |
|--------------------------------------------------|
| UI DESIGN * FRONT-END * NETWORKING *             |
|--------------------------------------------------|
| A LITTLE INTRO / Short introduction              |
|--------------------------------------------------|
| SELECTED WORK                                     |
| [Banking Network Project] [Food App UI]           |
|--------------------------------------------------|
| Skills                                            |
|--------------------------------------------------|
| Footer                                            |
+--------------------------------------------------+
```

## 4. Purpose of each page
- **Home:** Introduces Billal and highlights his interests and selected work.
- **About:** Presents profile, education, skills, and languages.
- **Projects:** Explains five academic and practical projects.
- **Contact:** Displays contact information and a form for visitors.

## 5. HTML elements used
- `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, and `<body>` form the HTML5 document structure.
- Headings (`h1`, `h2`, `h3`) and paragraphs (`p`) organize information.
- Unordered lists (`ul`, `li`) display skills.
- Ordered lists can be used for numbered instructions or steps if needed.
- Images (`img`) show the portrait and networking topology.
- Internal links (`a href="about.html"`) connect the local pages.
- External links (`a href="https://www.linkedin.com/"`) open an external website.
- A table is not essential to the visual layout, but the following optional education table can be added to `about.html` if the assignment marker specifically requires a table:

```html
<table>
  <caption>Education Summary</caption>
  <thead><tr><th>Year</th><th>Qualification</th><th>Institution</th></tr></thead>
  <tbody>
    <tr><td>2021</td><td>HSC</td><td>M.E.H Arif College</td></tr>
    <tr><td>2019</td><td>SSC</td><td>BARI High School</td></tr>
    <tr><td>2015</td><td>JSC</td><td>BARI High School</td></tr>
  </tbody>
</table>
```

## 6. Three code snippet explanations
### Snippet 1 — HTML document structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>
```
The doctype declares HTML5. The head contains metadata and the browser tab title. The body contains the visible content. The viewport meta tag helps the page scale correctly on mobile devices.

### Snippet 2 — Internal navigation
```html
<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="projects.html">Projects</a>
  <a href="contact.html">Contact</a>
</nav>
```
The `nav` element groups the main navigation links. Relative file links connect the four pages in the same project folder. The same menu is used on every page for consistency.

### Snippet 3 — Contact form
```html
<input type="text" name="name" required>
<input type="email" name="email" required>
<input type="radio" name="address" value="Mr.">
<input type="checkbox" name="interest" value="Collaboration">
<select name="topic"><option>UI/UX Design</option></select>
<textarea name="message" required></textarea>
<button type="submit">Send message</button>
```
These controls collect visitor details and a message. The `required` attribute and email input type provide basic browser validation. JavaScript prevents a real submission because this student demo has no backend.

## 7. Contact form requirements
The Contact page includes:
- Text field for name.
- Email field.
- Radio buttons.
- Checkboxes.
- Dropdown list.
- Textarea.
- Submit button.

**Important:** This is a front-end demonstration only. It validates the form in the browser but does not email, save, or transmit messages. A backend or form service is required for real message delivery.

## 8. Testing checklist
Test personally before submitting:
1. Open `index.html` in Google Chrome.
2. Click Home, About, Projects, and Contact; check every page loads.
3. Test the mobile menu by narrowing the browser window.
4. Submit the Contact form with empty fields and confirm browser validation appears.
5. Enter valid sample information and confirm the demo success message appears.
6. Repeat the same checks in Mozilla Firefox.
7. Record only the results you actually observe.

Suggested observation table (complete after testing):

| Browser | What to check | Your observation |
|---|---|---|
| Google Chrome | Navigation, layout, form | Write your actual result |
| Mozilla Firefox | Navigation, layout, form | Write your actual result |

## 9. Possible problems and solutions
Use these only if they match problems you actually encountered:
- **Broken image:** Check that the image file is inside `assets` and that the HTML path matches its exact name.
- **Page link not opening:** Check spelling and relative paths, including `.html`.
- **Mobile menu not opening:** Check that `script.js` is linked with `defer` and that the class names match.
- **Layout overflow:** Check the responsive CSS media queries and image widths.

## 10. Design justification
Semantic elements such as `header`, `nav`, `main`, `section`, and `footer` make the page structure easier to understand. Separate CSS and JavaScript files make the project easier to maintain. A common navigation menu helps visitors move between pages. Responsive CSS supports desktop and mobile screens. Form labels improve clarity and accessibility.

## 11. Future improvements
- Add a real backend or email service for contact form delivery.
- Add project screenshots from the actual Food App and Business Website.
- Add links to GitHub, LinkedIn, and live project demos.
- Improve SEO and accessibility.
- Add richer JavaScript interactions and animations.

## 12. How to open in Visual Studio Code
1. Extract `Billal_Portfolio_Website.zip`.
2. Open Visual Studio Code.
3. Select **File → Open Folder**.
4. Choose the extracted `Billal_Portfolio_Website` folder.
5. Open `index.html`.
6. Right-click and choose **Open with Live Server** if the Live Server extension is installed. Otherwise, double-click `index.html` to open it in a browser.

## 13. Screenshots for assignment evidence
Capture your own screenshots after running the website:
- `screenshots/home.png`
- `screenshots/about.png`
- `screenshots/projects.png`
- `screenshots/contact.png`

Use Windows Snipping Tool (`Win + Shift + S`) or a browser screenshot feature. Put the screenshots in a folder named `screenshots` before submission.
