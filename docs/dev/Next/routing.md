# Routing
## Introduction
Next.js has a file-system based router built on the concept of pages.

### index routing
The router will automatically route files named index to the root of the directory.
 - pages/index.js → /

### nested routes
The router supports nested files.
 - pages/blog/first-post.js → /blog/first-post

### Dynamic route segments
To match a dynamic segment, you can use the bracket syntax.
- pages/blog/[slug].js → /blog/:slug (/blog/hello-world)

### Linking between pages
The Next.js router allows you to do client-side route transitions between pages, similar to a single-page application.
```js
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}
export default Home
```

### Linking to dynamic paths
```js
{posts.map((post) => (
  <li key={post.id}>
    <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
      <a>{post.title}</a>
    </Link>
  </li>
))}
```

## Dynamic Routes
add brackets to a page ([param]) to create a dynamic route

Consider the following page pages/post/[pid].js:

```js
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

For example, the route `/post/abc` will have the following query object: `{ "pid": "abc" }`

Similarly, the route `/post/abc?foo=bar` will have the following query object: `{ "foo": "bar", "pid": "abc" }`

Multiple dynamic route segments work the same way. The page `pages/post/[pid]/[comment].js` will match 
the route /post/abc/a-comment and its query object will be: `{ "pid": "abc", "comment": "a-comment" }`

### Catch all routes
Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. 

For example: `pages/post/[...slug].js` matches `/post/a`, but also `/post/a/b`, `/post/a/b/c` and so on. => { "slug": ["a", "b"] }

### Optional catch
`pages/post/[[...slug]].js` will match `/post`, `/post/a`, `/post/a/b`, and so on

## Imperatively
The following example shows how to do basic page navigations with useRouter:
```js
import { useRouter } from 'next/router'

export default function ReadMore() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/about')}>
      Click here to read more
    </button>
  )
}
```

## Shallow Routing
Shallow routing allows you to change the URL without running data fetching methods again

You'll receive the updated pathname and the query via the router object (added by useRouter or withRouter), without losing state.

To enable shallow routing, set the shallow option to true

```js
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Current URL is '/'
function Page() {
  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])
}
export default Page
```




