import Avatar from "../Avatar/Avatar"
import styles from "./User.module.css"

const User = ({ avatar , name }) =>
{
  return (
    <li className={styles.user}>
      <Avatar imageURL={avatar} />

      <span>{name}</span>
    </li>
  )
}

export default User
