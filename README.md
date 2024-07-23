# Project Test Company

## Project Information

**Company Name** : DesktopIP

**Project Url** : [arif-desktop-ip.vercel.app](https://arif-desktop-ip.vercel.app/)

**Credential for dummy login** : username (admin) and password (admin)

## Other Information

-   Login status stored in local storage under the name is `session-login`.
-   Login only affects the state of the top right button on the `home page` navbar. If you have logged in, a `Sign Out` button will appear, but if you have not logged in, a `Sign In` button will appear.
-   Additionally, once you log in, the login page cannot be accessed before logging out
-   The channelName data is obtained by applying `SSR` to the file `app/layout.tsx`
-   all movie data is obtained by implementing `CSR` on the file `app/(pages)/home/page.tsx`
