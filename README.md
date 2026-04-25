# LinuxUPC Website

This is the website of LinuxUPC, a community at the UPC dedicated to Free Software.

## Stack

- Astro 6
- pnpm
- Static output
- Public assets under `public/assets`

## Project Structure

- `src/layouts/`: Shared Astro layouts.
- `src/components/`: Reusable Astro components.
- `src/pages/`: Site pages, including `activities.astro`, which builds to `activities.html`.
- `public/assets/`: Images, CSS and JavaScript served as static files.
- `public/CNAME`: Custom domain configuration for GitHub Pages.

## Development

Install dependencies:

```sh
pnpm install
```

Start the local dev server:

```sh
pnpm dev
```

Build the static site:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Deployment Notes

- The site is built as static files and can be published on GitHub Pages.
- The custom domain is preserved through `public/CNAME`.
- PR previews should publish the generated `dist/` directory instead of the repository root.

## License

This project is licensed under the [MIT License](LICENSE).
