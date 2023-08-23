import * as cookie from 'cookie'

export default async function ProtectedPageRoute(
  context,
  redirectTo, // string route where user will be redirected if they are not authenticated
  getProps, // function to fetch initial props
) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    let userIsAuthenticated;
    userIsAuthenticated = true // TODO: check if user is authenticated

  if (!userIsAuthenticated) {
    return {
      redirect: {
        destination: redirectTo ?? '/login',
        permanent: false,
      }
    }
  }

  if (getProps) {
    return {
      props: getProps(),
    }
  }

  return {
    props: {},
  }
}
