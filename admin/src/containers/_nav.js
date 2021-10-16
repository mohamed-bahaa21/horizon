import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Dashboard',
  //   to: '/dashboard',
  // addLinkClass: 'c-disabled',
  //   'disabled': true,
  //   icon: `< CIcon name="cil-speedometer"
  //     customClasses="c-sidebar-nav-icon" />`
  // },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Landing Page Sections']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hero Section',
    to: '/landing/hero',
    addLinkClass: 'c-disabled',
    'disabled': true,
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
    addLinkClass: 'c-disabled',
    'disabled': true,
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
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-3'
  },








  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Designs 1',
    to: '/landing/lens-designs-1',
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Info 1',
    to: '/landing/lens-info-1',
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Info 3',
    to: '/landing/lens-info-3',
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Designs 2',
    to: '/landing/lens-designs-2',
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Info 2',
    to: '/landing/lens-info-2',
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lens Designs 3',
    to: '/landing/lens-designs-3',
    addLinkClass: 'c-disabled',
    'disabled': true,
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
    addLinkClass: 'c-disabled',
    'disabled': true,
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
    addLinkClass: 'c-disabled',
    'disabled': true,
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
    addLinkClass: 'c-disabled',
    'disabled': true,
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
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Logos',
  //   icon: 'cil-ban',
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
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
    name: 'Online Ordering',
    icon: 'cil-ban',
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Map',
  //   icon: 'cil-ban',
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-3'
  },




  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Footer',
  //   icon: 'cil-ban',
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-3'
  // },














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
    addLinkClass: 'c-disabled',
    'disabled': true,
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Blog',
  //   icon: 'cil-ban',
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-1'
  },
]

export default _nav
