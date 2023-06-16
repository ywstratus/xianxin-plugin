<h2 align="left">写在前面</h2>
<p>此分支为受Miao-Yunzai（<a href="https://gitee.com/yoimiya-kokomi/Miao-Yunzai">Gitee</a> | <a href="https://github.com/yoimiya-kokomi/Miao-Yunzai">Github</a>）支持的xianxin插件（<a href="https://gitee.com/masuzuillust/xianxin-plugin">Gitee</a> | <a href="https://github.com/ywstratus/xianxin-plugin">Github</a>），并且同时支持原版Yunzai。源分支等待PR中（原仓库没人管了，可能永远等不上了罢（悲））</p>


## 关于B站推送Cookie失效导致失败的问题

叔叔的风控升级，插件目前已支持临时cookie的自动获取，但推送时依然有可能出现-352错误，若频繁触发该错误，请改用自己的cookie。

目前插件已支持配置自定义Cookie，请在`/config/bilibili.set.yaml`下的`customCookie`字段添加本地浏览器登录b站后获取到的cookie。

cookie的获取与设置：

1. 在浏览器中登录自己的b站账号
2. 处于bilibili首页 -> 在网页空白处右键 -> 检查（即打开开发工具） -> 找到调试台 -> 在下方输入`document.cookie`并回车 -> 复制给到的文本
3. 将给到的文本粘贴到`/config/bilibili.set.yaml`下的`customCookie`处，保存即可

注意：cookie不带冒号


```base
// customCookie举例，实际cookie并不长这样
customCookie: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0
```

如果没有`customCookie`，复制上方文本到`/config/bilibili.set.yaml`中，并替换后方的cookie后保存即可。



##  安装与更新

推荐使用 git 进行安装，以方便后续升级。在Miao-Yunzai根目录打开终端，运行如下命令进行安装。

Gitee

```base
git clone https://gitee.com/masuzuillust/xianxin-plugin.git ./plugins/xianxin-plugin/
```

Github

```base
git clone https://github.com/ywstratus/xianxin-plugin.git ./plugins/xianxin-plugin/
```

如需临时换源，请在xianxin-plugin目录下执行

```base
// Gitee源
git remote set-url origin https://gitee.com/masuzuillust/xianxin-plugin.git
// Github源
git remote set-url origin https://github.com/ywstratus/xianxin-plugin.git
```

换源后请执行更新

<p>以下为原README</p>



<p align="center">
  <a href="https://gitee.com/xianxincoder/xianxin-plugin">
    <img width="200" src="https://gitee.com/xianxincoder/xianxin-plugin/raw/master/resources/img/rank/top.png">
  </a>
</p>

<h1 align="center">xianxin-plugin</h1>

<div align="center">

是 <a href="https://gitee.com/Le-niao/Yunzai-Bot" target="_blank">Yunzai-Bot</a> 关于原神cos、B站推送、wiki查询和群战等功能的扩展插件

