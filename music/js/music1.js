/**
 * 歌曲搜索网址：https://autumnfish.cn/search
 * 请求方法 get
 * 请求关键字 keywords
 * 
 * 歌曲播放网址：https://autumnfish.cn/song
 * 请求方法 get
 * 请求关键字 id
 * 
 * 歌曲封面网址：https://autumnfish.cn/song/detail
 * 请求方法 get
 * 请求关键字 ids
 * 
 * 歌曲搜索网址：https://autumnfish.cn/comment/hot?type=0
 * 请求方法 get
 * 请求关键字 id（歌曲id，type固定为0）
 * 
 * mv地址网址：https://autumnfish.cn/mv/url
 * 请求方法 get
 * 请求关键字 id（mvid，为0表示没有mv）
 * 相应内容： mv的地址
 */
var vm = new Vue({
    el: "#music1",
    data: {
        music: "",
        musicList: [],
        musicUrl: "",
        coverUrl: "",
        commentList: [],
        // 动画播放状态
        isPlaying: false,
        // mv的遮罩层
        isShow: false,
        // mv的url
        mvUrl: "",
    },
    methods: {
        getMusic: function () {
            var _this = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.music)
                .then(function (res) {
                    _this.musicList = res.data.result.songs;
                    // console.log(res.data.result.songs);
                })
        },
        playMusic: function (musicId) {
            var _this = this;
            var myaudio = document.querySelector(".myaudio");
            var playUl = document.querySelector(".left").firstElementChild;
            var lis = playUl.children;

            // 为点击的歌曲那一行设置背景色、排他思想
            for (let i = 0; i < lis.length; i++) {
                lis[i].onclick = function (e) {
                    for (let j = 0; j < lis.length; j++) {
                        lis[j].style.backgroundColor = "";
                    }

                    this.style.backgroundColor = "#bfe3f3";
                }
            }

            // 播放歌曲
            axios.get("https://autumnfish.cn/song/url?id=" + musicId)
                .then(function (res) {
                    _this.musicUrl = res.data.data[0].url;
                    // console.log(res);
                }, function (error) {
                    console.log(error);
                });
            // 显示封面
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicId)
                .then(function (res) {
                    console.log(res);
                    console.log(_this.coverUrl);
                    _this.coverUrl = res.data.songs[0].al.picUrl;
                    // console.log(res);
                }, function (err) {
                    console.log(err);
                });

            // 获取评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId)
                .then(function (res) {
                    _this.commentList = res.data.hotComments;
                    console.log(res.data.hotComments);
                }, function (err) {
                    console.log(err);
                })
        },
        play: function () {
            this.isPlaying = true;
            console.log(this.isPlaying);
        },
        pause: function () {
            this.isPlaying = false;
            console.log(this.isPlaying);
        },
        playMv: function (mvId) {
            var _this = this;
            var audio = document.querySelector(".myaudio");
            axios.get("https://autumnfish.cn/mv/url?id=" + mvId)
                .then(function (res) {
                    // console.log(res);
                    _this.mvUrl = res.data.data.url;
                    // console.log(_this.mvUrl);
                    _this.isShow = true;   // 打开mv画面，同时关闭音频画面（audio标签）
                    // _this.musicUrl = "";
                    audio.pause();    // 打开MV时自动关闭音乐
                }, function (err) {
                    console.log(err);
                })
        },
        hide: function () {
            this.isShow = false;
            this.mvUrl = "";
        }
    }
});