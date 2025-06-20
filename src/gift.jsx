const gifts = [
  {
    id: "01",
    name: "平凡咒物禮包",
    items: [
      { giver: "健太", reward: "剩4卷破披，剩4卷伊卡路斯披風" },
      { giver: "愛暈船a傑哥", reward: "梅花耳環+1 (3幸)" },
    ],
    img: "npc001.png",
  },
  {
    id: "02",
    name: "特級咒物禮包",
    items: [
      { giver: "YOYO", reward: "背包*2，特級咒物*1" },
      { giver: "健太", reward: "+2魔翼之杖" },
    ],
    img: "gift001.png",
  },
  {
    id: "03",
    name: "惡魔果實禮包",
    items: [
      { giver: "曲麗", reward: "烤鰻魚*1組" },
      { giver: "愛暈船a傑哥", reward: "魔力藥水兩組" },
    ],
    img: "apple.png",
  },
  {
    id: "04",
    name: "平凡的經濟實惠禮包",
    items: [
      { giver: "睡一下", reward: "100萬" },
      { giver: "啊毓", reward: "20顆傳送石" },
    ],
    img: "money.png",
  },
  {
    id: "05",
    name: "舒適牢房體驗禮包",
    items: [
      { giver: "空想", reward: "3小時祈禱（拿到要付兩顆瞬移石）" },
      { giver: "山茶", reward: "瞬移石*20" },
      { giver: "學姊", reward: "護身符＊１０" },
    ],
    img: "pray.png",
  },
  {
    id: "06",
    name: "蛋雕祭司用大禮包",
    items: [
      { giver: "阿帕", reward: "2222棒冰*1" },
      { giver: "小澳", reward: "16888烤鰻魚" },
    ],
    img: "unagi.png",
  },
  {
    id: "07",
    name: "50萬給你啦乞丐！",
    items: [{ giver: "走路工", reward: "500w，玫瑰耳環*1" }],
    img: "rose.png",
  },
  {
    id: "08",
    name: "我要全部！",
    items: [{ giver: "天晴", reward: "玫瑰耳環*1，+6攻盜賊手套*1" }],
    img: "rose.png",
  },
  {
    id: "09",
    name: "新手舒服開局禮包",
    items: [
      { giver: "穹雨", reward: "2000萬楓幣或等值水" },
      { giver: "愛暈船a傑哥", reward: "30雪" },
    ],
    img: "",
  },
  {
    id: "10",
    name: "大奶姊姊的任意門",
    items: [
      { giver: "學姊", reward: "瞬移石＊10" },
      { giver: "東區", reward: "瞬移石＊50" },
    ],
    img: "",
  },
  {
    id: "11",
    name: "很沈重的禮物",
    items: [{ giver: "RC", reward: "石巨人石塊*5000" }],
    img: "_5130102.png",
  },
  {
    id: "12",
    name: "要被蛋雕的大禮包",
    items: [
      { giver: "羅恩恩恩恩", reward: "怪物卡一張" },
      { giver: "快龍不是嚕嚕米", reward: "酋長的地契" },
      { giver: "健太", reward: "藍色雨傘*1" },
    ],
    img: "",
  },
  {
    id: "13",
    name: "變得很堅強的禮物",
    items: [{ giver: "混世魔王袁世凱", reward: "上衣防禦卷軸60％*10" }],
    img: "",
  },
  {
    id: "14",
    name: "成為絕對打得到的8+9",
    items: [{ giver: "健太", reward: "單手棍命中100%*10" }],
    img: "",
  },
  {
    id: "15",
    name: "破麻妖精的收藏",
    items: [{ giver: "燒肉", reward: "玻璃鞋五雙" }],
    img: "04001000.info.icon.png",
  },
  {
    id: "16",
    name: "來自大冰雷的棒棒1",
    items: [{ giver: "阿帕", reward: "2222棒冰*1" }],
    img: "",
  },
  {
    id: "17",
    name: "來自大冰雷的棒棒2",
    items: [{ giver: "阿帕", reward: "2222棒冰*1" }],
    img: "",
  },
  {
    id: "18",
    name: "來自大冰雷的棒棒3",
    items: [{ giver: "阿帕", reward: "2222棒冰*1" }],
    img: "",
  },
  {
    id: "19",
    name: "變得很幸運的禮物",
    items: [{ giver: "燒肉", reward: "耳幸100%*10" }],
    img: "",
  },
  {
    id: "20",
    name: "警告五百次",
    items: [{ giver: "南無加特林菩薩", reward: "200萬" }],
    img: "",
  },
  {
    id: "21",
    name: "客官來做做嗎<3",
    items: [{ giver: "客官不要停", reward: "100萬" }],
    img: "",
  },
  {
    id: "22",
    name: "要不要來吸我的氧氣？",
    items: [{ giver: "六葉clover", reward: "100萬" }],
    img: "",
  },
  {
    id: "23",
    name: "一起炸掉伺服器",
    items: [{ giver: "淳", reward: "100萬" }],
    img: "",
  },
  {
    id: "24",
    name: "漂漂亮亮練等去",
    items: [
      { giver: "炸雞弟", reward: "乾淨耳環" },
      { giver: "健太", reward: "+4智披風" },
    ],
    img: "",
  },
  {
    id: "25",
    name: "變得很堅強的禮物",
    items: [{ giver: "學長", reward: "上衣防禦60%*10" }],
    img: "",
  },
  {
    id: "26",
    name: "我不喜歡吃蚵仔煎",
    items: [{ giver: "額仔尖", reward: "50雪" }],
    img: "",
  },
  {
    id: "27",
    name: "要不要娶健太？",
    items: [{ giver: "健太", reward: "200萬" }],
    img: "",
  },
  {
    id: "28",
    name: "大奶姊姊幫你擴",
    items: [{ giver: "學姊", reward: "背包＊３" }],
  },
];

export default gifts;
