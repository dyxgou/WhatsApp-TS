import styles from "../styles/Auth.module.css"
import useInput from "../hooks/useInput"
import Head from "next/head"

const Login = () =>
{
  const email = useInput({ placeholder: "Introduce tu Email", type: "email" })
  const password = useInput({ placeholder: "Introduce tu Contraseña" , type: "password" })
  const isCompletedInputs = email.value && password.value

  return (
    <div className={styles.auth}>
      <Head>
        <title>Login</title>
      </Head>
      <main className={styles.auth__card}>
        <div className={styles.auth__title}>
          <h1>WhatsApp</h1>
        </div>
        <form className={styles.auth__form}>
          <h2 className={styles.auth__titleInput}>Email</h2>
          <input {...email} />
          <h2 className={styles.auth__titleInput}>Contraseña</h2>
          <input {...password} />
          <button
            className={
              isCompletedInputs ? styles.auth__buttonEnable : styles.auth__buttonDisenable
            }
            disabled={!isCompletedInputs} onClick={(e) => {
              console.log("Logueado")
            }}
          >
            Login
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login
