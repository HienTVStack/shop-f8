import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, className, ...passProps }) {
    let Component = 'button';
    const props = {
        onclick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default Button;
