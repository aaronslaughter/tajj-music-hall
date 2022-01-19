export const BASE_URL = process.env.NODE_ENV === 'production' ? `${window.location.origin}/api` : 'http://localhost:3001/api'
export const BIT_URL = 'https://rest.bandsintown.com/'
export const AUTH_URL = process.env.NODE_ENV === 'production' ? `${window.location.origin}/auth` : 'http://localhost:3001/auth'