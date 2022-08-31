# SSR: Server-side rendering

`getServerSideProps` only runs on server-side and never runs on the browser.
It returns JSON which will be used to render the page.
`getServerSideProps` can only be exported from a page. You can’t export it from non-page files.

## Usage
only if you need to render a page whose data must be fetched at request time

> If you do not need to render the data during the request, then you should consider fetching data on the client side 
> or getStaticProps
