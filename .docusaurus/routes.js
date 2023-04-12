import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/athena-website/__docusaurus/debug',
    component: ComponentCreator('/athena-website/__docusaurus/debug', '422'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/config',
    component: ComponentCreator('/athena-website/__docusaurus/debug/config', '7ad'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/content',
    component: ComponentCreator('/athena-website/__docusaurus/debug/content', '86d'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/athena-website/__docusaurus/debug/globalData', '5d2'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/athena-website/__docusaurus/debug/metadata', 'b70'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/registry',
    component: ComponentCreator('/athena-website/__docusaurus/debug/registry', '286'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/routes',
    component: ComponentCreator('/athena-website/__docusaurus/debug/routes', 'c33'),
    exact: true
  },
  {
    path: '/athena-website/markdown-page',
    component: ComponentCreator('/athena-website/markdown-page', 'ced'),
    exact: true
  },
  {
    path: '/athena-website/docs',
    component: ComponentCreator('/athena-website/docs', '0a2'),
    routes: [
      {
        path: '/athena-website/docs/category/building--editing-components',
        component: ComponentCreator('/athena-website/docs/category/building--editing-components', '6eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/category/ui-mode',
        component: ComponentCreator('/athena-website/docs/category/ui-mode', '50a'),
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
        path: '/athena-website/docs/Quickstart',
        component: ComponentCreator('/athena-website/docs/Quickstart', '236'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/UI-mode/manage-docs-versions',
        component: ComponentCreator('/athena-website/docs/UI-mode/manage-docs-versions', '1c3'),
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
