import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import ActionItem from './ActionItem';

import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function Action() {
    return (
        <div className={cx('wrapper')}>
            <ActionItem children="Khóa học của tôi" className={cx('my-learn')} />
            <ActionItem children={<FontAwesomeIcon icon={faBell} />} className={cx('icon-notify')} />
            <ActionItem
                children={
                    <img
                        src="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                        alt=""
                    />
                }
            />
        </div>
    );
}

export default Action;
