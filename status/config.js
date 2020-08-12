// 配置
window.Config = {

  // 站点名
  SiteName: 'smyhw服务网络监测',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur996435-aa24b84daf8646f771c662b0',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '另一监测页面',
      url: 'https://status.smyhw.online/'
    },
    {
      text: 'Minecraft皮肤站',
      url: 'https://mcskin.smyhw.online:8080/'
    },
    {
      text: '论坛',
      url: 'https://bbs.smyhw.online:8080/'
    },
    {
      text: '博客',
      url: 'https://hanhz.smyhw.online:8080/'
    },
    {
      text: 'smyhw_github',
      url: 'https://github.com/smyhw/'
    },
    {
      text: '该页面github项目',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
