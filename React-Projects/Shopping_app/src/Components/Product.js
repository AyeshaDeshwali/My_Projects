import React, { useState } from "react";
import "./Product.css";

function Product() {
  const [images, setImages] = useState([]);
  const [isDefaultImageVisible, setIsDefaultImageVisible] = useState(true);

  const handleLinkClick = (imageArray, e) => {
    e.preventDefault();
    setImages(imageArray);
    setIsDefaultImageVisible(false);
  };

  return (
    <>
      <div className="containerProducts" id="products">
        <h2 className="product">
          <span>Latest</span> Products
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {/* Adjusted column width to col-md-3, added border-info and rounded for border and border-radius */}
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne1"
                    aria-expanded="false"
                    aria-controls="collapseOne1"
                  >
                    Home
                  </button>
                </h2>
                <div
                  id="collapseOne1"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne1"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://www.centuryply.com/assets/img/blog/03/26/p-1.jpg",
                                "https://www.centuryply.com/assets/img/blog/03/26/p-2.jpg",
                                "https://www.centuryply.com/assets/img/blog/03/26/p-3.jpg",
                                "https://www.centuryply.com/assets/img/blog/03/26/p-4.jpg",
                                "https://www.shutterstock.com/image-vector/vector-bed-bedding-bedside-lamps-260nw-2312555715.jpg",
                                "https://images.thdstatic.com/productImages/af92f1fc-4544-455f-beba-53284a5ca7df/svn/ash-walnut-baxton-studio-platform-beds-236-12783-hd-64_600.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Bed's
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://m.media-amazon.com/images/I/61pRH+6Q-PL.jpg",
                                "https://oakcraft.in/cdn/shop/files/babypink.png?v=1714888136",
                                "https://www.themaark.com/image/cache/catalog/MK%20LOUTUS%20SINGLE%20SOFA%20-MAROON/interior-1000x1000.jpg",
                                "https://i.pinimg.com/236x/0d/32/da/0d32dafcdd974d0d0e292fc9ef18335a.jpg",
                                "https://ak1.ostkcdn.com/images/products/is/images/direct/f3de394a7adeb46d225adc0948072169d186f428/510-Design-Juno-Upholstered-Accent-Armchair.jpg",
                                "https://simplystyleco.com.au/wp-content/uploads/2019/05/Noosa-Beach-Weddiing-STC-417-e1655770058778.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Chair's
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://5.imimg.com/data5/SELLER/Default/2024/6/427558906/NU/SS/SC/80153581/715fc57ofil-ac-sx679-500x500.jpg",
                                "https://m.media-amazon.com/images/I/51VvtN6SiSL._AC_UF350,350_QL80_.jpg",
                                "https://m.media-amazon.com/images/I/71kDFZIFlFL._AC_UF894,1000_QL80_.jpg",
                                "https://img.fruugo.com/product/7/20/1575086207_max.jpg",
                                "https://i.ebayimg.com/images/g/kkcAAOSwRvZjgG4b/s-l1200.jpg",
                                "https://image.made-in-china.com/2f0j00zlrgvLFshnpQ/Romatic-Table-Lamp-Rose-Flower-LED-Night-Light-Bedside-Lamp-Flower-Table-Lamp-WH-MTB-116-.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Lamp's
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://m.media-amazon.com/images/I/810aMbk3VLL.jpg",
                                "https://m.media-amazon.com/images/I/71Po77FEZpL._AC_UF894,1000_QL80_.jpg",
                                "https://m.media-amazon.com/images/I/71hyvosmqfL.jpg",
                                "https://cdn.shopclues.com/images1/thumbnails/93052/320/320/141183949-93052833-1537984247.jpg",
                                "https://5.imimg.com/data5/KO/QD/WQ/SELLER-60982972/decorative-curtain.jpg",
                                "https://www.bedeckhome.com/media/catalog/product/h/s/hs_eden_teal_curtain_lifestyle_shot_5.jpg?width=700&height=700&canvas=700,700&quality=80&bg-color=255,255,255&fit=bounds",
                              ],
                              e
                            )
                          }
                        >
                          Curtain's
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo2"
                    aria-expanded="false"
                    aria-controls="collapseTwo2"
                  >
                    Woman
                  </button>
                </h2>
                <div
                  id="collapseTwo2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo2"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726185600&semt=ais_hybrid",
                                "https://rukminim1.flixcart.com/image/850/1000/xif0q/shopsy-dress/4/v/b/s-161-to-166-vastra-soundrya-original-imagsc4crn7gxdnd.jpeg?q=20&crop=false",
                                "https://www.shutterstock.com/image-photo/fashionable-womens-clothing-collage-street-600nw-680329576.jpg",
                                "https://m.media-amazon.com/images/I/61tIzjA3bLL._AC_UY1100_.jpg",
                                "https://media.istockphoto.com/id/1321255356/photo/rack-with-stylish-womens-summer-clothes-concept-for-shopping-store-beauty-fashion.jpg?s=612x612&w=0&k=20&c=hbN6q6tuaPjo7jZFqx57CCLX6XuRo5TEpXmIZMqaShk=",

                                "https://img.freepik.com/premium-photo/ecstatic-woman-wearing-dress-standing-store-near-clothes-rack-with-present-boxes-isolated-pink_171337-68233.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Clothes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://img0.junaroad.com/uiproducts/20050404/zoom_0-1689337329.jpg",
                                "https://images.meesho.com/images/products/76816764/ycw7j_512.webp",
                                "https://m.media-amazon.com/images/I/81PRCO6BaIL._SY695_.jpg",
                                "https://m.media-amazon.com/images/I/61bONlYnUrL._AC_UY300_.jpg",
                                "https://fcity.in/images/products/45695701/8verv_512.jpg",
                                "https://images.meesho.com/images/products/261302678/nbweq_512.webp",
                              ],
                              e
                            )
                          }
                        >
                          Sandals
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://rukminim2.flixcart.com/image/850/1000/kzegk280/makeup-kit/q/m/3/all-in-one-professional-makeup-kit-for-girls-womens-kit-color-original-imagbeyrdhr2b7bh.jpeg?q=20&crop=false",
                                "https://www.shutterstock.com/image-photo/professional-makeup-tools-products-on-260nw-1748130281.jpg",
                                "https://m.media-amazon.com/images/I/71bY9KTnjfL._AC_UF1000,1000_QL80_.jpg",
                                "https://images.meesho.com/images/products/367531950/mw3ff_512.webp",
                                "https://www.shutterstock.com/image-photo/cosmetics-set-isolated-on-white-260nw-568906399.jpg",
                                "https://static.hotdeal.vn/images/1068/1067547/400x400/280696-khoa-hoc-trang-diem-ca-nhan-hieu-qua-tai-make-up-spa-art-academy.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Makeup
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/51W1D12CU1BAP1_1.jpg?sw=640&sh=640",
                                "https://ae-pic-a1.aliexpress-media.com/kf/HTB1WflENXXXXXcFapXXq6xXFXXX0.jpg_640x640Q90.jpg_.webp",

                                "https://5.imimg.com/data5/SELLER/Default/2020/8/CY/ST/VL/112137581/5gram-jhumke.jpg",
                                "https://assets.ajio.com/medias/sys_master/root/20230525/hjTZ/646f676042f9e729d7cd07a4/-473Wx593H-465116037-gold-MODEL.jpg",

                                "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3cc2977a/images/hi-res/51O3KT2BA1BA00_1.jpg",
                                "https://m.media-amazon.com/images/I/81ROzVYD+9L._AC_UY1100_.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Jewelry
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree3"
                    aria-expanded="false"
                    aria-controls="collapseThree3"
                  >
                    Man
                  </button>
                </h2>
                <div
                  id="collapseThree3"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree3"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://i.pinimg.com/736x/d4/77/14/d4771409cdd5736886ec7fe623d2c1b8.jpg",
                                "https://i.pinimg.com/236x/58/3b/6e/583b6ed03d261c1d9e831fafd78b5da0.jpg",
                                "https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=",
                                "https://www.stylevore.com/wp-content/uploads/2022/08/AndreasCollections-30166150768242302.jpg",
                                "https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/05/full/1636094253-2135.jpg?im=FeatureCrop,size=(826,465)",
                                "https://stylegirlfriend.com/wp-content/uploads/2023/08/homepage-how-it-works-1-1-copy.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Clothes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://www.tracerindia.com/cdn/shop/products/5_d535a4e0-3f16-4739-a376-46862f1c1d8b.jpg?v=1688469873&width=1445",
                                "https://images.meesho.com/images/products/350873273/ccqir_512.jpg",

                                "https://assets.ajio.com/medias/sys_master/root/20220707/NRH3/62c6f0cfaeb26921af693071/-1117Wx1400H-469227463-red-MODEL3.jpg",
                                "https://i.pinimg.com/736x/05/df/88/05df885e5d1ababf6bcfcb8d0a59ba2d.jpg",

                                "https://assets.ajio.com/medias/sys_master/root/20230824/Ruyi/64e7655dafa4cf41f57552c1/-473Wx593H-461573701-red-MODEL.jpg",
                                "https://www.shutterstock.com/image-photo/leather-brown-mens-sneakers-white-260nw-2106104093.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://i.ebayimg.com/images/g/rxEAAOSw8dBlHRmM/s-l400.jpg",
                                "https://5.imimg.com/data5/NI/TB/RU/SELLER-87713143/salman-khan-designer-black-watch-sdl264003936-1-79db5.jpg",
                                "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg",
                                "https://www.gujaratgifts.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/t/p/tp3_9-3-2011.jpg",
                                "https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/0de6e0de-855b-41f3-a9dd-2a2c5a37da33/main/1280x720/21s856ms/match/image.jpg",
                                "https://images.herzindagi.info/image/2024/Aug/casio-mens-watch.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Watch
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://media.tijn.co/products/10103905/official/_1200_1200_40.jpg.webp",
                                "https://funkytradition.com/cdn/shop/files/0_XojoX-Optical-Alloy-Glasses-Frame-Women-Men-Oversized-Transparent-Eyeglasses-Frames-Myopia-Glasses-Male-Female-Eyewear_e0176928-304e-4db1-9af5-b41fde692319.jpg?v=1723556776",
                                "https://5.imimg.com/data5/VF/BU/MY-11896129/stylish-mens-sunglasses.jpg",
                                "https://kdbdeals.com/wp-content/uploads/2023/09/Gucci-Sunglasses-For-Men-Gold-Black-2.jpg",
                                "https://m.media-amazon.com/images/I/61BvCC8Q3WL._QL92_SH45_SR240,220_.jpg",
                                "https://yardofdeals.com/cdn/shop/files/11_a01db5ec-9ceb-44d4-915a-4dcc50651747_2048x.jpg?v=1701860911",
                              ],
                              e
                            )
                          }
                        >
                          Eyeglasses
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour4"
                    aria-expanded="false"
                    aria-controls="collapseFour4"
                  >
                    Kids
                  </button>
                </h2>
                <div
                  id="collapseFour4"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour4"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://www.shutterstock.com/image-vector/modern-kids-clothes-set-summer-260nw-2021848727.jpg",
                                "https://i.pinimg.com/474x/e8/2b/71/e82b71af887dbffe13749903a0924af4.jpg",
                                "https://m.media-amazon.com/images/I/61x03Eg0Y6L._AC_SX466_.jpg",
                                "https://sc04.alicdn.com/kf/H1d37113b50134491b0f41e6969db0df1q.jpg",
                                "https://images.meesho.com/images/products/440386207/ju0cq_256.webp",
                                "https://i5.walmartimages.com/seo/EnJoCho-Boys-Clothes-Kids-Handsome-5-Piece-Suit-Holiday-Outdoor-Soft-Piano-Hosting-Performance-Dress-School-Wear-Clearance-10-11-Years_bd6fd24a-3fe6-4a71-951f-c415ad3eef76.5fecf07ff94f52cc5cc2712fb4ea9cda.jpeg",
                              ],
                              e
                            )
                          }
                        >
                          Clothes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://ml.thcdn.com/productimg/960/960/15030186-9515137984792218.jpg",
                                "https://www.shutterstock.com/image-photo/2-pairs-kids-shoes-boy-260nw-201095894.jpg",
                                "https://i5.walmartimages.com/asr/1ab339cd-625f-4df5-bf24-892cf22b33d1.b1c25a6bfbc37949666f0eb7243ef3be.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
                                "https://my-live-01.slatic.net/p/4ab3de56217667b4a496023d8b1a1fc7.jpg",
                                "https://images.meesho.com/images/products/254052219/sfel1_512.webp",
                                "https://ae01.alicdn.com/kf/H95617546ea4b4fd19c70f4af958e1a45s/Princess-Kids-Shoes-Girls-Sandals-2022-New-Casual-Glitter-Rhinestone-Children-High-Heel-Crystal-Student-Performance.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://images.mamaearth.in/catalog/product/c/o/coco-soft-face-cream_1.jpg?format=auto&height=600",
                                "https://images-cdn.ubuy.co.in/6452036fecf478154521235c-evereden-kids-face-cream-cool-peach.jpg",
                                "https://images.meesho.com/images/products/412736766/0lk9i_512.jpg",
                                "https://m.media-amazon.com/images/I/61LZbZahmIL._AC_UF350,350_QL80_.jpg",
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQ85mXvjYk7ak-Ea4e-gF8xm8ncowuY5ogg&s",
                                "https://d3r47b04tm9cwy.cloudfront.net/product-images/8904180305936-1.webp",
                              ],
                              e
                            )
                          }
                        >
                          Body Product's
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://media.istockphoto.com/id/687165852/photo/toys.jpg?s=612x612&w=0&k=20&c=_BdsQLnut3pVc3RYgodD3Xiy7gCCM3K8HX3GdODLRt0=",
                                "https://i5.walmartimages.com/asr/a07d2e8c-f946-48dc-908c-ed1faa5add56.96adf045f73802616425e91d5b51407c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
                                "https://www.shutterstock.com/image-photo/many-different-childrens-toys-wicker-260nw-2336155493.jpg",
                                "https://rukminim2.flixcart.com/image/850/1000/kltryq80/vehicle-pull-along/z/c/8/unbreakable-automobile-car-toy-set-for-children-kids-toys-original-imagyvdhb2k62nmh.jpeg?q=20&crop=false",
                                "https://img.freepik.com/premium-photo/cutout-set-3-stuffed-animal-toys-isolated-transparent-background-ai_827055-110.jpg",
                                "https://m.media-amazon.com/images/I/81fAENs-pHL.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Toys
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive5"
                    aria-expanded="false"
                    aria-controls="collapseFive5"
                  >
                    Electronics
                  </button>
                </h2>
                <div
                  id="collapseFive5"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive5"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://lh3.googleusercontent.com/proxy/n0sOkbBuawjnTBnRsiaPF1TKqLejzIb3SkNdpN727Fk-6-vhIohVH1bK-3Q-kWuaNOIaj9hY9oigIoc58AbaGiHIu3QHn3OaOXUeoeNQq5TYCCHuzCJz6wjvnpnXYfRbTkkSNc3ALg",
                                "https://static.toiimg.com/thumb/msid-88248827,width-800,resizemode-4,imgsize-16752/share.jpg",
                                "https://cdn1.smartprix.com/rx-i5VijaSv1-w1200-h1200/5VijaSv1.jpg",
                                "https://assorted.downloads.oppo.com/static/archives/images/in/oppo-f15/F15-back-front.jpg",
                                "https://img.lazcdn.com/g/p/b13a29d3d3c315154d2a90958bfeb7b9.jpg_720x720q80.jpg",
                                "https://lh4.googleusercontent.com/proxy/HlHteOqcxV0P-QoC8UwDxXezvUEHmRTduDFmk0NbF5v4aO5hK9RFdHj4LMmtSNb5ao0AJS7nrETlCqxLtYdo-yZotS0Pl2c",
                              ],
                              e
                            )
                          }
                        >
                          Mobiles
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/08/full/1715188152-1149.jpg",
                                "https://images.unsplash.com/photo-1717295248299-74c084c31184?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D",
                                "https://www.nicepng.com/png/detail/310-3100985_plasma-tv-plasma-tv-png.png",
                                "https://cdn.ndtv.com/tech/images/gadgets/Isi_LCD_TV.jpg",
                                "https://assets.hardwarezone.com/img/2012/10/main.jpg",
                                "https://cdn.mos.cms.futurecdn.net/XwooiuT22gDMghRsShEEKm-480-80.jpg",
                              ],
                              e
                            )
                          }
                        >
                          TV
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://images-cdn.ubuy.co.in/64dcc5de93f3bd694b590b5b-3-5-cu-ft-retro-mini-fridge.jpg",
                                "https://www.maytag.com/is/image/content/dam/business-unit/maytag/en-us/marketing-content/site-assets/page-content/oc-articles/guide-to-refrigerator-sizes-dimensions/guide-to-refrigerator-sizes-dimensions_Image8_optimized.jpg?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&scl=1&constrain=fit,1",
                                "https://rukminim2.flixcart.com/image/850/1000/xif0q/refrigerator-new/h/y/l/-original-imagkgpqsrcegwfh.jpeg?q=20&crop=false",
                                "https://www.ikea.com/images/a-french-door-fridge-freezer-with-both-doors-open-showing-fo-8c86cf47a8a8695adfef05db12d08b23.jpg?f=xl",
                                "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/146407/2.jpg?2720",
                                "https://mobileimages.lowes.com/productimages/864168ed-afd1-4a81-806a-693c52f59ebf/64750744.jpg?size=pdhism",
                              ],
                              e
                            )
                          }
                        >
                          Freezer
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://img.freepik.com/free-photo/digital-device-laptop-mockup-concept_53876-14434.jpg",
                                "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww",
                                "https://img.freepik.com/premium-photo/laptop-with-screen-that-says-plant-it_1090087-41466.jpg",
                                "https://www.91-cdn.com/hub/wp-content/uploads/2021/10/Shortcut-keys-for-shutdown.jpg",
                                "https://cdn.pixabay.com/photo/2020/11/18/10/40/macbook-5754926_1280.jpg",
                                "https://d9pfvpeevxz0y.cloudfront.net/blog/wp-content/uploads/2017/04/Blog_042517-1200x673.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Laptop
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven7">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven7"
                    aria-expanded="false"
                    aria-controls="collapseSeven7"
                  >
                    Nurture
                  </button>
                </h2>
                <div
                  id="collapseSeven7"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven7"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg",
                                "https://media.timeout.com/images/106041640/image.jpg",
                                "https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607656105-0257.jpg?im=FeatureCrop,size=(826,465)",
                                "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
                                "https://peakvisor.com/photo/SD/Southern-Alps-New-Zealand-Mount-Cook-NP.jpg",
                                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0BE10RRCUm0XdpMGXeWQs3FPDR5UCXBuLSPsiE1dxgnjXNOQDwTAIgm33kZaafkNI_jPPClhpYmJaurHOm2X1C5Dx5qGAGym481A6Db9NDhahjDvn6sRp7TCmr4Ik1pwgS96KjLanGtc/s1600/1.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Mountain
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://www.iastoppers.com/uploads/articles/Khejri-Tree.jpg",
                                "https://thumbs.dreamstime.com/b/lush-orange-tree-juicy-fruits-garden-under-sunlight-84741528.jpg",
                                "https://khedutputra.com/wp-content/uploads/2019/04/xnews-9-1561356260.jpg.pagespeed.ic_.F-tK_dzHTM.jpg",
                                "https://www.shutterstock.com/image-photo/closeup-ripe-red-apples-glistening-600nw-2458307437.jpg",
                                "https://i0.wp.com/kalpatharusandals.in/wp-content/uploads/2020/08/coconut-palm-tree-500x500-1.jpg?fit=500%2C500&ssl=1",
                                "https://ezgrogarden.com/wp-content/uploads/2010/07/Neem-Tree1-1024x675.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Trees
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleLinkClick(
                              [
                                "https://hips.hearstapps.com/hmg-prod/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg",
                                "https://cdn.dotpe.in/longtail/store-items/8156458/q5Yru47y.jpeg",
                                "https://c.pxhere.com/photos/16/37/hybridtearosecandella_tamron90mmmacro_sonydslra580_roses_redroses_flowers_aftertherain_publicdomaindedicationcc0-172484.jpg!d",
                                "https://i.pinimg.com/236x/f8/66/4d/f8664d1417fca975006d7604992e8d8b.jpg",
                                "https://images.pexels.com/photos/53135/hydrangea-blossom-bloom-flower-53135.jpeg?cs=srgb&dl=pexels-pixabay-53135.jpg&fm=jpg",
                                "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/06/08213142/annie-spratt-WBpr_yH0Frg-unsplash-1028x900.jpg",
                              ],
                              e
                            )
                          }
                        >
                          Flowers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight8"
                    aria-expanded="false"
                    aria-controls="collapseEight8"
                  >
                    Restaurants
                  </button>
                </h2>
                <div
                  id="collapseEight8"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight8"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a href="/bed">Bed's</a>
                      </li>
                      <li>
                        <a href="/chair">Chair's</a>
                      </li>
                      <li>
                        <a href="/lamp">Lamp's</a>
                      </li>
                      <li>
                        <a href="/curtain">Curtain's</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine9">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine9"
                    aria-expanded="false"
                    aria-controls="collapseNine9"
                  >
                    Foods
                  </button>
                </h2>
                <div
                  id="collapseNine9"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine9"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a href="/bed">Bed's</a>
                      </li>
                      <li>
                        <a href="/chair">Chair's</a>
                      </li>
                      <li>
                        <a href="/lamp">Lamp's</a>
                      </li>
                      <li>
                        <a href="/curtain">Curtain's</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen10">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen10"
                    aria-expanded="false"
                    aria-controls="collapseTen10"
                  >
                    Place
                  </button>
                </h2>
                <div
                  id="collapseTen10"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen10"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <ul className="links">
                      <li>
                        <a href="/bed">Bed's</a>
                      </li>
                      <li>
                        <a href="/chair">Chair's</a>
                      </li>
                      <li>
                        <a href="/lamp">Lamp's</a>
                      </li>
                      <li>
                        <a href="/curtain">Curtain's</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            {isDefaultImageVisible ? (
              // Display default image when no category is selected
              <div className="mainImages">
                <img
                  src="https://longwayindia.com/cdn/shop/files/LW-Super-Dlx-Black-3J-P1_ae0b62cc-cfc2-4123-b781-4e8c3836df6d.jpg?v=1721131226"
                  alt=""
                />
                <img
                  src="https://m.media-amazon.com/images/I/81+hcjL-26L._SL1500_.jpg"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/front-view-stacked-books-ladders-apple-with-copy-space-education-day_23-2149241047.jpg"
                  alt=""
                />
                <img
                  src="https://m.media-amazon.com/images/I/51xkmLo46IL._AC_UY350_.jpg"
                  alt=""
                />
                <img
                  src="https://m.media-amazon.com/images/I/31XWh1cKNJL.jpg"
                  alt=""
                />
                <img
                  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/blanket/1/n/m/afaf-double-jaipuri-razai-rajai-double-bed-cotton-rajasthani-original-imagunhgzwqkbdgp.jpeg?q=20&crop=false"
                  alt=""
                  style={{ marginLeft: "0px" }}
                />
              </div>
            ) : (
              // Display category images when a category is selected
              <div className="image-gallery">
                {images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Selected ${index}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
