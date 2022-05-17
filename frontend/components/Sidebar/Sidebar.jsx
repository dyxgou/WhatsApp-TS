import User from "../User/User"
import Header from "./Header/Header"
import styles from "./Sidebar.module.css"

const Sidebar = () =>
{
  return (
    <div className={styles.sidebar}>
      {/* Header */}
      <Header />
      {/* Users */}
      <ul className={styles.sidebar__users}>
        <User name="Diego"/>
        <User name="Diego"/>
        <User name="Diego"/>
        <User name="Diego"/>
        <User name="Diego"/>
        <User name="Diego"/>
        <User name="Diego"/>
        <User name="Diego"/>
        <User name="Diego"/>
      </ul>
    </div>
  )
}

export default Sidebar
