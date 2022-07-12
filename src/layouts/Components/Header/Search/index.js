import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
import { routesConfig } from '~/config';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchValue('');
    };
    return (
        <div>
            <HeadlessTippy
                visible={false}
                interactive
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {/* search result start */}
                        <div className={cx('header')}>
                            <span className={cx('header-icon')}>
                                <FontAwesomeIcon icon={faSearch} />
                                {/* <FontAwesomeIcon icon={faSpinner} /> */}
                            </span>

                            <span className="header-title">
                                {!!searchResult ? 'Kết quả cho' : 'Không có kết quả cho'}{' '}
                                {!!searchValue && `'${searchValue}'`}
                            </span>
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('body-header')}>
                                <h3 className={cx('body-heading')}>Khóa học</h3>
                                <Link className={cx('body-link')} to={routesConfig.search}>
                                    Xem thêm
                                </Link>
                            </div>
                            <div className={cx('list')}>
                                <Link to={`${routesConfig.courses}/data`} className={cx('item')}>
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                                        alt=""
                                        width={32}
                                        height={32}
                                    />
                                    <h4>Xây dựng Website với ReatJS</h4>
                                </Link>
                                <Link to={`${routesConfig.courses}/data`} className={cx('item')}>
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                                        alt=""
                                        width={32}
                                        height={32}
                                    />
                                    <h4>Xây dựng Website với ReatJS</h4>
                                </Link>
                            </div>
                        </div>
                        {/* search result end */}
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <span className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        spellCheck={false}
                        placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                    />
                    <span className={cx('icon-clear')}>
                        {!!searchValue && <FontAwesomeIcon icon={faXmark} onClick={handleClear} />}
                    </span>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
