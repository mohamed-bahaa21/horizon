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
const LensDesigns2 = React.lazy(() => import('./views/pages/landing/LensDesigns2'));
const LensInfo2 = React.lazy(() => import('./views/pages/landing/LensInfo2'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/about', name: 'About Us', component: About },
  { path: '/news', name: 'Latest News', component: News },

  { path: '/landing/hero', name: 'Hero', component: Hero },
  { path: '/landing/lens-designs-1', name: 'Lens Designs 1', component: LensDesigns1 },
  { path: '/landing/lens-info-1', name: 'Lens Info 1', component: LensInfo1 },
  { path: '/landing/lens-designs-2', name: 'Lens Designs 2', component: LensDesigns2 },
  { path: '/landing/lens-info-2', name: 'Lens Info 2', component: LensInfo2 },
  
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/mailing-list', exact: true,  name: 'Mailing List', component: MailingList },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;

