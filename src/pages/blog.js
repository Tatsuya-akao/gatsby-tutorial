import React from "react"
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page.</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ratione maxime temporibus nostrum, natus blanditiis dolorem sunt tenetur velit adipisci delectus veritatis vitae reprehenderit fugiat!</p>
      </div>
    </Layout>
  )
}

export default blog
