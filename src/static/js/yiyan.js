// 吾有一言，请诸位倾听
const yiyan = [
  // 事件
  "看板娘 freesia 要出小恶魔",

  // 幻想之语
  "我只是个路过的博丽巫女，给我记住了！",
  "是在这里死亡呢，还是死后留在这里呢，还请选择吧",
  "是~ 这~ 样~ 的~ 吗~",
  "八云紫又过了一个17岁生日",
  "魔理沙偷走了重要的服务器",
  "幽幽子桑，白玉楼的樱花开了",
  "拳打八云敬老院，脚踢红魔幼儿园",

  // 现实之句
  "Windows 正在更新中，你的电脑将重启多次，请坐和放宽。",
  "Windows 更新失败，正在滚回以前的版本...",
  "我做东方整活页面，好吗？",
  "女巫！八卦炉！Best Match! Are you ready? 普通的黑白魔法使！魔理沙魔理沙魔理沙！Yeah~",
  "我幽幽子，就是饿死，死外边，从白玉楼跳下去，也绝对不碰米斯蒂娅一根毛！A moment later.... 真香诶",
  "敌羞吾去脱她衣",
  "前方到站：幻想乡。请到站的旅客提前到车门前等候，未到站的旅客请不要下车。",
  "欢迎乘坐八云号动车组，本次列车是 GSK999 次列车，列车由博丽神社开往红魔馆，途径雾之湖站。",
  "你知道吗？如果用 TNT 搭建 TNT 阵列塔，一塔的爆炸量相当于9个红魔馆。",

  // 命令行
  "$ sudo rm -rf /* --no-preserve-root",
  "$ curl https://thvideo.tv/",
  "$ git clone --recursive https://github.com/PatchyVideo/patchyvideo-vue.git",
  "$ git clone https://github.com/PatchyVideo/PatchyVideo.git",
  "> console.log('TOUHOU GUICHU YINMAD');",

  // 音乐歌词
  "パチュリーズ・ベストヒットGSK - IOSYS",
  "色は匂へど  いつか散りぬるを",
  "月には叢雲 華には風と",
  "ずっとその手を離さないでねと微笑った 君とはぐれた",
  "ヒフミ ヒフミ ヒフミ ヒフミ ヒヒフ",
  "上海 上海 上海 上海 蓬莱 蓬莱 蓬莱 蓬莱 フランス オランダ チベット 京都 ロンドン ロシアン オルレアン",
  "「叡智」　が、ありますように。「志操」　と、ありますように。「希望」　で、ありますように。やがて　「世界」になりますように。",
  "芽生え終えた生命よ 彷徨いの冥で逢おう",
  "Humpty Dumpty sat on a wall. Humpty Dumpty had a great fall. All the king's horses and king's men. Couldn't put Humpty together again.",
  "一句不经意平凡话语，剪断最后的一根神经，我的天空开始崩坏离析。",
  "回首 切切低語向苍茫，客星擦過天際夜朦朧，昏暗黎明前悠悠昤唱傳誦之歌 破長空。",

  // 古诗文
  "先代巫女末年，略复不省事，人多怨之。因自叹曰：“人言我愦愦，后人当思此愦愦。”后灵梦为幻想乡，人多思之。",
  "萃香坐神社中，目博丽巫女，抚箱而叹曰：“愁肠长辘辘，壶中酒不空。”时守矢巫女方至，博丽指之，曰：“不效此辈，乃至于斯。”早苗于是阴怨灵梦。",
  "蕾米之心，日益骄固。冰精叫，雾湖举。芙兰一炬，可怜焦土。",
  "蕾米莉亚问七曜贤者：“博丽、守矢，巫女也，吾将从之，则何如？”对曰：“以雾之湖为池，赤馆为城，十六夜为政于内，美铃御敌于外，谨修内德，彰喻教化，近和妖精， 远化毛玉，则幻想乡之事，未可知也。",
  "博丽巫女下大图书馆，屠破时钟塔，赤馆震恐。蕾米莉亚乃素服自缚，牵羊而出，迎之馆门。巫女大喜，执羊而走，曰：“本为些许柴米，不意竟得此羊！”赤馆遂全。",
  "七曜贤者责蕾米曰：“姊之为姊，未曾初见教芙兰也。”蕾米答曰：“吾自教之耳。”芙兰从旁过，闻言对曰：“幸无所成。”",
  "博丽巫女常忧其贫，而八云氏多讥之。一日见巫女，巫女以清茶待之。八云于是笑曰：“身居陋室，箪食瓢饮，欲效先贤乎？”，则曰：“吾忧其贫，或忧其老。贫者易安，老者难回。”",
  "幽幽子饥甚，遣妖梦外出抄掠。妖梦掳米斯蒂娅等归。及见幽幽子，众皆垂泪。幽幽子不忍，持之手为涕泣良久。于是亲解其缚，执手躬自送诸庖厨。",
  "或问八云氏：“忆君少时，为博丽结界，数有功焉。今老矣，奈何愦愦竟日也？”对曰：“功遂身退，天之道也。吾其身退，逐成巫女之名矣。”",
  "芙兰以姊无威仪，固多轻之。常于众而论，曰：“使吾为赤馆，当抚四方。”七曜贤者闻之，见芙兰曰：“向使君为赤馆，将何如？”曰：“以力以威，以平四境。”对曰：“如此则殆矣。赤馆虽强，人不过其万一，地不过方十里，惟修内德，穆上下，使知礼而不加饥馑已矣。”芙兰乃愧，终不复轻姊。",
  "芙兰游学于人里，从慧音学史，十日竟反。蕾米不说，曰：“学如积万仞之山，日增尺寸，乃有所长，归何为？”芙兰曰：“今日十五，不归何为？”",
  "慧音东游，见四妖精辩日，问其故。桑尼曰：“我以日始出时去人近，而日中时远也。” 露娜以日初出远，而日中时近也。 斯塔曰：“日初出大如车盖，及日中则如盘盂，此不为远者小而近者大乎？” 冰精则驳之：“日初出沧沧凉凉，及其日中如探汤，此不为近者热而远者凉乎？” 慧音不能决也。众妖精笑曰：“孰为汝多知乎？”",
];

function getByteLen(val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
    var length = val.charCodeAt(i);
    if (length >= 0 && length <= 128) {
      len += 1;
    } else {
      len += 2;
    }
  }
  return len;
}

function getYiyan(short) {
  let yy = JSON.parse(JSON.stringify(yiyan));
  if (short) {
    yy = yy.filter((v) => getByteLen(v) <= 80);
  }
  let random = Math.floor(Math.random() * 100, 2) % yy.length;
  return yy[random];
}

function getYiyanArray(short, rand) {
  let yy = JSON.parse(JSON.stringify(yiyan));
  if (short) {
    yy = yy.filter((v) => getByteLen(v) <= 80);
  }
  if (rand) {
    for (let i = 1; i < yy.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      const tmp = yy[random];
      yy[random] = yy[i];
      yy[i] = tmp;
    }
  }
  return yy;
}

export { getYiyan, getYiyanArray };
