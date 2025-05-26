'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthCard } from '@/components/auth/AuthCard'
import { AuthLogo } from '@/components/auth/AuthLogo'
import { AuthHeading } from '@/components/auth/AuthHeading'

export default function VerifyEmailPage() {
  const [isResending, setIsResending] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)
  const supabase = createClientComponentClient()

  const handleResendEmail = async () => {
    setIsResending(true)
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: '', // You'll need to store this in localStorage or state management
      })
      if (error) throw error
      setResendSuccess(true)
    } catch (error) {
      console.error('Error resending email:', error)
    } finally {
      setIsResending(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F6F8] font-[var(--font-geist-sans)]">
      <AuthCard>
        <AuthLogo />
        <AuthHeading 
          title="Check your email"
          subtitle="We've sent you a verification link"
        />
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Please check your email and click the link to verify your account.
          </p>
          <button
            onClick={handleResendEmail}
            disabled={isResending || resendSuccess}
            className="text-[#34B757] hover:underline disabled:opacity-50"
          >
            {isResending ? 'Sending...' : resendSuccess ? 'Email sent!' : 'Resend email'}
          </button>
        </div>
      </AuthCard>
    </main>
  )
} 