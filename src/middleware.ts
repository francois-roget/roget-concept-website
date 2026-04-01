import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

type Locale = 'en' | 'fr'

function getPreferredLocale(request: NextRequest): Locale {
	const acceptLanguage = request.headers.get('accept-language') ?? ''
	return acceptLanguage.toLowerCase().includes('fr') ? 'fr' : 'en'
}

function getLocaleFromPath(pathname: string): Locale {
	return pathname.startsWith('/fr') ? 'fr' : 'en'
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	// Redirect root to preferred locale
	if (pathname === '/') {
		const preferred = getPreferredLocale(request)
		return NextResponse.redirect(new URL(`/${preferred}`, request.url))
	}

	// Pass locale to server components via request header (for html lang attribute)
	const locale = getLocaleFromPath(pathname)
	const requestHeaders = new Headers(request.headers)
	requestHeaders.set('x-locale', locale)
	return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
