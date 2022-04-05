import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProducts } from '../store/slices/productSlice'
import styles from './App.module.scss'

function App() {
  const dispath = useAppDispatch()
  const items = useAppSelector(state => state.products)
  console.log(items)

  React.useEffect(() => {
    dispath(fetchProducts())
  }, [])

  return (
    <div className={styles.container}>
      <section className={styles.text}>
        <h1>Explore</h1>
        <p>Buy and sell digital fashion NFT art</p>
      </section>
    </div>
  )
}

export default App
