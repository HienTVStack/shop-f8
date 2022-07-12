import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { routesConfig } from '~/config';
import Search from './Search';
import Button from '~/Components/Button';
import Action from './Action';

const cx = classNames.bind(styles);

function Header() {
    const currentLogin = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to={routesConfig.home} className={cx('logo-img')}>
                    <img src="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" />
                </Link>
                <Link to={routesConfig.home} className={cx('back')}>
                    <span className={cx('back-icon')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                    <h4 className={cx('back-title')}>Quay lại</h4>
                </Link>
            </div>
            <div className={cx('body')}>
                <Search />
            </div>
            <div className={cx('action')}>
                {currentLogin ? (
                    <Action />
                ) : (
                    <Button
                        href="https://accounts.fullstack.edu.vn/login?continue=https%3A%2F%2Ffullstack.edu.vn%2F"
                        className={cx('login-btn')}
                    >
                        Đăng nhập
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Header;
