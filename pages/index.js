import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(){

  return(
    <div>


    <main className={styles.main}>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h1 className={styles.h1Home}>EXPLORE INDONESIA</h1>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex',height:'50vh', width:'60vw', backgroundColor:'#3A5A40', borderRadius: 30, marginBottom:10, paddingLeft: 10, paddingRight:10}}>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <p className={styles.homeP}>Indonesia is a Southeast Asian country comprised of more than 17,000 islands, with a population of over 270 million people. 
            The country's capital is Jakarta, and it has a diverse culture, language, and religion. 
            Indonesia's economy is largely based on agriculture, mining, and tourism. 
            The country is home to various natural attractions, including beaches, mountains, and rainforests, as well as numerous traditional 
            arts and crafts. Indonesia has a rich history and has been influenced by various cultures, including Indian, Chinese, and European. 
            </p>
            </div>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>
        <h2 style={{fontFamily:'Montserrat', color:'#A3B18A'}}>Explore the different cities</h2>
      </div>

      <div className={styles.buttonCont}>
        <Link href="../info">
        <button className={styles.button}>Check It Out!</button>
        </Link>

      </div>

    </main>

    </div>
  )
}
