const products = [
    {
        id: 1,
        name: "Xylitol Sugar",
        price: 25,
        description : "Xylitol Sugar is a natural sugar substitute that is low in calories and has a low glycemic index, making it a popular choice for those looking to reduce their sugar intake.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668153/de8207553f6e68087c112aa114f72e83-Photoroom_rd3p66.png",
        category: "678380afee070dda7a928f42"
    },
    {
        id: 2,
        name: "naTMA Sugar",
        price: 40,
        description : "naTMA Sugar is a low-calorie sugar substitute that is commonly used in baking and cooking. It is a popular choice for those who are looking to reduce their sugar intake or manage their blood sugar levels.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668151/b8f4ecbfb83a18260e0a6726da8dd28f-Photoroom_mmbby5.png",
        category: "678380afee070dda7a928f42"
    },
    {
        id: 3,
        name: "Equal classic sugar",
        price: 24,
        description: "A classic sugar substitute, Equal classic sugar provides the sweetness you desire without the calories, making it a popular choice for those monitoring their sugar intake.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668150/84de85cc126f20a375724f2dccb351cc-Photoroom_c56ttz.png",
        category: "678380afee070dda7a928f42"
    },
    {
        id: 4,
        name: "Agave Sugar",
        price: 15,
        description : "A natural sweetener with a low glycemic index, Agave Sugar is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668150/dd578894331bcd275ed6644d9970a924-Photoroom_gs2758.png",
        category: "678380afee070dda7a928f42"
    },
    {
        id: 5,
        name: "Smart Sugar",
        price: 30,
        description : "Smart Sugar is a low-calorie sugar substitute that is commonly used in baking and cooking. It is a popular choice for those who are looking to reduce their sugar intake or manage their blood sugar levels.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668149/2cc1e278e12f322ae254a92399cae6b6-Photoroom_cb1qgm.png",
        category: "678380afee070dda7a928f42"
    },
    {
        id: 6,
        name: "Whole Earth",
        price: 31,
        description : "Whole Earth is a natural sweetener with a low glycemic index, commonly used in baking and cooking. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668149/847743e07059654d0a76dfefb1356822-Photoroom_xneoed.png",
        category: "678380afee070dda7a928f42"
    },
    {
        id: 7,
        name: "Organic Sugar",
        price: 56,
        description : "Organic Sugar is a natural sweetener that is minimally processed, retaining the natural nutrients found in sugar cane or sugar beets. It is a healthier alternative for those looking to reduce their refined sugar intake.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668146/280079b1286745d996d327b07c61159f-Photoroom_z4vr5s.png",
        category: "678380afee070dda7a928f42"
    },
    {
        id: 8,
        name: "Pyure Sugar",
        price: 21,
        description : "Pyure Sugar is a natural sweetener with a low glycemic index, commonly used in baking and cooking. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736668146/9ff66105984f064dc172d9df28ff9498-Photoroom_r7vs0k.png",  
        category: "678380afee070dda7a928f42"
    },
    

    {
        id: 9,
        name: "Apple Sider Vinegarer",
        price: 32,
        description : "Apple cider vinegar is a natural sweetener that is made from fermented apples. It has a tangy, fruity flavor and is commonly used in cooking and baking. It is also a popular ingredient in natural remedies and health products due to its antibacterial and anti-inflammatory properties.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672755/15a8492fc1d462dad718ae0314977426-Photoroom_vwyoso.png",
        category: "678380afee070dda7a928f43"
    },
    {
        id: 10,
        name: "Vermant Vinegar",
        price: 20,
        description: "Vermiculite vinegar is a natural sweetener that is made from fermented mushrooms. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672755/f67b184168cf0a02967dd2b26ee70880-Photoroom_cabaej.png",
        category: "678380afee070dda7a928f43"
    },
    {
        id: 11,
        name: "Bragg Vinegar",
        price: 15,
        description: "Bragg Vinegar is a natural sweetener that is made from fermented grapes. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672754/5a4fcc9fa02393b891eccb18ca831439-Photoroom_dvbp5k.png",
        category: "678380afee070dda7a928f43"
    },
    {
        id: 12,
        name: "Keto Vinegar",
        price: 42,
        description : "Keto Vinegar is a natural sweetener that is made from fermented kale. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672755/24744a3f8e6031ef8dcdd40b3e9a402c-Photoroom_dna4wm.png",
        category: "678380afee070dda7a928f43"
    },
    {
        id: 13,
        name: "LakeWood vinegar",
        price: 50,
        description : "LakeWood vinegar is a natural sweetener that is made from fermented carrots. It is a popular choice for those who are looking to reduce their sugar intake or manage their blood sugar levels.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672757/a0ff43711e3de5735ef27064c293fbdc-Photoroom_gzywab.png",
        category: "678380afee070dda7a928f43"
    },
    {
        id: 14,
        name: "Vital protence",
        price: 56,
        description : "Vital protence is a natural sweetener with a low glycemic index, commonly used in baking and cooking. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672751/45e84acde254968fb72839967aa8608d-Photoroom_drjrmo.png",
        category: "678380afee070dda7a928f43"
    },
    {
        id: 15,
        name: "Apple cider vinegar",
        price: 16,
        description : "Apple cider vinegar is a natural sweetener with a low glycemic index, commonly used in baking and cooking. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672752/527c439df6902bc5c03a37cfe36203ac-Photoroom_psjkgd.png",
        category: "678380afee070dda7a928f43"
    },
    {
        id: 16,
        name: "Melores cider vinegar",
        price: 51,
        description : "Melores cider vinegar is a natural sweetener with a low glycemic index, commonly used in baking and cooking. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736672754/c57fbfda4abd6f516183651fa9a729b3-Photoroom_pgrpmh.png",  
        category: "678380afee070dda7a928f43"
    },





    {
        id: 17,
        name: "Vitamine C Gummies",
        price: 76,
        description : "Vitamine C Gummies is a natural sugar substitute that is low in calories and has a low glycemic index, making it a popular choice for those looking to reduce their sugar intake.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680836/05650c1eda48f63aee1de2c40d31ab88-Photoroom_enb2u5.png",
        category: "678380afee070dda7a928f44"
    },
    {
        id: 18,
        name: "Collagen Vitamine",
        price: 63,
        description : "Collagen Vitamine C is a low-calorie sugar substitute that is commonly used in baking and cooking. It is a popular choice for those who are looking to reduce their sugar intake or manage their blood sugar levels.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680841/e881f1c7f568fefa9a0863a9698b2800-Photoroom_prdsfg.png",
        category: "678380afee070dda7a928f44"
    },
    {
        id: 19,
        name: "L-Lysine vitamine",
        price: 34,
        description: "L-Lysine vitamine C provides the sweetness you desire without the calories, making it a popular choice for those monitoring their sugar intake.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680831/26200609e44f8e5eaa0308808e43d4e8-Photoroom_aqi3xw.png",
        category: "678380afee070dda7a928f44"
    },
    {
        id: 20,
        name: "Super X-complex",
        price: 75,
        description : "Super X-complex is a natural sweetener with a low glycemic index, commonly used in baking and cooking. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680836/580bcd0cc31e07308fabb5ab82622abf-Photoroom_knrm8q.png",
        category: "678380afee070dda7a928f44"
    },
    {
        id: 21,
        name: "Cranberry Juice",
        price: 54,
        description : "Cranberry Juice is a low-calorie sugar substitute that is commonly used in baking and cooking. It is a popular choice for  those who are looking to reduce their sugar intake or manage their blood sugar levels.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680811/8d821ab7b3b55a07a241ced9765c16f8-Photoroom_zmwsuu.png",
        category: "678380afee070dda7a928f44"
    },
    {
        id: 22,
        name: "MutliVitamin Gummies",
        price: 81,
        description : "MultiVitamin Gummies is a natural sweetener with a low glycemic index, commonly used in baking and cooking. It is a popular choice for those looking for a healthier alternative to refined sugar.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680834/27ec6d3fff7d42a9e769abee324e8e06-Photoroom_oug2ow.png",
        category: "678380afee070dda7a928f44"
    },
    {
        id: 23,
        name: "Turmeric curcumin & ginger", 
        price: 36,
        description : "Turmeric curcumin & ginger is a natural sugar substitute that is low in calories and has a low glycemic index, making it a popular choice for those looking to reduce their sugar intake.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680829/e28b01269280988ff65476238db5b989-Photoroom_tpdq9q.png",
        category: "678380afee070dda7a928f44"
    },
    {
        id: 24,
        name: "B12 vitamine",
        price: 53,
        description : "B12 vitamine C provides the sweetness you desire without the calories, making it a popular choice for those monitoring their sugar intake.",
        image :"https://res.cloudinary.com/ddmd64tdp/image/upload/v1736680809/204d34b6e2ca8781464f4d791cc207f1-Photoroom_twy9lg.png",  
        category: "678380afee070dda7a928f44"
    },
    


];
module.exports = products