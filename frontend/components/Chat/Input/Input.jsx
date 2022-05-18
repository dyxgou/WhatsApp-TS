import IconButton from "../../IconButton/IconButton"
import styles from "./Input.module.css"
import { EmojiHappyIcon , ClipboardCheckIcon , MicrophoneIcon } from "@heroicons/react/outline"

const Input = () =>
{
  return (
    <footer className={styles.input__container}>
      <IconButton Icon={EmojiHappyIcon} />
      <IconButton Icon={ClipboardCheckIcon} />
      <input type="text" placeholder="Type your message..." />
      <IconButton Icon={MicrophoneIcon} />
    </footer>
  )
}

export default Input
