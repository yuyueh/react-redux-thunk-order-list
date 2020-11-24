# react-redux-thunk-order-list
A simple order list base on react, redux, redux-thunk, styled-components, typescript.

API mock by [https://designer.mocky.io/](https://designer.mocky.io/)

### Development

```
npm run dev
```
And then point your browser to `localhost:3000`

### API example

[GET] https://run.mocky.io/v3/f1645b2c-2625-43b2-9a5c-3f9bc489d677
```json
{
   "orders":[
      {
         "name":"Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
         "logo":"https://static.oopocket.com/store/iconTreemall@3x.png",
         "status":{
            "code":3,
            "type":"已取消"
         },
         "date":"107/6/12"
      },
      {
         "name":"BALMUDA The Toaster 百慕達烤麵包機-黑色",
         "logo":"https://static.oopocket.com/store/iconTreemall@3x.png",
         "status":{
            "code":2,
            "type":"已成立"
         },
         "date":"108/7/21"
      },
      {
         "name":"贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
         "logo":"https://static.oopocket.com/store/iconTreemall@3x.png",
         "status":{
            "code":1,
            "type":"處理中"
         },
         "date":"108/6/2"
      },
      {
         "name":"Apple AirPds 2",
         "logo":"https://static.oopocket.com/store/iconTreemall@3x.png",
         "status":{
            "code":4,
            "type":"已送達"
         },
         "date":"108/3/02"
      }
   ]
}
```
