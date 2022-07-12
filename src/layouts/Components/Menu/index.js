import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, title, viewAll = false }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h4 className={cx('title')}>{title}</h4>
                {viewAll ? (
                    'Xem tất cả'
                ) : (
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                )}
            </div>
            <div className={cx('body')}></div>
        </div>
    );
}

export default Menu;
