import styles from "./Header.module.css"
import Avatar from "../../Avatar/Avatar"
import IconButton from "../../IconButton/IconButton"
import { DotsVerticalIcon , SearchIcon } from "@heroicons/react/outline"

const Header = ({ avatar , username }) =>
{
  return (
    <header className={styles.header}>
      <div className={styles.header__user}>
        <Avatar imageURL={avatar} />
        <span>{username}</span>
      </div>

      <section className={styles.header__icons}>
        <IconButton Icon={SearchIcon} />
        <IconButton Icon={DotsVerticalIcon} />
      </section>
    </header>
  )
}

export default Header
