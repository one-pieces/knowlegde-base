import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: 'One-Pieces',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '职业规划',
        link: '/career_planning/interview'
      },
      {
        text: '前端',
        link: '/frontend/js',
      },
      {
        text: '后端',
        link: '/backend/redis',
      },
      {
        text: 'Coding 算法',
        link: '/coding_algorithm/coding',
      },
    ],
    sidebar: {
      '/career_planning': [
        {
          text: '面试',
          link: '/career_planning/interview',
          children: [
            {
              text: '规划问题',
              link: '/career_planning/interview/规划问题.html'
            }
          ]
        }
      ],
      '/frontend': [
        {
          text: 'JS 基础',
          // collapsible: true,
          link: '/frontend/js',
        },
        {
          text: '工程化',
          link: '/frontend/engineering'
        },
        {
          text: 'React',
          link: '/frontend/react'
        },
        {
          text: 'Nodejs',
          link: '/frontend/nodejs',
          children: [
            {
              text: 'nodejs rpc远程调用',
              link: '/frontend/nodejs/nodejs rpc远程调用.html'
            }
          ]
        },
        {
          text: '编辑器',
          link: '/frontend/editor',
          // children: [
          //   {
          //     text: 'nodejs rpc远程调用',
          //     link: '/frontend/nodejs/nodejs rpc远程调用.html'
          //   }
          // ]
        },
      ],
      '/backend': [
        {
          text: 'Redis',
          link: '/backend/redis'
        },
        {
          text: 'MySQL',
          link: '/backend/mysql'
        },
      ],
      '/coding_algorithm': [
        {
          text: 'Coding',
          link: '/coding_algorithm/coding',
          children: [
            {
              text: '01-异步斐波那契数列',
              link: '/coding_algorithm/coding/01异步斐波那契数列.html'
            },
            {
              text: '02-并行实行任务类',
              link: '/coding_algorithm/coding/02并行实行任务类.html'
            },
            {
              text: '03-render渲染模板',
              link: '/coding_algorithm/coding/03render渲染模板.html'
            },
            {
              text: '04-Promise-all',
              link: '/coding_algorithm/coding/04Promise-all.html'
            },
          ]
        },
        {
          text: '算法',
          link: '/coding_algorithm/algorithm'
        },
        {
          text: 'Leetcode 算法',
          link: '/coding_algorithm/leetcode'
        },
      ]
    }
  }),
}