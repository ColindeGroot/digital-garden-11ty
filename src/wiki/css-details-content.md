---
title: Styling details content in CSS
summary: Using CSS I made an interesting and enhanched layout using details and summary.
tags: CSS
---

I made an start to an interesting layout using details and summary. On mobile the summary is supposed to be invisible while on desktop they should be visible. This is due to the fact that the summary takes a lot of space on mobile while it doesn't provide extra space on desktop upon closing.

I achieved this result by setting the summary on open in html

```html
<fieldset>
  <details open>
    <summary>De persoon</summary>
    <select id="tag-select">
      <option value="">Alle tags</option>
      {#each tags as tag}
      <option value="{tag}">{tag}</option>
      {/each}
    </select>
  </details>
</fieldset>
```

Then in CSS I added queries for the different devices in which I used the ::details-content inside supports to change the display of the summary.

```css
@supports selector(::details-content) {
  details[open]::details-content {
    padding: 1rem;
    background-color: rebeccapurple;
    display: none;
  }

  @media (min-width: 60em) {
    details[open]::details-content {
      display: block;
    }
  }
}
```

If the selector is not supported then the summary's will stay open by standard. So this is more of an enhancement since the core functionality is not affected by this

By changing the display on different breakpoints I have achieved to open or close the summary.

The results:

<img width="168" height="101" alt="Screenshot 2025-11-12 222327" src="https://github.com/user-attachments/assets/5637a4a4-359c-40ba-a38e-ec0d4cad55a4" />
<img width="247" height="184" alt="Screenshot 2025-11-12 222335" src="https://github.com/user-attachments/assets/0b8756da-127e-4125-87bc-3df6baed561b" />

After this I was able to continue styling the summary according to design.

Now I want to use JS to change the open value to see if I can Make the filter closed on mobile and open on desktop.
