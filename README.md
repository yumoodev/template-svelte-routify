# Svelte 🔥 + Routify 🎯 + Vite ⚡️

Starter template should help get you started developing with Svelte in Vite with Tailwind CSS and Routify applied.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Installation

```bash
npx degit yumoodev/template-svelte-routify project-name
cd project-name
npm install && npm run dev
```

## Folder Structure

```bash
/
├── .routify/
├── dist/
├── public/
└── src/
    ├── assets/
    ├── lib/
    └── pages/
```

👉 **dist** is the build output (yout're not going to see it until you run _npm run build_)  
👉 **public** is where you keep your public files such as images and your favicon  
👉 **src** is where you keep your source files  
👉 **assets** and **lib** are for your assets and components  
👉 **pages** is where your define the routes

## Environment

- Routify - `v2.18.5`
- Svelte - `3.48.0`
- Tailwind CSS - `3.0.24`
- Vite - `v2.9.9`
- Vite Plugin Svelte - `1.0.0-next.44`

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd dist
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge dist my-project.surge.sh
```
