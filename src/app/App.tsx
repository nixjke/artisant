import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProducts } from '../store/slices/productSlice'
import styles from './App.module.scss'
import Card from '../components/Card/Card'

function App() {
  const dispath = useAppDispatch()
  const items = useAppSelector(state => state.products)

  React.useEffect(() => {
    dispath(fetchProducts())
  }, [])

  return (
    <div className={styles.container}>
      <section className={styles.text}>
        <h1>Explore</h1>
        <p>Buy and sell digital fashion NFT art</p>
      </section>
      <main className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  )
}

export default App
