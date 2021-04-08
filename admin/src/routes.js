import React from 'react';

const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const Hero = React.lazy(() => import('./views/pages/landing/Hero'));
// const News = React.lazy(() => import('./views/landing/news'));
// const About = React.lazy(() => import('./views/landing/about'));
// const SingleLens = React.lazy(() => import('./views/landing/single_vision_lenses'));
// const LensInfo = React.lazy(() => import('./views/landing/lens_info'));
// const BifocalLens = React.lazy(() => import('./views/landing/bifocal_lens'));
// const Video = React.lazy(() => import('./views/landing/video'));
// const Logos = React.lazy(() => import('./views/landing/logos'));
// const Designs = React.lazy(() => import('./views/landing/designs'));
// const Feedbacks = React.lazy(() => import('./views/landing/feedbacks'));
// const ProductionInfo = React.lazy(() => import('./views/landing/production_info'));
// const TechnicalInfo = React.lazy(() => import('./views/landing/technical_info'));
// const Download = React.lazy(() => import('./views/landing/download'));
// const Contact = React.lazy(() => import('./views/landing/contact'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/landing/hero', name: 'Hero', component: Hero },
  
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
