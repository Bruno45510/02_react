import Card from './Card'
import styles from './App.module.css'
import Button from './Button'
import Ball from './Ball'

function App() {
  return (
    <>
      <h1 className={styles.title}>Willkommen</h1>
      <div className={styles.cardcontainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Ball />
        <Ball />
        <Ball />
        <Ball />
      </div>
      <div>
        <Button />
        <Button />
        <Button />
      </div>

    </>
  )
}

export default App
