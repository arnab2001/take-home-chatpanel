'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthCard } from '@/components/auth/AuthCard'
import { AuthLogo } from '@/components/auth/AuthLogo'
import { AuthHeading } from '@/components/auth/AuthHeading'
import { AuthInput } from '@/components/auth/AuthInput'
import { AuthActions } from '@/components/auth/AuthActions'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F6F8] font-[var(--font-geist-sans)]">
      <AuthCard>
        <AuthLogo />
        <AuthHeading 
          title="Welcome back"
          subtitle="Please enter your details to sign in"
        />
        {error && (
          <div className="text-red-500 text-sm text-center mb-4">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <AuthInput
            id="email"
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <AuthInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <AuthActions isLoading={isLoading} />
        </form>
      </AuthCard>
    </main>
  )
} 