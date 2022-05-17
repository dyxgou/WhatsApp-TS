import styles from "./Avatar.module.css"
import defaultAvatar from "../../public/DefaultAvatar.png"

const Avatar = ({ imageURL = defaultAvatar.src }) =>
{
  return (
    <img src={imageURL} alt="Avatar" className={styles.avatar} />
  )
}

export default Avatar
