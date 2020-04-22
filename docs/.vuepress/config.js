module.exports = {
  base: '/cms-guide/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'CSC Mod Server 服务器指南',
      description: '带上基友，畅游 Minecraft 世界',
    },
  },
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '最后编辑时间',
    // displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '加入QQ群', link: '/#' },
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/guide/server-profile.md', '/guide/basic-setting.md', '/guide/mod-content.md', '/guide/server-rules.md', '/guide/start-game.md'],
      },
      {
        title: '插件指南',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/plugin-guide/EssentialsX.md', '/plugin-guide/QuickShop.md', '/plugin-guide/Residence.md', '/plugin-guide/TitleX.md'],
      },
      {
        title: '模组指南',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['/mod-guide/xi_juest.md', 'xi_juest 的指南'],
          ['/mod-guide/Fm_cai_cai.md', 'Fm_cai_cai 的指南'],
        ],
      },
      {
        title: '捐赠',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/donate/donation-profile.md', '/donate/donation-channels.md', '/donate/donation-list.md'],
      },
    ],
  },
}
