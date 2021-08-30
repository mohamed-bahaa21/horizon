import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const News = React.lazy(() => import('./views/pages/landing/News'));

const Gallery = React.lazy(() => import('./views/Gallery/Gallery'));
const MailingList = React.lazy(() => import('./views/mailing/MailingList'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const Hero = React.lazy(() => import('./views/pages/landing/Hero'));
const About = React.lazy(() => import('./views/pages/landing/About'));

const LensDesigns1 = React.lazy(() => import('./views/pages/landing/LensDesigns1'));
const LensInfo1 = React.lazy(() => import('./views/pages/landing/LensInfo1'));
const LensInfo3 = React.lazy(() => import('./views/pages/landing/LensInfo3'));
const LensDesigns2 = React.lazy(() => import('./views/pages/landing/LensDesigns2'));
const LensInfo2 = React.lazy(() => import('./views/pages/landing/LensInfo2'));
const LensDesigns3 = React.lazy(() => import('./views/pages/landing/LensDesigns3'));

const WatchVideo = React.lazy(() => import('./views/pages/landing/WatchVideo'));
const Screenshots = React.lazy(() => import('./views/pages/landing/Screenshots'));

const ProductionInfo = React.lazy(() => import('./views/pages/landing/ProductionInfo'));
const TechnicalInfo = React.lazy(() => import('./views/pages/landing/TechnicalInfo'));

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

