import styles from './Card.module.scss'

export default function Card(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            src={`https://cdn.artisant.io/api/files/630x819/${props.item.additional_photos[0].compressed}`}
            alt="card img"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.author}>
            <span>{props.item.created_by.display_name}</span>
            <p>{props.item.name}</p>
          </div>
          <div className={styles.name}>Digital Addiction Number Seven</div>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.available}>
          <p>available</p>
          <span>
            {props.item.quantity_available} of {props.item.quantity}
          </span>
        </div>
        <div className={styles.price}>
          <p>price</p>
          <span>{props.item.initial_price}</span>
        </div>
      </div>
    </div>
  )
}
