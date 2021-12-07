import React from 'react';
import styles from './Header.module.css'
import headerImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Reactmeals</h1>
           <HeaderCartButton />
        </header>
        <div className={styles['main-image']}>
            <img src={headerImg} alt='A table filled with delicious food!'/>
        </div>
    </React.Fragment>
}

export default Header;