# TechPulse - Modern Next.js & Redux-Saga Blog Application

A full-featured blog application built with **Next.js (App Router)**, **Redux Toolkit**, **Redux-Saga**, and **Tailwind CSS**.

## 🚀 Getting Started

The development server is ready to run locally:

```bash
npm run dev
```

Open your browser and navigate to:
**[http://localhost:3000](http://localhost:3000)**

---

## 📄 Pages & Routes Implemented

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Landing page with featured post banner, topic pills, recent articles, and newsletter CTA. |
| `/blog` | **Blog List** | Browse all posts with real-time search, category filtering, and functional pagination. |
| `/blog/[id]` | **Blog Detail** | Dynamic article view with author metadata, formatted content, related posts, and an interactive comments section. |
| `/about` | **About** | The blog's mission, key statistics, editorial standards, author profiles, and contact link. |
| `/contact` | **Contact** | Interactive contact form (UI only) with client-side feedback and contact info cards. |
| `/login` | **Login** | Authentication form with an **Instant Demo Admin Login** button for quick testing. |
| `/signup` | **Signup** | Account registration form. |
| `/dashboard` | **Admin Dashboard** | **Protected Route** featuring post metrics, a full posts table, and a modal to **Create**, **Edit**, and **Delete** posts. |

---

## 🛠️ Architecture & Technical Implementation

- **Next.js App Router (16.x):** Server Components, dynamic routes (`/blog/[id]`), and fast client navigation.
- **Redux Toolkit (`@reduxjs/toolkit`):** Centralized state for posts, search/filter queries, pagination, and authentication.
- **Redux-Saga (`redux-saga`):** Generator-based side effect management for asynchronous post fetching, creation, deletion, and comment submission.
- **Tailwind CSS (v4):** Utility-first responsive design supporting light and dark modes.
- **Image Optimization (`next/image`):** Remote patterns configured for high-resolution post covers and author avatars.
- **Route Protection:** Protected dashboard view with authentication gate and instant demo sign-in.

---

## ✍️ How to Customize Your Information

- **Blog Posts & Seed Data:** Edit [lib/data/posts.ts](lib/data/posts.ts) to add or replace articles, categories, and author details.
- **About Page Details:** Edit [app/about/page.tsx](app/about/page.tsx) to update team members, milestones, and mission statement.
- **Contact Details:** Edit [app/contact/page.tsx](app/contact/page.tsx) to customize contact email, address, and phone numbers.
- **Branding & Navigation:** Edit [components/Navbar.tsx](components/Navbar.tsx) and [components/Footer.tsx](components/Footer.tsx).
