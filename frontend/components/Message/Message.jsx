import styles from "./Message.module.css"

const Message = ({ content , userName , isAuthor }) =>
{
  return (
    <article
      className={`${styles.message} ${isAuthor ? styles.message__author : styles.message__friend}`}
    >
      <span className={styles.message__username}>{userName}</span>
      <span className={styles.message__content}>{content}</span>
    </article>
  )
}

export default Message
