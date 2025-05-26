import { useState } from "react"

interface AuthInputProps {
  id: string
  label: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export const AuthInput = ({ 
  id, 
  label, 
  type = 'text',
  value,
  onChange,
  required = false
}: AuthInputProps) => {
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    setError(false)
  }

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        required={required}
        className={`h-11 w-full rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } px-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#34B757] focus:border-transparent transition-colors`}
        aria-invalid={error}
      />
    </div>
  )
}