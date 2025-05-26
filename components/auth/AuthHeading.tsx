interface AuthHeadingProps {
    title: string
    subtitle: string
  }
  
  export const AuthHeading = ({ title, subtitle }: AuthHeadingProps) => {
    return (
      <div className="text-center space-y-1">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    )
  }