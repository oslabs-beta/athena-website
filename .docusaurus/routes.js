import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/athena-website/markdown-page',
    component: ComponentCreator('/athena-website/markdown-page', 'ced'),
    exact: true
  },
  {
    path: '/athena-website/docs',
    component: ComponentCreator('/athena-website/docs', '4ae'),
    routes: [
      {
        path: '/athena-website/docs/category/building--editing-components',
        component: ComponentCreator('/athena-website/docs/category/building--editing-components', '6eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Edit Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Edit Components', '44c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Mock HTTP Requests',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Mock HTTP Requests', '6af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Rendering Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Rendering Components', '853'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Styling Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Styling Components', 'f16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Upload Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Upload Components', 'f54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/intro',
        component: ComponentCreator('/athena-website/docs/intro', 'ffb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/Performance Data',
        component: ComponentCreator('/athena-website/docs/Performance Data', '7cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/Quickstart',
        component: ComponentCreator('/athena-website/docs/Quickstart', '236'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/Saving Components',
        component: ComponentCreator('/athena-website/docs/Saving Components', 'b3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/UI Whiteboard',
        component: ComponentCreator('/athena-website/docs/UI Whiteboard', '8d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/athena-website/',
    component: ComponentCreator('/athena-website/', '1dd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
