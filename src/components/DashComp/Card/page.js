import React from 'react'
import css from './card.module.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className={css.CardContainer}>
        <div className={css.card}>
            <Image
            className={css.unLogo} 
            src={'/assets/img/Group 45.png'}
            width={71}
            height={62}
            alt='img'
            />
            <Image
            className={css.setLogo} 
            src={'/assets/img/clog1.png'}
            width={71}
            height={62}
            alt='img'
            />
            <div className={css.text}>
                <p>Total Views</p>
                <p2>408.024</p2>
            </div>
            <div className={css.bottom}>
                <div className={css.line}></div>
                <p>Start From 00 Jan 2023</p>
            </div>
        </div>
        <div className={css.card}>
            <Image
            className={css.unLogo} 
            src={'/assets/img/clog2.png'}
            width={71}
            height={62}
            alt='img'
            />
            <Image
            className={css.setLogo} 
            src={'/assets/img/Group 47.png'}
            width={71}
            height={62}
            alt='img'
            />
            <div className={css.text}>
                <p>Total Penyiraman</p>
                <p2>37x</p2>
            </div>
            <div className={css.bottom}>
                <div className={css.line}></div>
                <p>Hari ini</p>
            </div>
        </div>
        <div className={css.card}>
            <Image
            className={css.unLogo} 
            src={'/assets/img/clog2.png'}
            width={71}
            height={62}
            alt='img'
            />
            <Image
            className={css.setLogo} 
            src={'/assets/img/Group 47.png'}
            width={71}
            height={62}
            alt='img'
            />
            <div className={css.text}>
                <p>Total Penyiraman</p>
                <p2>108x</p2>
            </div>
            <div className={css.bottom}>
                <div className={css.line}></div>
                <p>Minggu ini</p>
            </div>
        </div>
        <div className={css.card}>
            <Image
            className={css.unLogo} 
            src={'/assets/img/clog2.png'}
            width={71}
            height={62}
            alt='img'
            />
            <Image
            className={css.setLogo} 
            src={'/assets/img/Group 47.png'}
            width={71}
            height={62}
            alt='img'
            />
            <div className={css.text}>
                <p>Total Penyiraman</p>
                <p2>407x</p2>
            </div>
            <div className={css.bottom}>
                <div className={css.line}></div>
                <p>Bulan ini</p>
            </div>
        </div>
    </div>
  )
}
