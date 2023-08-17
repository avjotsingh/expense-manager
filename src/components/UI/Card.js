import styles from './Card.module.css'

function Card(props) {
    let classes = `${styles.card}`
    if (props.className) classes += ` ${props.className}`

    return <div className={classes}>{props.children}</div>
}

export default Card;