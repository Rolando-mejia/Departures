import React from 'react';
import { useTime } from '../../../hooks/useTime';
import styles from './Header.module.css';
import logo from '../../../assets/logo-toncontin.png'



const Header = ({title}) => {

    const {time} = useTime();

  return (
    <header className={styles.header}>
        
        <div className={styles.logo}>
          <div className={styles.picture}>
            <img src={logo} />
          </div>
          <h2>{title}</h2>

        </div>
        <span>
            {time}
        </span>
    </header>
  )
}

export default Header