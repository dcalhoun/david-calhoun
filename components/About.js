import React from 'react'
import connectStyles from 'styletron-connect'

const About = ({ styles }) => {
  return (
    <section className={styles.wrap}>
      <p className={styles.title}>
        Software engineer <br className={styles.break} />
        specializing in UX design <br className={styles.break} />
        & front-end architecture.
      </p>
      <p className={styles.subTitle}>
        Currently at <a className={styles.anchor} href='https://www.gonoodle.com'>GoNoodle</a>. <br className={styles.breakXS} />
        Based in Nashville, TN.
      </p>
    </section>
  )
}

export default connectStyles(About, {
  wrap: {
    marginBottom: '4rem'
  },
  title: {
    color: '#555',
    fontFamily: 'Avenir Next, serif',
    fontSize: '1.5rem',
    lineHeight: 1.25,
    margin: 0,
    '@media (min-width: 32rem)': {
      fontSize: '2.75rem'
    },
    '@media (min-width: 48rem)': {
      fontSize: '3.75rem'
    }
  },
  subTitle: {
    color: '#555',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 700,
    marginBottom: 0
  },
  anchor: {
    color: '#555',
  },
  break: {
    display: 'none',
    '@media (min-width: 40rem)': {
      display: 'block'
    }
  },
  breakXS: {
    '@media (min-width: 40rem)': {
      display: 'none'
    }
  }
})
