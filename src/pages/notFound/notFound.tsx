import styles from './notFound.module.scss';

function NotFound() {
  return (
    <div className={styles.container}><p className={styles.text}>Страница не найдена :(</p></div>
  )
}

export {NotFound}
