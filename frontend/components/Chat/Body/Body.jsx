import styles from "./Body.module.css"
import WhtsBackground from "../../../public/WhatsAppBackground.jpg"
import Message from "../../Message/Message"

const Body = () =>
{
  return (
    <div
      className={styles.body}
      style={{
        backgroundImage: `url("${WhtsBackground.src}")`
      }}
    >
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
      <Message content="Hola" isAuthor userName="Diego" />
    </div>
  )
}

export default Body
