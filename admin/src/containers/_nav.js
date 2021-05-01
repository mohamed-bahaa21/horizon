import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [{
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: < CIcon name = "cil-speedometer"
    customClasses = "c-sidebar-nav-icon" / >
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Landing Page Sections']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hero Section',
    to: '/landing/hero',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-0'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Latest News',
    to: '/news',
    icon: 'cil-notes',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'About Us',
    to: '/about',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-3'
  },








  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Designs 1/3',
    to: '/landing/lens-designs-1',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Info 1/3',
    to: '/landing/lens-info-1',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Designs 2/3',
    to: '/landing/lens-designs-2',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Info 2/3',
    to: '/landing/lens-info-2',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Designs 3/3',
    to: '/landing/lens-designs-3',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-3'
  },






  {
    _tag: 'CSidebarNavItem',
    name: 'Watch Video',
    to: '/landing/watch-video',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Screen Shots',
    to: '/landing/screen-shots',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Production Info',
    to: '/landing/production-info',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Technical Info',
    to: '/landing/technical-info',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logos',
    icon: 'cil-ban',
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contact Us',
    icon: 'cil-ban',
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Map',
    icon: 'cil-ban',
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-3'
  },




  {
    _tag: 'CSidebarNavItem',
    name: 'Footer',
    icon: 'cil-ban',
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-3'
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
    name: 'Gallery',
    to: '/gallery',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
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
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },



  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components for Dashboard']
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
  }
]

export default _nav
