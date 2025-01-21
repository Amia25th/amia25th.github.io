const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,                //是否附着页面底部，否为false
    autoplay: false,             //是否自动播放，否为false,移动端不能生效
    volume: 0.3,                //初始音量（0~1）
    //lrcType: 3,  歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
    mutex: true,                //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    order: 'random',            //音频循环顺序（'list'：顺序, 'random'：随机）
    preload: 'none',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
    listFolded: false,          //列表默认折叠，开启为true
    theme: '#19fbff',           //主题颜色
    audio: [{
        name: '回想',           //歌曲名称
        artist: '祝我回想起来，我又爱她一次。',       //歌曲作者
        url: '../htd/audio/回想.flac',         //歌曲源文件地址
        cover: '../htd/img/回想.jpg',     //歌曲封面地址
        // lrc:  'lrc.lrc',   歌曲的歌词文件
        theme: '#60597f'        //主题颜色（优先）
    },
        {
            name: '夜空ノムコウ(SMAP)',
            artist: '看到星空了吗？',
            url: '../htd/audio/夜空ノムコウ(SMAP).flac',
            cover: '../htd/img/夜空ノムコウ(SMAP).jpg',
            theme: '#71c6d0'
        }]
});