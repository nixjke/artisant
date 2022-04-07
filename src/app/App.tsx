import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProducts } from '../store/slices/productSlice'
import styles from './App.module.scss'
import Card from '../components/Card/Card'

function App() {
  const dispath = useAppDispatch()
  const items = useAppSelector(state => state.products.items)
  const [checked, setChecked] = React.useState(false)

  React.useEffect(() => {
    dispath(fetchProducts())
  }, [])

  const handleChange = () => {
    setChecked(!checked)
  }

  const filteredProducts = items.filter(item => item.additional_photos[0]?.compressed?.endsWith('.webp'))
  const availableProducts = filteredProducts.filter(item => item.quantity_available > 0)


  return (
    <div className={styles.container}>
      <section className={styles.text}>
        <h1>Explore</h1>
        <p>Buy and sell digital fashion NFT art</p>
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </section>
      <main className={styles.cards}>
        {(checked ? filteredProducts : availableProducts).map(item => (
          <Card key={item.product_id} item={item} />
        ))}
      </main>
    </div>
  )
}

export default App
