import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Menu from '../../Menu';

function ActionItem({ children, className }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <HeadlessTippy
            interactive
            visible={showMenu}
            placement="bottom-start"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <Menu viewAll={true} />
                </div>
            )}
            onClickOutside={() => setShowMenu(false)}
        >
            <div className={className} onClick={() => setShowMenu(true)}>
                {children}
            </div>
        </HeadlessTippy>
    );
}

export default ActionItem;
