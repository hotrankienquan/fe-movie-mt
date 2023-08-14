nextjs

server side rendering, static side generation , client side rendering in app routing

ssr: static, prepare at build time , and after that data cached and not fetch again when routing
export const revalidate = 60 ; fetch new data after 60 seconds, when new user go to web

ssg: static, prepare at build time, do not revalidate

csr: fetch data on browser, fetch every once when refresh page, or click to access to page
