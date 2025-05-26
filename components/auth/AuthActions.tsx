import { DividerWithChip } from "@/hooks/DividerWithChip"
import { useState } from 'react'

interface AuthActionsProps {
  isLoading?: boolean
}

export const AuthActions = ({ isLoading = false }: AuthActionsProps) => {
  const [rememberMe, setRememberMe] = useState(false)

  const handleMagicLink = async () => {
    // TODO: Implement magic link sign in
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-[#34B757] focus:ring-[#34B757]"
          />
          <span className="text-xs text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-sm text-[#34B757] hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 rounded-lg bg-[#34B757] text-white font-medium hover:bg-[#2da14c] flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing in...
          </>
        ) : (
          'Sign in'
        )}
      </button>

      <DividerWithChip text="OR" />

      <button
        type="button"
        onClick={handleMagicLink}
        disabled={isLoading}
        className="border border-gray-300 h-11 w-full rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sign in with magic link
      </button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-[#34B757] hover:underline">
          Sign up
        </a>
      </p>
    </div>
  )
}