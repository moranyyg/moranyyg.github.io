import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'ApiStarter',
      briefIntroduction: '一款基于SpringBoot的Api服务器&基于Vue的后台管理系统 脚手架',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/background.html',
          type: 'primary',
        },
        {
          text: '查看源码',
          link: 'https://gitee.com/weixin54321a/ApiStarter',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'ApiStarter',
      desc: '一款基于SpringBoot的Api服务器&基于Vue的后台管理系统 脚手架,风格简洁,简单实用.',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '前后分离',
          content: '接口与页面分离,通过json交互数据,动静分离,项目解耦',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '基础封装',
          content: '通用的java服务器开发脚手架封装,无需繁琐环境搭建配置,clone即用,基础工具类封装,规范常用操作.',
        },
        {
          img: '/img/feature_service.png',
          title: '后台通用管理系统',
          content: '基于vue的后台管理系统,简单方便,无需再搭建后台管理系统框架,整体布局等冗余细节',
        },
        {
          img: '/img/feature_hogh.png',
          title: '通用权限管理',
          content: '项目对通用的角色资源权限做了抽象封装,无需花费额外精力即可实现基本的权限管理',
        },
        {
          img: '/img/feature_runtime.png',
          title: '模块化开发',
          content: '基于maven模块化开发,模块之间解耦,互不干扰',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '丰富的文档',
          content: '除了基本的项目使用文档,项目对涉及的技术栈都有一定的技术扩展,方便上手',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/background.html',
      },
    },
    users: {
      title: '',
      desc: <span />,
      list: [],
    },
  },
  'en-us': {
    brand: {
      brandName: 'ApiStarter',
      briefIntroduction: 'An API server based on spring boot & the scaffolding of the background management system based on Vue, simple and practical',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/background.html',
          type: 'primary',
        },
        {
          text: 'View Source',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'ApiStarter',
      desc: 'An API server based on spring boot & the scaffolding of the background management system based on Vue, simple and practical',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Separation before and after',
          content: 'Interface and page separation, data interaction through JSON, dynamic and static separation, project decoupling',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Basic packaging',
          content: 'The general java server development scaffold package, does not need the tedious environment to build the configuration, the clone is used, the basic tool class package, the standard commonly used operation',
        },
        {
          img: '/img/feature_service.png',
          title: 'Background general management system',
          content: 'The background management system based on Vue is simple and convenient. There is no need to build the background management system framework, overall layout and other redundant details',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'General authority management',
          content: 'The project encapsulates the general role resource permissions in an abstract way, and basic permission management can be realized without extra effort',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'Modular development',
          content: 'Based on Maven modular development, the modules are decoupled and do not interfere with each other',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'Rich documentation',
          content: 'In addition to the basic project use documents, the project has certain technical expansion for the technical stack involved, which is convenient to start',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/background.html',
      },
    },
    users: {
      title: '',
      desc: '',
      list: [],
    },
  },
};
