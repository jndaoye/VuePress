module.exports = {
    title: '倒爷日记',
    description: '开一间小店，贩卖美好',
    themeConfig: {
      logo: '/img/logo.png',
      nav: [
        { text: '帮助文档', link: '/guide/' },
        { text: 'GitHub', link: 'https://github.com/jndaoye/VuePress', target:'_blank' },
      ],
      sidebar: [
        {
          title: 'html',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: ['/guide/html/'],
        },
        {
          title: 'css',
          collapsable: true, // 可选的, 默认值是 true,
          children: ['/guide/css/'],
        }
      ]
    }
  }