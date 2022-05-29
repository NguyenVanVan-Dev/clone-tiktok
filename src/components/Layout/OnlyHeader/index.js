import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/Layout/ReuseComponent/Header';
function OnlyHeader() {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default OnlyHeader;
