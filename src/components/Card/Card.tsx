import styles from './Card.module.scss'

export default function Card(props: any) {
  console.log(props.items)
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            src="https://cdn.artisant.io/api/files/630x819/405_f1ec1f94-8006-452f-99ed-0729f7b65f8d.webp"
            alt="card img"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.author}>
            <span>{props.items.created_by.display_name}</span>
            <p>{props.items.name}</p>
          </div>
          <div className={styles.name}>Digital Addiction Number Seven</div>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.available}>
          <p>available</p>
          <span>
            {props.items.quantity_available} of {props.items.quantity}
          </span>
        </div>
        <div className={styles.price}>
          <p>price</p>
          <span>{props.items.initial_price}</span>
        </div>
      </div>
    </div>
  )
}
