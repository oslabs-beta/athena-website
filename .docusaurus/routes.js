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
    path: '/athena-website/blog',
    component: ComponentCreator('/athena-website/blog', 'e84'),
    exact: true
  },
  {
    path: '/athena-website/blog/archive',
    component: ComponentCreator('/athena-website/blog/archive', 'c1a'),
    exact: true
  },
  {
    path: '/athena-website/blog/first-blog-post',
    component: ComponentCreator('/athena-website/blog/first-blog-post', '4c3'),
    exact: true
  },
  {
    path: '/athena-website/blog/long-blog-post',
    component: ComponentCreator('/athena-website/blog/long-blog-post', '9d5'),
    exact: true
  },
  {
    path: '/athena-website/blog/mdx-blog-post',
    component: ComponentCreator('/athena-website/blog/mdx-blog-post', 'ab5'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags',
    component: ComponentCreator('/athena-website/blog/tags', '4b9'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/docusaurus',
    component: ComponentCreator('/athena-website/blog/tags/docusaurus', '536'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/facebook',
    component: ComponentCreator('/athena-website/blog/tags/facebook', 'f18'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hello',
    component: ComponentCreator('/athena-website/blog/tags/hello', '540'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hola',
    component: ComponentCreator('/athena-website/blog/tags/hola', '666'),
    exact: true
  },
  {
    path: '/athena-website/blog/welcome',
    component: ComponentCreator('/athena-website/blog/welcome', '0bf'),
    exact: true
  },
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
