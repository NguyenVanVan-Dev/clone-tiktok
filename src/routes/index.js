import Following from '~/pages/Following';
import Home from '~/pages/Home';
import UploadVideo from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: 'following', component: Following },
    { path: 'upload', component: UploadVideo, layout: 'onlyHeader' },
    { path: 'search', component: Search, layout: 'null' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
