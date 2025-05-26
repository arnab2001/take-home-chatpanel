import { ReactNode } from 'react'

interface AuthCardProps {
  children: ReactNode
}

export const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="w-[400px] bg-white rounded-xl shadow-lg py-8 px-8 space-y-6">
      {children}
    </div>
  )
}