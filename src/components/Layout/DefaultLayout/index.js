import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/Layout/ReuseComponent/Header';
import Sidebar from '~/components/Layout/ReuseComponent/Sidebar';
function DefaultLayout() {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
