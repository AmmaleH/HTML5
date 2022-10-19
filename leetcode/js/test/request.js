const { default: axios } = require("axios");
var token = "6dcd391a-e61f-492a-8e5e-8bba420a7444";
axios({
    method: 'get',
    url: 'http://wwt.natapp1.cc/sell/seller/order/list',
    data: {
    },
    headers: {
        "Cookie":
            "token=" + token + "; Hm_lvt_079fac161efc4b2a6f31e80064f14e82=" + 1630122118 + "; Hm_lvt_3d8e7fc0de8a2a75f2ca3bfe128e6391=" + 1621840952,
        "token": "6dcd391a-e61f-492a-8e5e-8bba420a7444",

    }
}).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
});