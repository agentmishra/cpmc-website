import React from 'react';
import styles from './EventsPage.module.css';
import classes from '../LandingSlide/LandingSlide.module.css';
import e1 from '../assets/Event1.png';
import Image from 'next/image';
import Link from 'next/link';

const EventsPage = () => {
  return (
    <>
      <div className={styles.event_section}>
        <div className={styles.event}>
          <div className={styles.blue_box}></div>
          <div className={styles.content_container}>
            <div className={styles.content}>
              <h1 className={styles.name}>
                CODING <span className={styles.red}>COMPETION</span>
              </h1>
              <p className={styles.desc}>
                Programming Competition, for students and professionals of DYPCOE Akurdi, Pune.
              </p>
              <p className={styles.date}>
                DATE - <span className={styles.blue}>5/June/2022</span>
              </p>
              <p className={styles.imp}>
                First you have to{' '}
                <span className={styles.link}>
                  <Link href="/joinus">REGISTER HERE</Link>
                </span>
              </p>
              <Link href="/">
                <button className={classes.btn} style={{ margin: '0' }}>
                  <span className={classes.span}>CONTEST LINK</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Link>
            </div>
            <div className={styles.xyz}>
              <Image src={e1} width={250} height={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;