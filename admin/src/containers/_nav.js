import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Landing Page Sections']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hero',
    to: '/landing/hero',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Latest News',
    to: '/landing/news',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'About Us',
    to: '/landing/about',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Single Vision Lenses',
    to: '/landing/single_vision_lenses',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Info',
    to: '/landing/lens_info',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Bifocal Lenses',
    to: '/landing/bifocal_lens',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Watch Video',
    to: '/landing/video',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logos',
    to: '/landing/logos',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Design Screenshots',
    to: '/landing/designs',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Client Feedbacks',
    to: '/landing/feedbacks',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Production Info',
    to: '/landing/production_info',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Technical Info',
    to: '/landing/technical_info',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Download App',
    to: '/landing/download',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contact Us',
    to: '/landing/contact',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Map',
    to: '/landing/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Footer',
    to: '/base/forms',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components for Dashboard']
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Blog',
    icon: 'cil-ban',
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
