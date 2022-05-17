import styles from "./IconButton.module.css"

const IconButton = ({ Icon }) =>
{
  return (
    <div className={styles.icon__container}>
      {Icon && <Icon className={styles.icon} />}
    </div>
  )
}

export default IconButton
