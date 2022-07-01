import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

interface Props {
  username: string
}

const TimeLine: NextPage<Props> = ({ username }) => {
  return (
    <>
      <h1>Time Line is {username}</h1>
      <p>Aqui van los tuits</p>
      <Link href="/" >
        <a className={styles.title}>Home</a>
      </Link>
    </>
  )
}
// Añade al servidor las props que va utilizar el componente
TimeLine.getInitialProps = () => {
  return { username: '@fabianmolinab' }
}

export default TimeLine
