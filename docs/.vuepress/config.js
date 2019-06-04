module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'assets/'
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  title: 'icetower',
  description: 'anglo`s blog',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/document.png' }]
  ],
  themeConfig: {
    repo: 'yanghcc/blog',
    docsDir: 'docs', // 假如文档不是放在仓库的根目录下：
    editLinks: true, // 默认是 false, 设置为 true 来启用
    // repoLabel: '查看源码',
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true, // 显示所有页面的标题链接
    // 添加导航栏
    nav: [
      { text: 'home', link: '/' },
      { text: 'summary', link: '/note/summary.html' },
      { text: 'about', link: '/about.html' },
      { text: 'blog', link: 'http://blog.icetower.cn' },
      { text: 'news', link: 'http://www.icetower.cn' },
      { text: 'music', link: 'http://music.icetower.cn/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'repo-blog', link: 'https://github.com/yanghcc/blog' },
          { text: 'github-star', link: 'https://github.com/yanghcc?tab=stars' },
        ]
      }
    ],
    sidebar: {
      '/note/': [
        {
          collapsable: false,
          title: '🚀 Getting started',
          children: [
            '',
            '/note/glob',
            '/note/reg',
            '/note/bit-opration',
            '/note/crypto',
            '/note/fragmentation',
            '/note/git',
            '/note/html',
            '/note/nginx',
            '/note/git',
            '/note/remind',
            '/note/md-sytax',
            '/note/reg',
            '/note/npm',
            '/note/optimization',
            '/note/todo',
            '/note/uuid',
            '/note/umd',
            '/note/watch',
            '/note/snippets',
            '/note/zepto-src',
          ]
        }
      ],
      '/sql/': [
        {
          collapsable: false,
          title: 'sql相关',
          children: [
            '',
            '/sql/problem',
            '/sql/mysql'
          ]
        }
      ],
      '/eslint/': [
        '',
        '/eslint/eslint-standar',
        '/eslint/eslint-use'
      ],
      '/collection/': [
        '',
        '/collection/youDontNeedJquery',
        '/collection/interview',
        '/collection/skill-tree'
      ],
      
    }
  }
}