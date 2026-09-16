# Blog App

A modern blog application built with React and Next.js, with Redux for state management and Tailwind CSS for styling.

## Project Description

This project is a foundation for a responsive blog experience where users can browse posts and interact with blog content through a clean, component-based interface.

## Setup Instructions

### Prerequisites

- Node.js 18.17 or later
- npm, pnpm, or yarn

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Production build:

```bash
npm run build
npm start
```

> This checkout currently contains the project documentation only. Add the application source and package scripts before running these commands.

## Technologies Used

- React
- Next.js
- Redux
- Tailwind CSS

## Features Implemented

- [ ] Browse blog posts
- [ ] View an individual post
- [ ] Manage application state with Redux
- [ ] Responsive styling with Tailwind CSS
- [ ] Next.js application routing

> Check an item when the corresponding feature is present in the application source.

## Screenshots and GIFs

Screenshots or GIFs are not available in this checkout yet. Add key feature captures under `docs/media/` and embed them here, for example:

```md
![Blog post list](docs/media/post-list.png)
![Post details](docs/media/post-details.gif)
```

## Challenges and Solutions

- **Keeping shared UI state predictable:** Redux provides a single, explicit state flow for data that needs to be shared across components.
- **Building a responsive layout efficiently:** Tailwind CSS utility classes make responsive breakpoints and consistent spacing quick to apply.
- **Organizing a full-stack React application:** Next.js supplies routing and the application structure needed to grow the blog beyond a single page.

## Future Improvements

- Add authentication and role-based access for authors.
- Add create, edit, and delete post workflows.
- Add search, tags, categories, and pagination.
- Add image uploads and optimized media handling.
- Add automated tests and continuous integration.
- Add real screenshots and feature GIFs to this README.
