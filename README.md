# Computational Discovery Lab Website

A static professional lab website ready for GitHub Pages.

## Customize

Edit these files:

- `index.html` for lab name, professor name, research areas, people, publications, teaching, openings, and contact details.
- `assets/js/events-data.js` for news, seminars, deadlines, awards, and other lab events.
- `assets/css/styles.css` for colors, spacing, and visual style.
- `assets/images/lab-hero.png` to replace the hero image with a real lab photo.

## Update News and Events

Open `assets/js/events-data.js` and edit the list:

```js
{
  date: "2026-09-10",
  type: "Seminar",
  title: "Lab Seminar Title",
  description: "One-sentence description.",
  link: "#"
}
```

Use `YYYY-MM-DD` dates. Future dates appear under upcoming events; past dates appear under recent news.

## Preview Locally

From this folder:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload or push all files in this folder to the repository root.
3. In GitHub, go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and the `/root` folder.
6. Save. GitHub will publish the site after the first Pages build finishes.

Your site URL will usually look like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

If you name the repository `YOUR-USERNAME.github.io`, GitHub can publish it at:

```text
https://YOUR-USERNAME.github.io/
```
