import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import record from '../data/package_tourism.json'

export default function Info() {
  return (
    <>
      <Head>
        <title>Attractions</title>
        <meta name="description" content="Explore Indonesia" />
        <link rel="icon" href="/indo.png" />
      </Head>

      <main className={styles.infoMain}>
          <div style={{display:'flex', justifyContent:'center'}}>
            <h1 className={styles.h1Info}>Different Cities and Its Attractions</h1>
          </div>
            {
              record.map( (rec, index) => {
                return(
                  <div key={index}>

                  <div className={styles.infoCardCont}>

                    <div className={styles.infoCard}>
                    <div>
                      <p className={styles.cityP}>{rec.City}</p>
                    </div>

                    <div>
                      <Image src='/../public/indo.png' width={200} height={100}/>
                    </div>

                    <div>
                      <p className={styles.infoP}>{rec.Place_Tourism1}</p>
                    </div>

                    </div>
                  </div>
                  </div>

                )
              })
            }
          
      </main>

    </>
  )
}