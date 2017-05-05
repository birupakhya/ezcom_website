var Product = require('../models/product');

var mongoose = require('mongoose');

//mongoose.connect('localhost:27017/ezcomdb_master');
mongoose.connect('mongodb://bigdatadb:JlcX7j3VBNZl8d0BUYQW0Q9gSKD9SW0PgMQ13MsrpAApSWh6kzlgUDwILKbBeNR8l451KWKu1FKHpn8vQ4HKiw==@bigdatadb.documents.azure.com:10250/ezcomdb_master/?ssl=true');


var products = [
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/s8.jpeg',
    title: 'Samsung Galaxy S8 64GB Unlocked Phone - International Version (Midnight Black)',
    description: 'Infinity Display: a bezel-less, full-frontal, edge-to-edge screen. Default resolution is Full HD+ and can be changed to Quad HD+ (WQHD+) in Settings. Camera resolution - Front: 8 MP AF, Rear: 12 MP OIS AF. Memory: Internal Memory 64 GB, RAM 4GB',
    price: 827.99
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/galaxy-s7.jpg',
    title: 'Samsung Galaxy S7 G930F 32GB',
    description: '5.1-inch QHD sAMOLED, 1440 x 2560 pixel resolution (~577ppi pixel density) + Corning Gorilla Glass 4 w/ Always-on Dispay. Android v6.0 Marshmallow, Chipset: Exynos 8890, Processor: Octa-Core (Quad-Core 2.3 GHz Quad & Quad-Core 1.6 GHz); GPU: Mali-T880 MP12',
    price: 439.99
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/huawei-mate.jpg',
    title: 'Huawei Mate 9',
    description: 'Integrated with Alexa voice service. Just tap and ask Alexa to enjoy thousands of skills on the go, such as hearing the latest news, weather and traffic reports, check sport scores, and much more. ',
    price: 459
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/iphone-black.png',
    title: 'Apple iPhone 7 Unlocked Phone 128 GB',
    description: 'Keep everything you love about iPhone up to date, secure, and accessible from any device with iCloud. Multi-Touch display with IPS technology. With just a single press, 3D Touch lets you do more than ever before.',
    price: 809.95
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/lg-g6.jpg',
    title: 'LG G6 H870 32GB',
    description: '5.7 inch IPS LCD Screen 1440 x 2880 pixel resolution Multi touch HDR10 compliant Dolby Vision Android Nougat 7.0 Snapdragon 821 chipset Quadcore CPU (2x 2.35GHz Kyro and 2x 1.6GHz Kyro)',
    price: 652
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/moto-g-play.png',
    title: 'Moto G Play (4th gen.) - Black - 16 GB',
    description: 'Fast 4G LTE speed, an up to 1.2 GHz quad-core processor, 2 GB of RAM, and a bright 5" HD (720p) display ensure videos and games run smoothly and look great. Enjoy the best of Google Android 6.0 Marshmallow, including Google Play Store, Google Maps, Gmail and more',
    price: 149.99
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/moto-g-plus.jpg',
    title: 'Moto G Plus (5th Generation) Lunar Gray - 32 GB',
    description: 'Fast 4G LTE speed, up to 2.0 GHz octa-core processor, 2 GB of RAM, and a bright 5.2” full HD (1080p) display ensures videos and games run smoothly and look great. Enjoy the best of Google Android 7.0 Nougat, including Google Play Store, Google Maps, Gmail and more',
    price: 229.99
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/samsung-g920f.jpg',
    title: 'Samsung Galaxy S6 SM-G920F',
    description: 'Display: Super AMOLED capacitive touchscreen, 16M colors - .1 inches (~70.7% screen-to-body ratio) - 1440 x 2560 pixels (~577 ppi pixel density). CPU: Quad-core 1.5 GHz Cortex-A53 & Quad-core 2.1 GHz - Exynos 7420',
    price: 394.78
    }),
    new Product({
    imagePath: 'https://ezcomcdn.azureedge.net/images/samsung-j7.jpeg',
    title: 'Samsung Galaxy J7 SM-J700H/DS GSM',
    description: '2G Bands: GSM 850/900/1800/1900 3G Bands: 850/900/1900/2100. Android OS v5.1 (Lollipop), CPU: Octa-core 1.5GHz GPU: Adreno 405 , Chipset: Qualcomm MSM8939',
    price: 203.48
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}