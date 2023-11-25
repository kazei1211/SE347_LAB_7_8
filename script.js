// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="./style.css" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//     />
//     <title>Tong Hop</title>
//   </head>
//   <body>
//     <div class="top-container">
//       <h1>Bài tập ngôn ngữ HTML</h1>
//     </div>
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//     />

//     <div class="topnav" id="myTopnav">
//       <a href="#intro" class="active">Giới thiệu</a>
//       <a href="#basic">Cơ bản</a>
//       <a href="#table">Table</a>
//       <a href="#form">Forms</a>
//       <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//         <i class="fa fa-bars"></i>
//       </a>
//     </div>
//     <div class="container">
//       <div class="left-container">
//         <a class="menu-item">&#x2022;&emsp; Mẹ</a>
//         <a class="menu-item">&#x2022;&emsp; Phú quốc</a>
//         <a class="menu-item">&#x2022;&emsp; Định dạng văn bản</a>
//         <a class="menu-item">&#x2022;&emsp; Truyện Ngụ ngôn</a>
//         <a class="menu-item">&#x2022;&emsp; Shop hoa tươi</a>
//         <a class="menu-item">&#x2022;&emsp; Excite@home</a>
//         <a class="menu-item">&#x2022;&emsp; Chương trình học</a>
//         <a class="menu-item">&#x2022;&emsp; Double Rich</a>
//         <a class="menu-item">&#x2022;&emsp; Free.com</a>
//         <a class="menu-item">&#x2022;&emsp; Việt Nam</a>
//         <a class="menu-item">&#x2022;&emsp; Form đàng nhập</a>
//         <a class="menu-item">&#x2022;&emsp; Phiếu đăng ký</a>
//         <a class="menu-item">&#x2022;&emsp; Đặt tour</a>
//       </div>
//       <div class="right-container"></div>
//     </div>
//     <div class="bottom-container">
//       <p class="footer">@2023</p>
//       <p class="footer">Giới thiệu | Liên hệ | Giải trí</p>
//     </div>
//     <script src="./script.js"></script>
//   </body>
// </html>

// this is my html code
// and this is my css code
// * {
//   /* reset scss */
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "Roboto", sans-serif;
// }
// body {
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background-image: linear-gradient(
//     to bottom,
//     rgb(118, 237, 21),
//     rgb(118, 237, 21)
//   );
// }
// h1 {
//   color: white;
//   text-shadow: 1px 1px 8px rgb(143, 0, 143);
//   font-size: 175%;
//   text-align: center;
//   clear: both;
// }
// .container {
//   display: flex;
//   height: 100%;
// }

// .top-container {
//   background-image: url(./image/nen-hoa-co.jpg);
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   text-align: center;
//   height: 13%;
//   text-align: center;
// }

// .left-container {
//   background-image: url(./image/nen-hoa-muc-luc.png);
//   background-repeat: no-repeat;
//   background-position: bottom;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background-size: 100%;
//   padding: 30px;
//   text-align: center;
//   width: 25%;
//   height: 100%;
// }

// .menu-item {
//   background-image: url(./image/nen-lien-ket-muc-luc.png);
//   color: white;
//   background-size: 100%;
//   background-repeat: no-repeat;
//   text-shadow: 1px 1px 1px #000000;
//   text-align: start;
//   padding-top: 5%;
//   padding-bottom: 6%;
//   padding-left: 5%;
//   text-decoration: none;
//   font-size: 100%;
// }

// .menu-item:hover {
//   background-image: url(./image/nen-lien-ket-muc-luc-over.png);
//   background-size: 100%;
//   background-repeat: no-repeat;
//   color: black;
// }

// .right-container {
//   background-color: #ff1717;
//   text-align: center;
//   width: 75%;
//   height: 100%;
// }

// .bottom-container {
//   display: flex;
//   background-color: rgb(167, 241, 9);
//   text-align: center;
//   padding: 3px;
//   justify-content: space-between;
//   align-items: center;
//   clear: both;
//   height: 2%;
// }

// .footer {
//   color: white;
//   text-shadow: 1px 1px 1px #000000;
//   font-size: 75%;

//   text-align: center;
//   clear: both;
// }
// /* Add a black background color to the top navigation */
// .topnav {
//   background-color: rgb(118, 237, 21);
//   overflow: hidden;
// }

// /* Style the links inside the navigation bar */
// .topnav a {
//   float: left;
//   display: block;
//   color: white;
//   text-shadow: 1px 1px 1px #000000;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// }

// /* Change the color of links on hover */
// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// /* Add an active class to highlight the current page */
// .topnav a.active {
//   background-color: #04aa6d;
//   color: white;
// }

// /* Hide the link that should open and close the topnav on small screens */
// .topnav .icon {
//   display: none;
// }

// can you help me ửite code that when click on menu-item it will show content in right-container
// which is a web page
// thank you so much
// i am a newbie
//yeah
//code here
const menuItems = document.querySelectorAll(".menu-item");
const rightContainer = document.querySelector(".right-container");
const topnav = document.querySelector(".topnav");
const topContainer = document.querySelector(".top-container");
const bottomContainer = document.querySelector(".bottom-container");
const leftContainer = document.querySelector(".left-container");
const container = document.querySelector(".container");
const footer = document.querySelector(".footer");
const icon = document.querySelector(".icon");
const myTopnav = document.querySelector("#myTopnav");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    rightContainer.innerHTML = "";
    rightContainer.innerHTML = `<iframe width="100%" height="100%" src="./${item.innerText}.html" frameborder="0"></iframe>`;
    // make ifram fill the right container
  });
});
icon.addEventListener("click", () => {
  myTopnav.classList.toggle("responsive");
});
