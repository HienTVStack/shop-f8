import Blog from '~/pages/Blog';
import Course from '~/pages/Course';
import Home from '~/pages/Home';
import Learning from '~/pages/Learning';

import { routesConfig } from '~/config';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.learning, component: Learning },
    { path: routesConfig.courses, component: Course },
    { path: routesConfig.blog, component: Blog },
    { path: routesConfig.search, component: Search },
];

export default publicRoutes;
