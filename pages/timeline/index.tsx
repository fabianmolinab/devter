import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

interface Props {
  userName: string
}

const TimeLine: NextPage<Props> = ({ userName }) => {
  return (
    <>
      <h1>Time Line is {userName}</h1>
      <p>Aqui van los tuits</p>
      <Link href="/" >
        <a className={styles.title}>Home</a>
      </Link>
    </>
  )
}

// Añade al servidor las props que va utilizar el componente
TimeLine.getInitialProps = async () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
}

export default TimeLine
