module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '前端文章', items: [
        {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
      ]},
      {text: '学习笔记', items:[
        {text: '《Vue》笔记', link: '/note/vue/'},
        {text: '《Vue3》笔记', link: '/note/vue3/'},
        {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
        {text: '《Webpack》笔记', link: '/note/Webpack/'},
        {text: '《Vue-Cli》笔记', link: '/note/vuecli/'},
        {text: '小程序笔记', link: '/note/wx-miniprogram/'},
        {text: 'Socket.io', link: '/note/socketio/'},
      ]},
      {text: '学习详解', items:[
        {text: '《现代JavaScript》教程', link: '/note/break/'},
        {text: '《TypeScript》教程', link: '/note/typescript/'},
      ]}
    ]
  },
  {
    text: '前端知识点',
    link: '/interview/',
    items: [
      {text: '前端知识点', items: [
          {text: 'HTMLCSS', link: '/interview/html/'},
          {text: 'JavaScript', link: '/interview/js/'},
          {text: 'Vue', link: '/interview/vue/'},
          {text: 'TypeScript', link: '/interview/ts/'},
          {text: 'React', link: '/interview/react/'},
          {text: 'Node', link: '/interview/node/'},
          {text: '浏览器', link: '/interview/browser/'},
          {text: '前端相关', link: '/interview/frontend/'},
      ]},
    ],
  },
  {
    text: 'Node',
    link: '/node/',
    items: [
      {text: 'node 框架', items: [
          {text: 'Nest', link: '/node/nest/'},
          {text: 'NestBlogApi', link: '/node/nestBlogApi/'}
      ]},
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
      {text: 'Vue3资源', link: '/pages/vue-next/'},
      {text: 'React资源', link: '/pages/react-resources/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]
