// import p2_img from "./2.jpg";
// import p3_img from "./3.jpg";
// import p4_img from "./4.jpg";
// import p5_img from "./5.jpg";
// import p6_img from "./6.jpg";
// import p7_img from "./7.png";
// import p8_img from "./8.jpg";
// import p9_img from "./9.jpg";
// import p11_img from "./11.jpg";
// import p14_img from "./14.jpg";

let all_product = [
  {
    id: 1,
    name: "Premium Casual Shirt for Everyday Wear",
    category: "mens",
    image:
      "https://indian-dresses.weebly.com/uploads/1/4/0/1/140195132/casual-shirt_orig.png",
    new_price: 55.0,
    old_price: 95.0,
  },
  {
    id: 2,
    name: "Smart Casual Blazer with a Classic Fit",
    category: "mens",
    image: "https://5.imimg.com/data5/YA/QF/MY-19062938/casual-blazer.jpg",
    new_price: 65.0,
    old_price: 105.0,
  },
  {
    id: 3,
    name: "Traditional Ethnic Kurta for Festive Occasions",
    category: "mens",
    image:
      "https://www.saree.com/media/catalog/product/cache/a2d512490f2b9958e6aa6a0385a10b9a/m/n/mnej2087.jpg",
    new_price: 85.0,
    old_price: 125.0,
  },
  {
    id: 4,
    name: "Elegant Formal Blazer for Professional Style",
    category: "mens",
    image:
      "https://i.pinimg.com/originals/b6/fd/d2/b6fdd2b9a5501450437a0bb136ae9e26.jpg",
    new_price: 85.0,
    old_price: 125.0,
  },
  {
    id: 5,
    name: "Trendy Casual Outfit for Modern Men",
    category: "mens",
    image:
      "https://images.bewakoof.com/uploads/grid/app/casual-outfits-for-men-bewakoof-blog-9-1615892381.jpg",
    new_price: 85.0,
    old_price: 125.0,
  },
  {
    id: 6,
    name: "Lightweight Hooded Shirt for Summer Comfort",
    category: "mens",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23289926/2024/8/19/db3dce8d-77fb-4e6f-bbcf-387d01f835111724060661770-KINGDOM-OF-WHITE-Wakai-Cotton-Summer-Hooded-Shirt-4631724060-1.jpg",
    new_price: 85.0,
    old_price: 125.0,
  },
  {
    id: 7,
    name: "Stylish Linen Blazer for Special Events",
    category: "mens",
    image:
      "https://bananarepublic.gapcanada.ca/webcontent/0057/331/708/cn57331708.jpg",
    new_price: 85.0,
    old_price: 125.0,
  },
  {
    id: 8,
    name: "Soft Cotton Shirt for Everyday Style",
    category: "mens",
    image:
      "https://www.claiworld.com/images/ProductImages/clai/medium/6455e40261818KzMI91683350530.jpg",
    new_price: 85.0,
    old_price: 125.0,
  },

  {
    id: 9,
    name: "Charming Fancy Dress with Floral Detailing",
    category: "womens",
    image:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/806062ae819593880290da53e4215174.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    new_price: 60.0,
    old_price: 100.0,
  },

  {
    id: 10,
    name: "Graceful Printed Maxi Dress for Parties",
    category: "womens",
    image:
      "https://cdn.aboutstatic.com/file/images/431fb132a6cab2ab4254ab2347627157.jpg?quality=75&height=480&width=360",
    new_price: 70.0,
    old_price: 110.0,
  },

  {
    id: 11,
    name: "Exquisite Embroidered Suit for Festive Looks",
    category: "womens",
    image:
      "https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-38_1_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
    new_price: 80.0,
    old_price: 120.0,
  },

  {
    id: 12,
    name: "Sophisticated Party Wear Gown with Elegant Patterns",
    category: "womens",
    image:
      "https://i.pinimg.com/736x/b6/9f/22/b69f22a2446ef3e421071430cb1dee1c.jpg",
    new_price: 90.0,
    old_price: 130.0,
  },
  {
    id: 13,
    name: "Stunning Evening Gown with a Designer Touch",
    category: "womens",
    image: "https://img.faballey.com/images/Product/DRS03973Z/1.jpg ",
    new_price: 90.0,
    old_price: 130.0,
  },
  {
    id: 14,
    name: "Gorgeous Designer Suit for Formal Occasions",
    category: "womens",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2020/9/OW/PA/VD/114412608/product-jpeg-500x500.jpg",
    new_price: 90.0,
    old_price: 130.0,
  },
  {
    id: 15,
    name: "Luxurious Anarkali Dress for Weddings",
    category: "womens",
    image:
      "https://i.pinimg.com/736x/31/d7/ec/31d7ecbaaa04dd3c52f89d15d02ac6a8.jpg",
    new_price: 90.0,
    old_price: 130.0,
  },
  {
    id: 16,
    name: "Traditional Ethnic Wear with Intricate Embroidery",
    category: "womens",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/7/IE/XT/XI/132355491/women-ethnic-wear.jpg",
    new_price: 90.0,
    old_price: 130.0,
  },
  {
    id: 17,
    name: "Cool Kids' T-Shirt for Casual Comfort",
    category: "kids",
    image: "https://images.meesho.com/images/products/182706220/sxcod_512.webp",
    new_price: 75.0,
    old_price: 115.0,
  },
  {
    id: 18,
    name: "Colorful Casual Kurta for Stylish Kids",
    category: "kids",
    image:
      "https://i.pinimg.com/564x/f9/6a/db/f96adb14948d6a3d2eb2b3bac314db3e.jpg",
    new_price: 75.0,
    old_price: 115.0,
  },

  {
    id: 19,
    name: "Vibrant Printed Kurta Set for Festive Occasions",
    category: "kids",
    image:
      "https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/d/i/digital-printed-cotton-kurta-set-in-navy-blue-and-multicolor-v1-usm234.jpg",
    new_price: 75.0,
    old_price: 115.0,
  },
  {
    id: 20,
    name: "Trendy Striped T-Shirt for Playful Kids",
    category: "kids",
    image:
      "https://rukminim1.flixcart.com/image/300/300/xif0q/kids-t-shirt/j/t/v/11-12-years-kids-rndf-patta-grey-11-12-yy-clothing-original-imagpzjbzbfa6fnw.jpeg",
    new_price: 75.0,
    old_price: 115.0,
  },
  {
    id: 21,
    name: "Adorable Girls Frock with Elegant Detailing",

    category: "kids",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-apparel-combo/2/d/b/7-8-years-kc00109drs-kids-cave-original-imagw5v3unnnqsbw.jpeg?q=90&crop=false",
    new_price: 75.0,
    old_price: 115.0,
  },
  {
    id: 22,
    name: "Chic Apparel Combo for All-Day Style",
    category: "kids",
    image:
      "https://www.jiomart.com/images/product/original/rvskkfgwjo/fashion-dream-girls-dark-green-solid-georgette-pack-of-1-frock-product-images-rvskkfgwjo-4-202302101205.jpg?im=Resize=(500,630)",
    new_price: 75.0,
    old_price: 115.0,
  },
  {
    id: 23,
    name: "Charming Kids' Casual Outfit for Everyday Wear",
    category: "kids",
    image:
      "https://down-ph.img.susercontent.com/file/b3ba8ff4b341dcecc67e782ac402114e_tn",
    new_price: 75.0,
    old_price: 115.0,
  },
  {
    id: 24,
    name: "Bright Red T-Shirt for a Fun and Energetic Look",
    category: "kids",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-t-shirt/z/k/a/6-7-years-kids-rndf-because-red-28-yy-clothing-original-imagpzj7t4guqzfy.jpeg?q=20&crop=false",
    new_price: 75.0,
    old_price: 115.0,
  },
];

export default all_product;
