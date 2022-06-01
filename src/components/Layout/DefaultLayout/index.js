import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Header from '~/components/Layout/ReuseComponent/Header';
import Sidebar from '~/components/Layout/ReuseComponent/Sidebar';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx(['default__layout-wrapper'], 'container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
