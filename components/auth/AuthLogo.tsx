import Image from 'next/image'
import logo from '@/public/logo.png'
export const AuthLogo = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={logo}
        alt="Logo"
        width={64}
        height={100}
        className="max-h-16"
      />
    </div>
  )
}