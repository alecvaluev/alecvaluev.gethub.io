# Getting Started

## Autimatic Setup
```
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

> for TypeScript use the --typescript flag

- `pages` - Associated with a route based on their file name. For example pages/about.js is mapped to /about
- `public` - Stores static assets such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/).

## Pages

In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory

Next.js supports pages with dynamic routes. For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc

## Pre-rendering

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive.
 (This process is called hydration.)
 
### Two forms of Pre-rendering

- `Static Generation (Recommended)`: The HTML is generated at build time and will be reused on each request.
- `Server-side Rendering`: The HTML is generated on each request.

The difference is in when it generates the HTML for a page.

> We recommend using Static Generation over Server-side Rendering for performance reasons. 
> Statically generated pages can be cached by CDN with no extra configuration to boost performance

We recommend using Static Generation over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance

## Static Generation without data
By default, Next.js pre-renders pages using Static Generation without fetching data.

## Static Generation with data
Some pages require fetching external data for pre-rendering. There are two scenarios

### 1. Scenario 1: Your page content depends on external data
To fetch this data on pre-render, Next.js allows you to export an async function called getStaticProps from the same file. 
This function gets called at build time and lets you pass fetched data to the page's props on pre-render.

```js
function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
```
### 2. Your page paths depend on external data
Next.js allows you to create pages with dynamic routes. For example, you can create a file called pages/posts/[id].js 
to show a single blog post based on id. This will allow you to show a blog post with id: 1 when you access posts/1

 Next.js lets you export an async function called getStaticPaths from a dynamic page (pages/posts/[id].js in this case). 
 This function gets called at build time and lets you specify which paths you want to pre-render.
```js
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
```
## Server-side Rendering
>  "SSR" or "Dynamic Rendering".

The page HTML is generated on each request.

 Export an async function called `getServerSideProps`. This function will be called by the server on every request.
 
```js
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page
```
As you can see, getServerSideProps is similar to getStaticProps, 
but the difference is that getServerSideProps is run on every request instead of on build time

