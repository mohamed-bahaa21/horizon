import React from 'react';

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

import Dashboard from './views/dashboard/Dashboard';
import News from './views/pages/landing/News';

import Gallery from './views/Gallery/Gallery';
import MailingList from './views/mailing/MailingList';
import Charts from './views/charts/Charts';
import Widgets from './views/widgets/Widgets';
import Users from './views/users/Users';
import User from './views/users/User';

import Hero from './views/pages/landing/Hero';
import About from './views/pages/landing/About';

import LensDesigns1 from './views/pages/landing/LensDesigns1';
import LensInfo1 from './views/pages/landing/LensInfo1';
import LensInfo3 from './views/pages/landing/LensInfo3';
import LensDesigns2 from './views/pages/landing/LensDesigns2';
import LensInfo2 from './views/pages/landing/LensInfo2';
import LensDesigns3 from './views/pages/landing/LensDesigns3';

import WatchVideo from './views/pages/landing/WatchVideo';
import Screenshots from './views/pages/landing/Screenshots';

import ProductionInfo from './views/pages/landing/ProductionInfo';
import TechnicalInfo from './views/pages/landing/TechnicalInfo';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/about', exact: true, name: 'About Us', component: About },
  { path: '/news', exact: true, name: 'Latest News', component: News },

  { path: '/landing/hero', exact: true, name: 'Hero', component: Hero },
  { path: '/landing/lens-designs-1', exact: true, name: 'Lens Designs 1', component: LensDesigns1 },
  { path: '/landing/lens-info-1', exact: true, name: 'Lens Info 1', component: LensInfo1 },
  { path: '/landing/lens-info-3', exact: true, name: 'Lens Info 3', component: LensInfo3 },
  { path: '/landing/lens-designs-2', exact: true, name: 'Lens Designs 2', component: LensDesigns2 },
  { path: '/landing/lens-info-2', exact: true, name: 'Lens Info 2', component: LensInfo2 },
  { path: '/landing/lens-designs-3', exact: true, name: 'Lens Designs 3', component: LensDesigns3 },

  { path: '/landing/watch-video', exact: true, name: 'Watch Video', component: WatchVideo },
  { path: '/landing/screen-shots', exact: true, name: 'Screen Shots', component: Screenshots },

  { path: '/landing/production-info', exact: true, name: 'Production Info', component: ProductionInfo },
  { path: '/landing/technical-info', exact: true, name: 'Technical Info', component: TechnicalInfo },

  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/mailing-list', exact: true, name: 'Mailing List', component: MailingList },
  { path: '/charts', exact: true, name: 'Charts', component: Charts },
  { path: '/widgets', exact: true, name: 'Widgets', component: Widgets },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;

