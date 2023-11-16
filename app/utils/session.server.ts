import { createCookieSessionStorage } from "@remix-run/node"

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '__session',
        secrets: [process.env.SESSION_SECRET || 'topsecret'],
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30 // 30 days
    }
})

export {sessionStorage}