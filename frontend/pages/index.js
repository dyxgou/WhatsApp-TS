import Chat from "../components/Chat/Chat"
import Sidebar from "../components/Sidebar/Sidebar"
import styles from "../styles/Home.module.css"

const Home = () =>
{
  return (
    <div className={styles.home}>
      {/* Sidebar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  )
}

export default Home
