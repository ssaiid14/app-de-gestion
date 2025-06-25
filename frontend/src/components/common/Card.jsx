const Card = ({ children, className = '', padding = 'p-6', ...props }) => {
  const classes = `
    bg-white rounded-lg shadow-sm border border-gray-200
    ${padding}
    ${className}
  `.trim()

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  )
}

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent

export default Card