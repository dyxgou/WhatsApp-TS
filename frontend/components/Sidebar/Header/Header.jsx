import Avatar from "../../Avatar/Avatar"
import styles from "./Header.module.css"
import IconButton from "../../IconButton/IconButton"
import { DotsHorizontalIcon , ChatAlt2Icon , BellIcon } from "@heroicons/react/outline"

const Header = () =>
{
  return (
    <header className={styles.header}>
      <Avatar imageURL="https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?k=20&m=1257951336&s=612x612&w=0&h=KMMSYxYzjtqg7NAvNTO8ahMz84J7QW0FjvMSZ12Bq6I=" />

      <div className={styles.header__icons}>
        <IconButton Icon={BellIcon} />
        <IconButton Icon={ChatAlt2Icon} />
        <IconButton Icon={DotsHorizontalIcon} />
      </div>
    </header>
  )
}

export default Header
