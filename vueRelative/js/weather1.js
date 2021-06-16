/* 
    请求地址：http://wthrcdn.etouch.cn/weather_mini
    请求方式：get

*/

var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: [],
    },
    methods: {
        searchWeather: function () {
            var _this = this;
            if (this.city === "") {
                alert("请输入城市名称！");
            }
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function (res) {
                    console.log(res);
                    _this.weatherList = res.data.data.forecast;
                }, function (err) {
                    console.log(err);
                });
        },
        hotCityWeather: function () {
            var _this1 = this;
            var hotcities = document.querySelector(".hotcity").getElementsByTagName("a");
            for (let i = 0; i < hotcities.length; i++) {
                hotcities[i].onclick = function () {
                    console.log(this.innerHTML);
                    _this1.city = this.innerHTML;
                    _this1.searchWeather();
                }
            }

        }
    }
});