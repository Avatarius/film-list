import styles from './loader.module.scss';

function Loader() {
  return (
    <div className={styles.container}><div className={styles.loader}></div></div>
  )
}


export {Loader};
