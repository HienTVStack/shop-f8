import classNames from 'classnames/bind';

import styles from './MyCourseItem.module.scss';

const cx = classNames.bind(styles);

function MyCourseItem({ src, title, sub }) {
    return (
        <div className={cx('wrapper')}>
            <img src={src} alt="" />
            <div className={cx('content')}>
                <h4 className={cx('title')}>{title}</h4>
                <span className={cx('sub')}></span>
                <div className={cx('vertical-progress-bar')}></div>
            </div>
        </div>
    );
}

export default MyCourseItem;
