(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"189f":function(e,t,i){var n=i("4179");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6265064c",n,!0,{sourceMap:!1,shadowMode:!1})},"1b5f":function(e,t,i){"use strict";i.r(t);var n=i("cb20"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"29b0":function(e,t,i){"use strict";var n=i("189f"),a=i.n(n);a.a},"2a79":function(e,t,i){"use strict";i.r(t);var n=i("8813"),a=i("1b5f");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("ae42");var o,c=i("f0c5"),m=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"9f3bf06e",null,!1,n["a"],o);t["default"]=m.exports},"35b1":function(e,t,i){"use strict";var n=i("4ea4");i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("f218")),r={name:"u-radio-group",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],computed:{parentData:function(){return[this.value,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass:function(){return this.bem("radio-group",["placement"])}},watch:{parentData:function(){this.children.length&&this.children.map((function(e){"function"===typeof e.init&&e.init()}))}},data:function(){return{}},created:function(){this.children=[]},methods:{unCheckedOther:function(e){this.children.map((function(t){e!==t&&(t.checked=!1)}));var t=e.name;this.$emit("input",t),this.$emit("change",t)}}};t.default=r},4179:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-wrap[data-v-7f9047d9]{height:calc(100vh);height:calc(100vh - var(--window-top));display:flex;flex-direction:column;background-color:#eee}.u-search-box[data-v-7f9047d9]{padding:%?18?% %?30?%}.u-menu-wrap[data-v-7f9047d9]{background-color:#eee;flex:1;display:flex;overflow:hidden}.u-search-inner[data-v-7f9047d9]{background-color:#eaeaea;border-radius:%?100?%;display:flex;align-items:center;padding:%?10?% %?16?%}.u-search-text[data-v-7f9047d9]{font-size:%?26?%;color:#000;margin-left:%?10?%}.u-tab-view[data-v-7f9047d9]{width:%?200?%;height:100%}.u-tab-item[data-v-7f9047d9]{height:%?110?%;background:#eaeaea;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-7f9047d9]{position:relative;color:#2979ff;font-size:%?30?%;font-weight:600;background:#eee}.u-tab-item-active[data-v-7f9047d9]::before{content:"";position:absolute;border-left:4px solid #2979ff;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-7f9047d9]{height:100%}.right-box[data-v-7f9047d9]{background-color:#fafafa}.page-view[data-v-7f9047d9]{padding:%?16?%}.class-item[data-v-7f9047d9]{margin-bottom:%?30?%;background-color:#fff;padding:%?16?%;border-radius:%?20?%}.class-item[data-v-7f9047d9]:last-child{min-height:100vh}.item-title[data-v-7f9047d9]{font-size:%?30?%;color:#000;font-weight:700;margin-left:%?31?%}.item-menu-name[data-v-7f9047d9]{font-weight:400;font-size:%?24?%;color:#aaa;margin-top:%?10?%}.item-container[data-v-7f9047d9]{display:flex;flex-wrap:wrap}.thumb-box[data-v-7f9047d9]{width:33.333333%;display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:%?20?%}.item-menu-image[data-v-7f9047d9]{width:%?120?%;height:%?120?%;border-radius:%?10?%}.u-radio-group--row[data-v-7f9047d9]{justify-content:space-between}',""]),e.exports=t},"58dd":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{ename:105,cname:"廉颇",title:"正义爆轰",hero_type:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"},{ename:106,cname:"小乔",title:"恋之微风",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"},{ename:107,cname:"赵云",title:"苍天翔龙",hero_type:1,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"},{ename:108,cname:"墨子",title:"和平守望",hero_type:2,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"},{ename:109,cname:"妲己",title:"魅力之狐",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"},{ename:110,cname:"嬴政",title:"王者独尊",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"},{ename:111,cname:"孙尚香",title:"千金重弩",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"},{ename:112,cname:"鲁班七号",title:"机关造物",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"},{ename:113,cname:"庄周",title:"逍遥梦幻",hero_type:6,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"},{ename:114,cname:"刘禅",title:"暴走机关",hero_type:6,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"},{ename:115,cname:"高渐离",title:"叛逆吟游",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"},{ename:116,cname:"阿轲",title:"信念之刃",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"},{ename:117,cname:"钟无艳",title:"野蛮之锤",hero_type:1,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"},{ename:118,cname:"孙膑",title:"逆流之时",hero_type:6,hero_type2:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"},{ename:119,cname:"扁鹊",title:"善恶怪医",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"},{ename:120,cname:"白起",title:"最终兵器",hero_type:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"},{ename:121,cname:"芈月",title:"永恒之月",hero_type:2,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"},{ename:123,cname:"吕布",title:"无双之魔",hero_type:1,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"},{ename:124,cname:"周瑜",title:"铁血都督",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"},{ename:126,cname:"夏侯惇",title:"不羁之风",hero_type:3,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"},{ename:127,cname:"甄姬",title:"洛神降临",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"},{ename:128,cname:"曹操",title:"鲜血枭雄",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"},{ename:129,cname:"典韦",title:"狂战士",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"},{ename:130,cname:"宫本武藏",title:"剑圣",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"},{ename:131,cname:"李白",title:"青莲剑仙",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"},{ename:132,cname:"马可波罗",title:"远游之枪",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"},{ename:133,cname:"狄仁杰",title:"断案大师",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"},{ename:134,cname:"达摩",title:"拳僧",hero_type:1,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"},{ename:135,cname:"项羽",title:"霸王",hero_type:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"},{ename:136,cname:"武则天",title:"女帝",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"},{ename:139,cname:"老夫子",title:"万古长明",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"},{ename:140,cname:"关羽",title:"一骑当千",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"},{ename:141,cname:"貂蝉",title:"绝世舞姬",hero_type:2,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"},{ename:142,cname:"安琪拉",title:"暗夜萝莉",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"},{ename:144,cname:"程咬金",title:"热烈之斧",hero_type:3,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"},{ename:146,cname:"露娜",title:"月光之女",hero_type:1,hero_type2:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"},{ename:148,cname:"姜子牙",title:"太古魔导",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"},{ename:149,cname:"刘邦",title:"双面君主",hero_type:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"},{ename:150,cname:"韩信",title:"国士无双",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"},{ename:152,cname:"王昭君",title:"冰雪之华",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"},{ename:153,cname:"兰陵王",title:"暗影刀锋",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"},{ename:154,cname:"花木兰",title:"传说之刃",hero_type:1,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"},{ename:156,cname:"张良",title:"言灵之书",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"},{ename:157,cname:"不知火舞",title:"明媚烈焰",hero_type:2,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"},{ename:162,cname:"娜可露露",title:"鹰之守护",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"},{ename:163,cname:"橘右京",title:"神梦一刀",hero_type:4,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"},{ename:166,cname:"亚瑟",title:"圣骑之力",hero_type:1,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"},{ename:167,cname:"孙悟空",title:"齐天大圣",hero_type:4,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"},{ename:168,cname:"牛魔",title:"精英酋长",hero_type:6,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"},{ename:169,cname:"后羿",title:"半神之弓",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"},{ename:170,cname:"刘备",title:"仁德义枪",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"},{ename:171,cname:"张飞",title:"禁血狂兽",hero_type:3,hero_type2:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"},{ename:173,cname:"李元芳",title:"王都密探",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"},{ename:174,cname:"虞姬",title:"森之风灵",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"},{ename:175,cname:"钟馗",title:"虚灵城判",hero_type:6,hero_type2:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"},{ename:177,cname:"成吉思汗",title:"苍狼末裔",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"},{ename:178,cname:"杨戬",title:"根源之目",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"},{ename:183,cname:"雅典娜",title:"圣域余晖",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"},{ename:184,cname:"蔡文姬",title:"天籁弦音",hero_type:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"},{ename:186,cname:"太乙真人",title:"炼金大师",hero_type:6,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"},{ename:180,cname:"哪吒",title:"桀骜炎枪",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"},{ename:190,cname:"诸葛亮",title:"绝代智谋",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"},{ename:192,cname:"黄忠",title:"燃魂重炮",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"},{ename:191,cname:"大乔",title:"沧海之曜",hero_type:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"},{ename:187,cname:"东皇太一",title:"噬灭日蚀",hero_type:6,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"},{ename:182,cname:"干将莫邪",title:"淬命双剑",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"},{ename:189,cname:"鬼谷子",title:"万物有灵",hero_type:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"},{ename:193,cname:"铠",title:"破灭刃锋",hero_type:1,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"},{ename:196,cname:"百里守约",title:"静谧之眼",hero_type:5,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"},{ename:195,cname:"百里玄策",title:"嚣狂之镰",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"},{ename:194,cname:"苏烈",title:"不屈铁壁",hero_type:3,hero_type2:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"},{ename:198,cname:"梦奇",title:"入梦之灵",hero_type:1,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"},{ename:179,cname:"女娲",title:"至高创世",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"},{ename:501,cname:"明世隐",title:"灵魂劫卜",hero_type:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"},{ename:199,cname:"公孙离",title:"幻舞玲珑",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"},{ename:176,cname:"杨玉环",title:"霓裳风华",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"},{ename:502,cname:"裴擒虎",title:"六合虎拳",hero_type:4,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"},{ename:197,cname:"弈星",title:"天元之弈",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"},{ename:503,cname:"狂铁",title:"战车意志",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"},{ename:504,cname:"米莱狄",title:"筑城者",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"},{ename:125,cname:"元歌",title:"无间傀儡",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"},{ename:510,cname:"孙策",title:"光明之海",hero_type:3,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"},{ename:137,cname:"司马懿",title:"寂灭之心",hero_type:4,hero_type2:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"},{ename:509,cname:"盾山",title:"无尽之盾",hero_type:6,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"},{ename:508,cname:"伽罗",title:"破魔之箭",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"},{ename:312,cname:"沈梦溪",title:"爆弹怪猫",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"},{ename:507,cname:"李信",title:"谋世之战",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"},{ename:513,cname:"上官婉儿",title:"惊鸿之笔",hero_type:2,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"},{ename:515,cname:"嫦娥",title:"寒月公主",hero_type:2,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"},{ename:511,cname:"猪八戒",title:"无忧猛士",hero_type:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"},{ename:529,cname:"盘古",title:"破晓之神",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"},{ename:505,cname:"瑶",title:"鹿灵守心",hero_type:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"},{ename:506,cname:"云中君",title:"流云之翼",hero_type:4,hero_type2:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"},{ename:522,cname:"曜",title:"星辰之子",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg"},{ename:518,cname:"马超",title:"冷晖之枪",hero_type:1,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"},{ename:523,cname:"西施",title:"幻纱之灵",hero_type:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg"},{ename:525,cname:"鲁班大师",title:"神匠",hero_type:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg"},{ename:524,cname:"蒙犽",title:"烈炮小子",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg"},{ename:531,cname:"镜",title:"破镜之刃",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg"},{ename:527,cname:"蒙恬",title:"秩序统将",hero_type:1,hero_type2:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg"},{ename:533,cname:"阿古朵",title:"山林之子",hero_type:3,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg"},{ename:536,cname:"夏洛特",title:"玫瑰剑士",hero_type:1,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg"},{ename:528,cname:"澜",title:"鲨之猎刃",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg"},{ename:537,cname:"司空震",title:"雷霆之王",hero_type:1,hero_type2:2,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg"},{ename:155,cname:"艾琳",title:"精灵之舞",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg"},{ename:538,cname:"云缨",title:"燎原之心",hero_type:1,hero_type2:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg"},{ename:540,cname:"金蝉",title:"渡世行者",hero_type:2,hero_type2:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg"},{ename:542,cname:"暃",title:"玉城之子",hero_type:4,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/542/542.jpg"},{ename:534,cname:"桑启",title:"萤火之旅",hero_type:6,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/534/534.jpg"},{ename:548,cname:"戈娅",title:"沙海飞舟",hero_type:5,iconUrl:"https://game.gtimg.cn/images/yxzj/img201606/heroimg/548/548.jpg"},{"ename":544,"cname":"赵怀真","title":"自在之心","hero_type":1,"iconUrl":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/544/544.jpg"},{"ename":545,"cname":"莱西奥","title":"火鹰船长","hero_type":5,"iconUrl":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/545/545.jpg"},{"ename":564,"cname":"姬小满","title":"武道奇才","hero_type":1,"iconUrl":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/564/564.jpg"}];t.default=n},"6eb6":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("4160"),i("d81d"),i("d3b7"),i("ac1f"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=n(i("1da1")),r=n(i("58dd")),o={data:function(){return{scrollTop:0,oldScrollTop:0,current:0,menuHeight:0,menuItemHeight:0,itemId:"",tabbar:[],arr:[],scrollRightTop:0,timer:null,heroTypeList:[{title:"战士",type:1},{title:"法师",type:2},{title:"坦克",type:3},{title:"刺客",type:4},{title:"射手",type:5},{title:"辅助",type:6}],heroList:r.default,heroType:"",cdk:null,haveCDK:!1}},onLoad:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(uni.showLoading(),!e.cdk){i.next=7;break}return t.cdk=e.cdk,i.next=5,t.checkCDK();case 5:i.next=8;break;case 7:t.haveCDK=!1;case 8:uni.hideLoading();case 9:case"end":return i.stop()}}),i)})))()},onReady:function(){this.getMenuItemTop()},methods:{findHero:function(e){var t=this;t.cdk?t.heroType?uni.showModal({title:"温馨提示",content:"只能选择一次，确定选择"+e.cname+"？",success:function(i){i.confirm&&uni.navigateTo({url:"/pages/result/result?cdk=".concat(t.cdk,"&hero=").concat(e.ename,"&type=").concat(t.heroType)})}}):uni.showToast({title:"请先选择系统",icon:"none",duration:3e3}):uni.showToast({title:"当前密钥无效",icon:"none",duration:3e3})},findHeroList:function(){for(var e=[],t=0;t<this.heroTypeList.length;t++){for(var i=[],n=0;n<this.heroList.length;n++)this.heroTypeList[t].type!=this.heroList[n].hero_type&&this.heroTypeList[t].type!=this.heroList[n].hero_type2||i.push(this.heroList[n]);var a={name:this.heroTypeList[t].title,foods:i};e.push(a)}this.tabbar=e},checkCDK:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e,t.next=3,uni.request({url:"https://www.somekey.cn/gai/check.php",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{cdk:i.cdk}});case 3:if(n=t.sent,n[0]&&(uni.showToast({title:"接口访问失败",icon:"none",duration:3e3}),i.haveCDK=!1),!n[1]){t.next=17;break}if(200!=n[1].data.code){t.next=16;break}if(!n[1].data.data.uid){t.next=13;break}uni.setStorageSync("heroInfo",n[1].data),uni.setStorageSync("cdk",i.cdk),uni.navigateTo({url:"/pages/result/result?old=true"}),t.next=16;break;case 13:return t.next=15,i.findHeroList();case 15:i.haveCDK=!0;case 16:400==n[1].data.code&&(i.haveCDK=!1,uni.showToast({title:n[1].data.msg,icon:"none",duration:3e3}));case 17:case"end":return t.stop()}}),t)})))()},swichMenu:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(0!=t.arr.length){i.next=3;break}return i.next=3,t.getMenuItemTop();case 3:if(e!=t.current){i.next=5;break}return i.abrupt("return");case 5:t.scrollRightTop=t.oldScrollTop,t.$nextTick((function(){this.scrollRightTop=this.arr[e],this.current=e,this.leftMenuStatus(e)}));case 7:case"end":return i.stop()}}),i)})))()},getElRect:function(e,t){var i=this;new Promise((function(n,a){var r=uni.createSelectorQuery().in(i);r.select("."+e).fields({size:!0},(function(a){a?(i[t]=a.height,n()):setTimeout((function(){i.getElRect(e)}),10)})).exec()}))},observer:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tabbar.map((function(t,i){var n=uni.createIntersectionObserver(e);n.relativeTo(".right-box",{top:0}).observe("#item"+i,(function(t){if(t.intersectionRatio>0){var i=t.id.substring(4);e.leftMenuStatus(i)}}))}));case 1:case"end":return t.stop()}}),t)})))()},leftMenuStatus:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.current=e,0!=t.menuHeight&&0!=t.menuItemHeight){i.next=6;break}return i.next=4,t.getElRect("menu-scroll-view","menuHeight");case 4:return i.next=6,t.getElRect("u-tab-item","menuItemHeight");case 6:t.scrollTop=e*t.menuItemHeight+t.menuItemHeight/2-t.menuHeight/2;case 7:case"end":return i.stop()}}),i)})))()},getMenuItemTop:function(){var e=this;new Promise((function(t){var i=uni.createSelectorQuery();i.selectAll(".class-item").boundingClientRect((function(i){i.length?i.forEach((function(n){e.arr.push(n.top-i[0].top),t()})):setTimeout((function(){e.getMenuItemTop()}),10)})).exec()}))},rightScroll:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.oldScrollTop=e.detail.scrollTop,0!=t.arr.length){i.next=4;break}return i.next=4,t.getMenuItemTop();case 4:if(!t.timer){i.next=6;break}return i.abrupt("return");case 6:if(t.menuHeight){i.next=9;break}return i.next=9,t.getElRect("menu-scroll-view","menuHeight");case 9:setTimeout((function(){t.timer=null;for(var i=e.detail.scrollTop+t.menuHeight/2,n=0;n<t.arr.length;n++){var a=t.arr[n],r=t.arr[n+1];if(!r||i>=a&&i<r)return void t.leftMenuStatus(n)}}),10);case 10:case"end":return i.stop()}}),i)})))()}}};t.default=o},"71b0":function(e,t,i){var n=i("c304");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6058529b",n,!0,{sourceMap:!1,shadowMode:!1})},"856d":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{name:{type:[String,Number,Boolean],default:uni.$u.props.radio.name},shape:{type:String,default:uni.$u.props.radio.shape},disabled:{type:[String,Boolean],default:uni.$u.props.radio.disabled},labelDisabled:{type:[String,Boolean],default:uni.$u.props.radio.labelDisabled},activeColor:{type:String,default:uni.$u.props.radio.activeColor},inactiveColor:{type:String,default:uni.$u.props.radio.inactiveColor},iconSize:{type:[String,Number],default:uni.$u.props.radio.iconSize},labelSize:{type:[String,Number],default:uni.$u.props.radio.labelSize},label:{type:[String,Number],default:uni.$u.props.radio.label},size:{type:[String,Number],default:uni.$u.props.radio.size},color:{type:String,default:uni.$u.props.radio.color},labelColor:{type:String,default:uni.$u.props.radio.labelColor}}};t.default=n},8813:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uIcon:i("f09b").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-radio",class:["u-radio-label--"+e.parentData.iconPlacement,e.parentData.borderBottom&&"column"===e.parentData.placement&&"u-border-bottom"],style:[e.radioStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.wrapperClickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-radio__icon-wrap",class:e.iconClasses,style:[e.iconWrapStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.iconClickHandler.apply(void 0,arguments)}}},[e._t("icon",[i("u-icon",{staticClass:"u-radio__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.elIconSize,color:e.elIconColor}})])],2),i("v-uni-text",{staticClass:"u-radio__text",style:{color:e.elDisabled?e.elInactiveColor:e.elLabelColor,fontSize:e.elLabelSize,lineHeight:e.elLabelSize},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.labelClickHandler.apply(void 0,arguments)}}},[e._v(e._s(e.label))])],1)},r=[]},"953c":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-9f3bf06e], uni-scroll-view[data-v-9f3bf06e], uni-swiper-item[data-v-9f3bf06e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-radio[data-v-9f3bf06e]{display:flex;flex-direction:row;overflow:hidden;flex-direction:row;align-items:center}.u-radio-label--left[data-v-9f3bf06e]{flex-direction:row}.u-radio-label--right[data-v-9f3bf06e]{flex-direction:row-reverse;justify-content:space-between}.u-radio__icon-wrap[data-v-9f3bf06e]{box-sizing:border-box;transition-property:border-color,background-color,color;transition-duration:.2s;color:#606266;display:flex;flex-direction:row;align-items:center;justify-content:center;color:transparent;text-align:center;margin-right:6px;font-size:20px;border-width:1px;border-color:#c8c9cc;border-style:solid}.u-radio__icon-wrap--circle[data-v-9f3bf06e]{border-radius:100%}.u-radio__icon-wrap--square[data-v-9f3bf06e]{border-radius:3px}.u-radio__icon-wrap--checked[data-v-9f3bf06e]{color:#fff;background-color:red;border-color:#2979ff}.u-radio__icon-wrap--disabled[data-v-9f3bf06e]{background-color:#ebedf0!important}.u-radio__icon-wrap--disabled--checked[data-v-9f3bf06e]{color:#c8c9cc!important}.u-radio__label[data-v-9f3bf06e]{word-wrap:break-word;margin-left:5px;margin-right:12px;color:#606266;font-size:15px}.u-radio__label--disabled[data-v-9f3bf06e]{color:#c8c9cc}',""]),e.exports=t},"9ae5":function(e,t,i){"use strict";i.r(t);var n=i("6eb6"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},aa4f:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-radio-group",class:e.bemClass},[e._t("default")],2)},r=[]},ae42:function(e,t,i){"use strict";var n=i("bf2e"),a=i.n(n);a.a},bf2e:function(e,t,i){var n=i("953c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("48f0868b",n,!0,{sourceMap:!1,shadowMode:!1})},c304:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-4236db40], uni-scroll-view[data-v-4236db40], uni-swiper-item[data-v-4236db40]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-radio-group[data-v-4236db40]{flex:1}.u-radio-group--row[data-v-4236db40]{display:flex;flex-direction:row}.u-radio-group--column[data-v-4236db40]{display:flex;flex-direction:column}',""]),e.exports=t},c55d:function(e,t,i){"use strict";i.r(t);var n=i("aa4f"),a=i("d76c");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("e98f");var o,c=i("f0c5"),m=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4236db40",null,!1,n["a"],o);t["default"]=m.exports},cb20:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("856d")),r={name:"u-radio",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{checked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:null,activeColor:null,inactiveColor:null,size:18,value:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}},computed:{elDisabled:function(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize:function(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize:function(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor:function(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor:function(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor:function(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape:function(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize:function(){return uni.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor:function(){var e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.checked?this.elInactiveColor:"transparent":this.checked?e:"transparent"},iconClasses:function(){var e=[];return e.push("u-radio__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-radio__icon-wrap--disabled"),this.checked&&this.elDisabled&&e.push("u-radio__icon-wrap--disabled--checked"),e},iconWrapStyle:function(){var e={};return e.backgroundColor=this.checked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.checked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=uni.$u.addUnit(this.elSize),e.height=uni.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},radioStyle:function(){var e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&uni.$u.error("检测到您将borderBottom设置为true，需要同时将u-radio-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="ios"===uni.$u.os()?"12px":"8px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.init()},methods:{init:function(){this.updateParentData(),this.parent||uni.$u.error("u-radio必须搭配u-radio-group组件使用"),this.checked=this.name===this.parentData.value},updateParentData:function(){this.getParentData("u-radio-group")},iconClickHandler:function(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},wrapperClickHandler:function(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},labelClickHandler:function(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent:function(){var e=this;this.checked||(this.$emit("change",this.name),this.$nextTick((function(){uni.$u.formValidate(e,"change")})))},setRadioCheckedStatus:function(){this.emitEvent(),this.checked=!0,"function"===typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}}};t.default=r},d76c:function(e,t,i){"use strict";i.r(t);var n=i("35b1"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},dbee:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uCell:i("9f35").default,uRadioGroup:i("c55d").default,uRadio:i("2a79").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-wrap"},[e.haveCDK?e._e():i("v-uni-view",[i("v-uni-view",{staticStyle:{"font-weight":"700",margin:"10px 14px","border-radius":"10px","box-shadow":"1px 1px 5px #ebebeb",height:"100px","line-height":"100px","text-align":"center","background-color":"#FFFFFF"}},[i("v-uni-view",{staticStyle:{"font-size":"20px"}},[e._v("战力精准查询系统")])],1),i("v-uni-view",[i("u-cell",{attrs:{icon:"star-fill",title:"使用说明",isLink:!1,border:!1,size:"large"}})],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column",padding:"10px","border-radius":"6px","box-shadow":"1px 1px 5px #ebebeb","font-size":"15px","background-color":"#FFFFFF",margin:"0px 14px"}},[i("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v("1、支持安卓/苹果双系统")]),i("v-uni-view",{staticStyle:{"margin-top":"5px"}}),i("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v("2、内置8个低分省份，供你选择")]),i("v-uni-view",{staticStyle:{"margin-top":"5px"}}),i("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v("3、内置5个低分市区，供你选择")]),i("v-uni-view",{staticStyle:{"margin-top":"5px"}}),i("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v("4、内置5个低分县区，供你选择")]),i("v-uni-view",{staticStyle:{"margin-top":"5px"}}),i("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v("5、每个链接仅8小时内有效")]),i("v-uni-view",{staticStyle:{"margin-top":"5px"}}),i("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v("6、每个链接只能选择1个英雄")]),i("v-uni-view",{staticStyle:{"margin-top":"5px"}}),i("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v("7、技术客服VX：hongbao1808")])],1)],1),e.haveCDK?i("v-uni-view",[i("v-uni-view",[i("u-cell",{attrs:{icon:"star-fill",title:"选择系统",isLink:!1,border:!1,size:"large"}})],1),i("v-uni-view",{staticStyle:{margin:"5px 20px 10px 20px"}},[i("u-radio-group",{attrs:{placement:"row"},model:{value:e.heroType,callback:function(t){e.heroType=t},expression:"heroType"}},[i("u-radio",{attrs:{labelSize:12,activeColor:"red",name:"aqq",label:"安卓QQ"}}),i("u-radio",{attrs:{labelSize:12,activeColor:"red",name:"awx",label:"安卓WX"}}),i("u-radio",{attrs:{labelSize:12,activeColor:"red",name:"iqq",label:"苹果QQ"}}),i("u-radio",{attrs:{labelSize:12,activeColor:"red",name:"iwx",label:"苹果WX"}})],1)],1),i("v-uni-view",[i("u-cell",{attrs:{icon:"star-fill",title:"选择英雄",isLink:!1,border:!1,size:"large"}})],1)],1):e._e(),e.haveCDK?i("v-uni-view",{staticClass:"u-menu-wrap"},[i("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":e.scrollTop,"scroll-into-view":e.itemId}},e._l(e.tabbar,(function(t,n){return i("v-uni-view",{key:n,staticClass:"u-tab-item",class:[e.current==n?"u-tab-item-active":""],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.swichMenu(n)}}},[i("v-uni-text",{staticClass:"u-line-1"},[e._v(e._s(t.name))])],1)})),1),i("v-uni-scroll-view",{staticClass:"right-box",staticStyle:{"background-color":"#eee"},attrs:{"scroll-top":e.scrollRightTop,"scroll-y":!0,"scroll-with-animation":!0},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.rightScroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-view"},e._l(e.tabbar,(function(t,n){return i("v-uni-view",{key:n,staticClass:"class-item",attrs:{id:"item"+n}},[i("v-uni-view",{staticClass:"item-title"},[i("v-uni-text",[e._v(e._s(t.name))])],1),i("v-uni-view",{staticClass:"item-container"},e._l(t.foods,(function(t,n){return i("v-uni-view",{key:n,staticClass:"thumb-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.findHero(t)}}},[i("v-uni-image",{staticClass:"item-menu-image",attrs:{src:t.iconUrl,mode:""}}),i("v-uni-view",{staticClass:"item-menu-name"},[e._v(e._s(t.cname))])],1)})),1)],1)})),1)],1)],1):e._e()],1)},r=[]},e27f:function(e,t,i){"use strict";i.r(t);var n=i("dbee"),a=i("9ae5");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("29b0");var o,c=i("f0c5"),m=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"7f9047d9",null,!1,n["a"],o);t["default"]=m.exports},e98f:function(e,t,i){"use strict";var n=i("71b0"),a=i.n(n);a.a},f218:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{value:{type:[String,Number,Boolean],default:uni.$u.props.radioGroup.value},disabled:{type:Boolean,default:uni.$u.props.radioGroup.disabled},shape:{type:String,default:uni.$u.props.radioGroup.shape},activeColor:{type:String,default:uni.$u.props.radioGroup.activeColor},inactiveColor:{type:String,default:uni.$u.props.radioGroup.inactiveColor},name:{type:String,default:uni.$u.props.radioGroup.name},size:{type:[String,Number],default:uni.$u.props.radioGroup.size},placement:{type:String,default:uni.$u.props.radioGroup.placement},label:{type:[String],default:uni.$u.props.radioGroup.label},labelColor:{type:[String],default:uni.$u.props.radioGroup.labelColor},labelSize:{type:[String,Number],default:uni.$u.props.radioGroup.labelSize},labelDisabled:{type:Boolean,default:uni.$u.props.radioGroup.labelDisabled},iconColor:{type:String,default:uni.$u.props.radioGroup.iconColor},iconSize:{type:[String,Number],default:uni.$u.props.radioGroup.iconSize},borderBottom:{type:Boolean,default:uni.$u.props.radioGroup.borderBottom},iconPlacement:{type:String,default:uni.$u.props.radio.iconPlacement}}};t.default=n}}]);