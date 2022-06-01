import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout, OnlyHeader } from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        switch (route.layout) {
                            case 'null':
                                return <Route key={route.path} path={route.path} element={<Page />}></Route>;
                            case 'onlyHeader':
                                return (
                                    <Route key={route.path} path="/" element={<OnlyHeader />}>
                                        <Route path={route.path} element={<Page />}></Route>;
                                    </Route>
                                );
                            default:
                                return (
                                    <Route key={route.path} path="/" element={<DefaultLayout />}>
                                        <Route path={route.path} element={<Page />}></Route>;
                                    </Route>
                                );
                        }
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
