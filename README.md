This is a modified [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), including TailwindCSS, React Testing Library, and Jest.

- [Getting Started](#getting-started)
  - [Localhost](#localhost)
  - [IPv4](#ipv4)
- [Start Testing](#start-testing)
- [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)

## Getting Started

### Localhost

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Additionally, you can run a development on a local IPv4 address:

### IPv4

First, find your IPv4 address:

```bash
# windows
ipconfig
# mac
ifconfig
```

Then, run the development server:

```bash
npm run dev -- -H <ipv4>
# or
yarn dev -H <ipv4>
```

Open `http://<ipv4>:3000` with your browser to see the result.

## Start Testing

`Card`, `Footer`, and `Hero` components all have fake-passing tests to boilerplate test structure.

Running tests:

```bash
npm run test
# or
yarn test
```

## Learn More

To learn more about Next.js, TailwindCSS, and React Testing Library, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TailwindCSS Documentation](https://tailwindcss.com/) - discover TailwindCSS utilities.
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro) - learn how to write and maintain React component tests.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
