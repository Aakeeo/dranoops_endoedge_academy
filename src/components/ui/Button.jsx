import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = 'btn'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent'
  }
  
  const sizes = {
    sm: 'btn-sm',
    default: '',
    lg: 'btn-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <motion.button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button