---
title: CSS scrollButtons
summary: The new CSS scrollbuttons allows us to make scroll functions without the need of js!
tags: ["css", "new features"]
image: /assets/images/scrollbuttons.png
---

# CSS ::scroll-buttons

Scroll buttons is a new feature in CSS which can make a functional slider without the need of any JS.

The scroll buttons in CSS is not widely supported so it is more a a cool function rather than a replacement. Make sure You use supports in CSS and have js as an fallback
<img width="1000" height="300" alt="image" src="https://github.com/user-attachments/assets/604e2c85-6dfc-49d4-97f4-18cb3a7e3fef" />

I used this function on my I-love-web. My goal is to add a scrollmarker group as well to show the active slide.

```css
.git-repos::scroll-button(*) {
  content: "<";
  border: none;
  background-color: #111112;
  color: #fff;
  font-size: 2rem;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.git-repos::scroll-button(right) {
  content: ">";
}
```

by adding a scroll-snap to the slider the buttons will slide more smoothly and accurate instead of skipping random items

<img width="2526" height="381" alt="image" src="https://github.com/user-attachments/assets/3dead0e0-6f52-43a1-9764-29415048f60d" />

If you want to position these buttons you can use the new achor positioning. Just give your carousel an anchor name and set the position anchor on the buttons:

```css
position: fixed;
position-area: left center;
position-anchor: --repocarousel;
```
