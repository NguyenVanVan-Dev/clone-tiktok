import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import image from '~/asset/image';
const cx = classNames.bind(style);

function Header() {
    const [clear, setClear] = useState(false);
    const [inputSearch, setinputSearch] = useState('');
    const searchRef = useRef();
    const handleInputSearch = (e) => {
        setinputSearch(e.target.value);
    };
    const clearForm = () => {
        setinputSearch('');
        searchRef.current.focus();
    };
    console.log(image);
    useEffect(() => {
        if (inputSearch !== '') {
            setClear(true);
        } else {
            setClear(false);
        }
    }, [inputSearch]);
    return (
        <header className={cx('header')}>
            <div className={cx(['header__wrapper'], 'container')}>
                <div className={cx('header__logo')}>
                    <Link to={'/'}>
                        <img src={image.logo} alt="logo"></img>
                    </Link>
                </div>
                <div className={cx('header__search')}>
                    <div className={cx('header__search-form')}>
                        <input
                            type="text"
                            ref={searchRef}
                            value={inputSearch}
                            onChange={handleInputSearch}
                            className={cx('header__search-input')}
                            placeholder="Tìm kiếm tài khoản và video"
                        ></input>
                        <button
                            onClick={clearForm}
                            className={cx(['header__search-clear-form'], clear ? '' : 'hidden')}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx(['header__spinner-button'], 'btn')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx(['header__search-button'], 'btn')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                        </button>

                        {/*  Loading... */}
                    </div>
                </div>
                <div className={cx('header__action')}>
                    <div className={cx('header__action-upload')}>
                        <button className={cx(['header__upload-btn'], 'btn')}> + Tải lên </button>
                    </div>
                    <div className={cx(['header__action-group'], 'hidden')}>
                        <div className={cx('header__action-messenger')}>
                            <span> Send</span>
                        </div>
                        <div className={cx('header__action-mailbox')}>
                            <span> thư</span>
                        </div>
                        <div className={cx('header__action-account')}>
                            <span> Account</span>
                        </div>
                    </div>
                    <div className={cx(['header__action-group'])}>
                        <div className={cx('header__action-login')}>
                            <button> Đăng Nhập</button>
                        </div>
                        <div className={cx('header__action-menu')}>
                            <span> +</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
