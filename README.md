# Personal website

A simple, free personal portfolio hosted on GitHub Pages. It runs on plain HTML, CSS and JavaScript - no installs or build steps needed.

## What's here

- `index.html` - page structure
- `styles.css` - design and responsive layout
- `data.js` - **the only file you need to edit** to change the content
- `script.js` - turns the data into page content

## Make it yours

Open `data.js` and update:

1. `profile.name`, `profile.email`, `profile.socials`, `profile.tagline` and `profile.intro`.
2. `videos` - add one object per video you want to show (see the example in the file).
3. `education`, `experience` and `skills` - already filled in; tweak as needed.

Save the file and refresh the page locally to see your changes.

### Adding an unlisted YouTube video

1. Upload the video to YouTube and set its visibility to **Unlisted**.
2. In YouTube Studio, check that **Allow embedding** is enabled for the video.
3. Copy the video ID from the share link: `https://youtu.be/VIDEO_ID_HERE` → `VIDEO_ID_HERE`.
4. Add it to `data.js`:

```js
videos: [
  {
    title: "Turfrobot obstacle avoidance",
    youtubeId: "VIDEO_ID_HERE",
    description: "Short demo of small-object detection in the field.",
    date: "2026",
    category: "Navigation",
    start: 0,
    end: 15,
  },
],
```

`start` and `end` set the preview window in seconds. Clicking a tile plays only that part, muted and on a loop, without leaving the page. Every card also has a "Watch full video on YouTube" link underneath it.

> **Note:** "Unlisted" is not the same as private. Anyone with the link - including people who get it from your site - can watch and share the video.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. You can also just double-click `index.html`.

## Deploy to GitHub Pages (free)

1. Create a GitHub account if you don't have one: <https://github.com/signup>.
2. Create a new repository named exactly `<your-username>.github.io` (for example `shreyash.github.io`). Keep it **public** - public repos are free; private repos with Pages require a paid plan.
3. Upload all files from this folder to that repository (drag and drop on GitHub, or use Git):

   ```bash
   cd personal_website
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

4. In your repository, go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, then click **Save**.
6. After a minute or two, your site is live at `https://<your-username>.github.io`.

## Updating the live site

Edit `data.js` (or any other file), commit and push. GitHub Pages republishes automatically within a couple of minutes.

## Optional next steps

- Add a profile photo to the hero section.
- Buy a custom domain and configure it in Settings → Pages.
- Add category filters if you end up with many videos.
