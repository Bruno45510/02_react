import Card from './Card'
import styles from './App.module.css'
import Button from './Button'
import Ball from './Ball'

function App() {
  return (
    <>
      <h1 className={styles.title}>Willkommen</h1>
      <div className={styles.cardcontainer}>
        <Card title="Kaisekamp" text="made in China" img="https://i.kym-cdn.com/entries/icons/facebook/000/053/217/Goofy_Ahh_Pictures_cover.jpg" />
        <Card title="Virus" text="oh nein ich hab ein Virus" img="https://www.pzwei.at/wp-content/uploads/2023/05/The-Magic-Lodge-Jugendworkshop-Nico-rotated.jpg" />
        <Card title="Br Br Br Br Sahur" text="konnte mich nicht entschieden" img="https://uploads.dailydot.com/2025/04/tung-tung-tung-sahur-meme-9.png?q=65&auto=format&w=1200" />
        <Card title="1" text="äääääääähhhhh" img="https://picsum.photos/seed/picsum/200/300" />
        <Card title="52" text="äääääääähhh" img="https://picsum.photos/seed/picsum/200/300" />
        <Ball title="messi" texte="ronaldo" />
        <Ball title="Maradona" texte="Messi" />
        <Ball title="Falchinger" texte="Finkler" />
        <Ball title="messi" texte="ronaldo" />
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
