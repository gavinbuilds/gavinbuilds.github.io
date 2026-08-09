# gavinbuilds.github.io

My personal site — build logs for machines I've made, and the work I've done in
shops and startups. Jekyll, no theme gem, deployed to GitHub Pages by Actions.

Live at <https://gavinbuilds.github.io>.

## Running it locally

Needs Ruby 3.3 (see `.ruby-version`).

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## How the site is put together

There is no theme gem. Everything is in this repo:

| Path | What it is |
|---|---|
| `_layouts/base.html` | page shell — head, sidebar, contact modal |
| `_layouts/home.html` | the front page hero |
| `_layouts/cards.html` | an index page that lists cards |
| `_layouts/detail.html` | a single project or job, with the markdown body |
| `_layouts/page.html` | anything else |
| `_data/nav.yml` | the sidebar — labels, icons, keyboard shortcuts |
| `assets/css/main.scss` | all styling, tokens at the top |
| `assets/js/site.js` | theme toggle, shortcuts, modal, mobile nav |

### Adding a project

Drop a markdown file in `docs/04-projects/` with this front matter. The Projects
page picks it up automatically — there is no list to update.

```yaml
---
layout: detail
title: The Thing I Built
section: projects      # `work` puts it on the Work page instead
order: 15              # ascending; controls position in the list
subtitle: One line, shown in italic under the title
summary: >
  Two sentences. This is the card excerpt and the meta description.
featured: true         # optional — also show it on the home page
---
```

Images go in `docs/04-projects/images/<project>/` and are referenced relatively,
e.g. `![Frame](../04-projects/images/voron/21-11 frame.jpg)`. Keep them under
about 1600px wide. Lazy loading is added at build time, so don't add it by hand.

### Changing the look

Colors, fonts, and spacing are CSS custom properties at the top of
`assets/css/main.scss`. The accent color is `--accent`, defined once for light
and once under `[data-theme="dark"]`.
