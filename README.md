# 11ty Garden

Digital Garden built with Eleventy (11ty), Liquid templates, Markdown wiki posts, and PostCSS using nested CSS and BEM naming.

## In this project

This project is a personal Digital Garden / blog site containing the following:

- The homepage shows a profile section, GitHub repositories, and filterable wiki cards.
- Wiki posts are written in Markdown and converted to HTML by Eleventy plugins.
- Shared layouts/components are built with Liquid templates.
- Styling uses a BEM-inspired class architecture and PostCSS features.

## Tech Stack

- Static site generator: `@11ty/eleventy`
- Templating: Liquid (`.liquid`)
- Content format: Markdown (`.md`)
- Markdown engine / converter: `markdown-it`
- Markdown wiki links: `markdown-it-wikilinks`
- Syntax highlighting: `@11ty/eleventy-plugin-syntaxhighlight` + `prism-svelte`
- CSS: PostCSS + `postcss-nested` + `autoprefixer`
- Data source: GitHub REST API via Eleventy data file (`src/_data/github.js`)
- Environment variables: `dotenv`

## Project Structure

```text
11ty-garden/
	eleventy.config.js          # Eleventy + plugins + markdown + css extension + collections
	src/
		index.liquid              # Home page
		blogs.liquid              # Blog overview page
		styleguide.liquid         # Local styleguide and component examples
		_includes/
			header.liquid           # Reusable navigation component
			wiki-layout.liquid      # Shared layout for wiki markdown pages
			icons/link.liquid       # Reusable icon partial
		_data/
			github.js               # Fetches GitHub repositories at build time
			meta.js                 # Site metadata (URL, title, description)
		wiki/
			*.md                    # Wiki posts (markdown content)
			wiki.11tydata.json      # Applies wiki layout + wiki tag to all posts
		css/
			style.css               # Global tokens/utilities/components
			home.css                # Home page sections and animations
			wiki.css                # Wiki page typography/content styles
			blogs.css               # Reserved for blogs page styles
```

## How Markdown Conversion Works

Markdown conversion is configured in `eleventy.config.js` with `markdown-it`:

- `html: true`: allows raw HTML inside markdown
- `breaks: true`: converts line breaks into `<br>` behavior
- `linkify: true`: auto-detects plain URLs and turns them into links

The markdown engine is then registered through:

```js
eleventyConfig.setLibrary("md", md);
```

### Wiki Link Plugin (`markdown-it-wikilinks`)

The project also supports wiki-style links (for example `[[My Page]]`). The plugin transforms those into absolute wiki URLs.

Configured behavior:

- Base wiki route: `/wiki/`
- Absolute links enabled
- Trailing slash added
- Page name normalization: trim -> lowercase -> spaces replaced by dashes

Example idea:

- `[[CSS Scroll Buttons]]` becomes `/wiki/css-scroll-buttons/`

## Templates and Layout Strategy

The project combines full-page templates and shared partials:

- `src/index.liquid`: homepage with GitHub section + wiki filters
- `src/blogs.liquid`: blogs listing page
- `src/_includes/header.liquid`: reusable top navigation
- `src/_includes/wiki-layout.liquid`: wrapper layout used by markdown wiki posts

Wiki markdown pages inherit defaults from `src/wiki/wiki.11tydata.json`:

- `layout: "wiki-layout.liquid"`
- `tags: "wiki"`

This means every markdown file in `src/wiki/` is automatically:

1. Rendered through the wiki layout
2. Included in the `wiki` collection

## Collections and Filtering

Custom collections/filters in `eleventy.config.js`:

- `filterByTag` filter: returns only items containing a specific tag
- `wikiTags` collection: extracts unique tags from all wiki items (excluding the base `wiki` tag)

Those tags are used on the homepage to generate filter buttons dynamically. A small script in `src/index.liquid` toggles visible wiki cards based on selected tag.

## Syntax Highlighting

Code blocks in markdown are highlighted via Eleventy syntax highlight plugin.

- Plugin: `@11ty/eleventy-plugin-syntaxhighlight`
- Extra language support: `prism-svelte`
- Theme CSS loaded in the wiki layout from `prism-themes` CDN

Important convention for authors:

- Use lowercase language identifiers in fenced code blocks (examples: `css`, `js`, `svelte`).

## CSS Architecture (BEM + PostCSS)

The CSS follows a BEM-style naming strategy described in `conventions.md`:

- Block example: `.navigation`
- Element example: `.navigation__item`
- Modifier example: `.button--primary`

The codebase also uses nested selectors in source CSS (for example `&__item`, `&--hidden`). These are compiled by PostCSS before output.

### PostCSS techniques used

- `postcss-nested`: enables readable nested CSS structure
- `autoprefixer`: automatically adds vendor prefixes where needed
- CSS custom properties: design tokens for spacing, colors, type scale, borders, shadows

## Other Techniques Used

- Progressive enhancement with `@supports` for experimental CSS features
- Responsive navigation menu with an accessible toggle (`aria-expanded`)
- API fallback behavior in `src/_data/github.js`: returns `[]` on errors/rate limit
- Passthrough copy for static assets (`src/assets`)
- Optional local wiki sync before dev/build via `npm run update-wiki`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. (Optional) Add environment variables

Create a `.env` file in the project root:

```env
GITHUB_TOKEN=your_github_token
URL=http://localhost:8080
```

- `GITHUB_TOKEN` increases GitHub API reliability and rate limit headroom.
- `URL` is used by metadata and should be updated for deployment.

### 3. Start local development

```bash
npm run start
```

### 4. Build production output

```bash
npm run build
```

Generated files are written to `_site/`.

## Content Conventions

From `conventions.md`:

- Keep wiki/blog markdown filenames lowercase with dashes (kebab-case)
- Keep collection tags lowercase for consistent filtering
- Include front matter in markdown posts (title, tags, summary)
- Prefer robust fallbacks and clear error handling when integrations fail

## Notes

- `cssnano` is present in dependencies but not currently active in the PostCSS pipeline.
- `blogs.css` currently exists but is empty and can be used for future page-specific styles.
