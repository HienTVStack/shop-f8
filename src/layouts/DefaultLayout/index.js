import classNames from 'classnames/bind';

import Header from '~/layouts/Components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Header />
            </header>
            <div className={cx('container')}>
                <nav className={cx('navbar')}>NAVBAR</nav>
                <div className={cx('content')}>CONTENT</div>
            </div>
            <div className={cx('footer')}>FOOTER</div>
        </div>
    );
}

export default DefaultLayout;
