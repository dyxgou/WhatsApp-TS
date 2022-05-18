import Body from "./Body/Body"
import styles from "./Chat.module.css"
import Header from "./Header/Header"
import Input from "./Input/Input"

const Chat = () =>
{
  return (
    <main className={styles.chat}>
      {/* Header */}
      <Header username="Diego" />
      {/* Chat Body */}
      <Body />
      {/* Chat Input */}
      <Input />
    </main>
  )
}

export default Chat
