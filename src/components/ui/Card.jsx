import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClasses = hover ? 'card-hover' : 'card'
  const classes = `${baseClasses} ${className}`
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card