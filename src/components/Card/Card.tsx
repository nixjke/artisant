import React from 'react'
import styles from './Card.module.scss'
import card from './card.png'

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={card} alt="card img" />
        </div>
        <div className={styles.content}>
          <div className={styles.author}>
            <span>created by</span>
            <p>Alexander Kurmanin</p>
          </div>
          <div className={styles.name}>Digital Addiction Number Seven</div>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.available}>
          <p>available</p>
          <span>1 of 50</span>
        </div>
        <div className={styles.price}>
          <p>price</p>
          <span>0.07 ETH</span>
        </div>
      </div>
    </div>
  )
}
