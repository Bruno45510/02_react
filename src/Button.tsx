import styles from './Button.module.css'

type Props = {}

export default function Button({ }: Props) {
    return (
        <div className={styles.button}>
            <img src="https://picsum.photos/200/300/?blur" alt="" />
        </div >
    )
}