[![访问量](https://profile-counter.glitch.me/xianxin-plugin/count.svg)](https://gitee.com/xianxincoder/xianxin-plugin)


<img src="https://cdn.jsdelivr.net/gh/xianxincoder/xianxincoder/assets/github-contribution-grid-snake.svg">

</div>
<br />
<br />


## ✨ 功能

| 命令 | 🌰 |
| --- | --- |
| 米游社功能 | ` #cos 角色名 ` - 指定角色随机查看cos图片<br/>` #cos #cos1 #cos详情 ` - 查看米游社中cos榜<br/>` #攻略 xxx ` - 查询原神精选的玩家攻略内容<br/>` #wiki xxx ` - 查询原神wiki的内容<br/>` #cosdby #cosdby1 #cosdby详情 ` - 查看米游社中大别野cos榜<br/>` #同人 #同人1 #同人详情 ` - 查看米游社中同人榜<br/>` #热门话题 ` - 查看米游社中热聊话题 |
| B站功能 | ` #订阅up推送 UID #订阅up推送 直播 UID ` - 检测up的B站动态进行推送<br/>` #取消up推送 UID #取消up推送 直播 UID ` - 删除对应up的B站对应动态推送<br/>` #推送up列表 ` - 查看本群添加的up推送列表<br/>` #手动推送up ` - 手动触发定时推送任务<br/>` #搜索up xxx ` - 根据昵称在b站搜索up |
| 群战 | ` #加入群战 #群战信息 ` - 初始化群战信息<br/>` #战宝 ` - 战胜战宝获得双倍战力<br/>` 战@群友 #战@群友 ` - @一名群友进行群战<br/>` 狂战@群友 #狂战@群友 ` - 战狂(战斗次数最多)的专属技能<br/>` #逆天改命 ` - 战力最低的专属技能<br/>` #战榜 ` - 查看群战rank榜<br/>` #战狂榜 ` - 查看战斗次数排行榜<br/>` #摆烂榜 ` - 查看战力倒数排行榜 |
| 五子棋 | ` #五子棋 ` - 开局五子棋游戏<br/>` 落子+字母+数字 落子H8 ` - 五子棋落子<br/>` #弃子 ` - 五子棋认输 |
| 21点 | ` #21点 ` - 开局21点游戏<br/>` 叫牌 ` - 21点叫牌<br/>` 停牌 ` - 停止叫牌 |
| 给我点颜色看看 | ` #给我点颜色看看 ` - 开局给我点颜色看看游戏<br/>` 块+数字 ` - 选中某个不同的色块 |
| 闲心小工具 | ` #赞我 ` - QQ名片点赞<br/>` 神秘指令 ` - 情绪激动时易触发 |
| 云崽菜单辅助 | ` #任意功能 ` 如果不存在但是有类似的功能将会联想提示 |
| 其他指令 | ` #闲心插件版本 ` - 查看最近维护的版本信息<br/>` #闲心插件更新 ` - 进行更新闲心插件<br/>` #闲心插件强制更新 ` - 进行强制更新闲心插件 |


## 🖥 依赖

- [Yunzai-Bot v3](https://gitee.com/Le-niao/Yunzai-Bot)

## 📦 安装与更新

推荐使用 git 进行安装，以方便后续升级。在[Yunzai-Bot](https://gitee.com/Le-niao/Yunzai-Bot)根目录打开终端，运行如下命令进行安装。

```base
git clone https://gitee.com/xianxincoder/xianxin-plugin.git ./plugins/xianxin-plugin/
```

## ⌨️ todo
- [ ] 群战迭代功能
- [ ] 神秘指令增加限制次数配置
- [ ] wiki样式的优化
- [ ] 群管优化(撤@群友不针对消息)
- [ ] 21点小游戏中的A动态计算作为1点或者11点


## 🌈 其他
- 素材来源于网络，仅供交流学习使用
- 严禁用于任何商业用途和非法行为
- 如果对你有帮助辛苦给个star，这是对我最大的鼓励
- xianxin-plugin QQ群：426961091 进群问题答案：woc


## 🔗 链接

- [云崽](https://gitee.com/Le-niao/Yunzai-Bot)
- [插件库](https://gitee.com/Hikari666/Yunzai-Bot-plugins-index)


## ❤️ 赞助者

- [爱发电](https://afdian.net/@xianxin)


| 昵称 | 金额 |
| --- | --- |
| Fei. | 33 |
| 林木森つ | 25 |
| 星辰之梦 | 6.6 |
| 唉嘿 | 5.2 |
| 萍| 5 |
| Lie| 15 |
| 妙娃种子不妙了| 5 |
| 遇到问题摆大烂| 5 |
| Gimme| 10 |
| 吃瓜群众| 20 |
| 长楠| 15 |
| Tears| 40 |
| [时雨🌌星空](https://gitee.com/TimeRainStarSky) | 5 |
| 夏-.-曙＆宙@象 | 10 |
| 枫叶霜华 | 10 |
| 抛物线 | 43 |
| 白熊 | 6.66 |
| 肆拾壹号糖水铺 | 5 |
| 啊这. | 6.66 |
| 漠漠轻寒 | 5 |
| 迷路的孩子 | 5 |
| 白无常啊(wdnmd) | 5 |
| Persistent.zw | 5.88 |
| 闪光Asuna | 5 |
| 墨水囊王 | 5 |
|   | 10 |
| Victoria. | 15 |
| 三十一. | 15 |
| 纪元 | 10 |
| 零食 | 10 |
| 落叶红尘君莫笑 | 73.5 |
| 不要欺负一一 | 10 |
| 小源 | 28.2 |
| AAA | 10 |
| 乐笙 | 30 |
| 爱发电用户_hQA7 | 5 |
| 爱发电用户_BTSu | 5 |
| 夜夜 | 5 |
| 瑞霖 | 28.2 |
| 逝灰 | 5 |
| 樱庭晴海 | 50 |
| 尘埃未定 | 5.21 |
| Gin | 30 |
| 枫木 | 5 |
| 萝莉分布 | 6.66 | 
| 提瓦特最伟大的占星术士 | 4 |
| 地球生物 | 15 |
| 无想无念 | 5.21 |
| 箐呓 | 1.88 |
| ccchizhao | 10 |
| ADonut | 28.2 |
| 拝淚 | 5 |
| 敷灬衍丷 | 10 |
| 米妖 | 5 |
| Aliceikkk | 5 |
| 傑 | 28.2 |
| 猫尾特调 | 10 |
| 内鬼 | 5 |
| •ᴥ• | 5 |
| 爱发电用户_FKAD | 5 |
| 巳雨 | 5 |
| 会飞的芒果猫 | 9.91 |
| 111222333 | 5 |
| 绝对不熬夜 | 65 |
| 希娜小姐 | 5 |
| 没有抱枕不开心 | 28.2 |
| 夜岚星茕 | 10 |
| 漾人心 | 5.21 |
| Starry | 10 |
| 雪梨很可爱 | 5 |
| 溯流光 | 10 |
| MC | 5 |
| o | 5 |
| 爱发电用户_E7yP | 5 |

 
