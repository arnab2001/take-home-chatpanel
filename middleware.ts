import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If there's no session and the user is trying to access a protected route
  if (!session && req.nextUrl.pathname.startsWith('/chat')) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/auth'
    return NextResponse.redirect(redirectUrl)
  }

  // If there's a session and the user is trying to access auth pages
  if (session && (
    req.nextUrl.pathname.startsWith('/auth') && 
    !req.nextUrl.pathname.startsWith('/auth/callback')
  )) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/chat'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ['/chat/:path*', '/auth/:path*'],
} 