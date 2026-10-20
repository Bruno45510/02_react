import Card from './Card'
import styles from './App.module.css'
import Button from './Button'
import Ball from './Ball'

function App() {
  const imageUrl: string = "https://picsum.photos/200/300";
  const image: String = "https://picsum.photos/200/300/?blur"
  return (
    <>
      <h1 className={styles.title}>Willkommen</h1>
      <div className={styles.cardcontainer}>
        <Card title="Susie" text="made in China" img={imageUrl} />
        <Card title="Hans" text="super duper" img={imageUrl} />
        <Card title="Peter" text="Parkhaus" img={imageUrl} />
        <Card title="Jörgen" text="würgen" img={imageUrl} />
        <Card title="Gunter" text="Antarktis" img={imageUrl} />
        <Ball title="messi" texte="ronaldo" />
        <Ball title="Haaland" texte="rot" />
        <Ball title="Falsch" texte="Richtig" />
        <Ball title="messi" texte="ronaldo" />
      </div>
      <div>
        <Button img={image} />
        <Button img={image} />
        <Button img={image} />
      </div>

    </>
  )
}

export default App
