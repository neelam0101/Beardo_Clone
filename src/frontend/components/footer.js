function footer(){
    return `
    <hr id="hr1" />
    <div id="footer">
      <div id="footer_div1">
        
        <div>
            <div id="footer_div21">PRODUCTS</div>
          <p onclick="window.location.href='https:\\www.beardo.in/categories/combos'">Combos</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/beard'">Beard</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/face'">Face</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/hair'">Hair</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/body'">Body</p>
        </div>
        <div id="footer_div11">
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/fragrance'">Fragrance</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/beardo'">Beardo</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/fashion'">Fashion</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/trimmers'">Trimmers</p>
        </div>
        <div id="footer_div11">
          <p  onclick="window.location.href='https:\\www.beardo.in/about-us'">Who we are</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/community'">Community</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/blog'">Blog</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/beardothon'">Beardothon</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/contact-us'">Contact us</p>
        </div>
        <div id="footer_div11">
          <p  onclick="window.location.href='https:\\www.beardo.in/categories/careers'">Careers</p>
        </div>
      </div>
      <div id="footer_div2">
        
        <div >
            <div id="footer_div22">ORDER</div>
          <p  onclick="window.location.href='https:\\www.beardo.in/login'">Account</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/cart'">Cart</p>
          <p  onclick="window.location.href='https:\\www.www.beardo.in/login'">Wishlist</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/track-order'">Track Order</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/wallet'">Beardo Wallet</p>
        </div>
        <div id="footer_div11">
          <p  onclick="window.location.href='https:\\www.beardo.in/faqs'">FAQ's</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/terms-conditions'">Terms & Conditions</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/privacy-policy'">Privacy Policy</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/return-refund-policy'">Return & Refund Policy</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/return-refund-policy'">Return & Refund Policy</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/vip-club-terms'">VIP CLUB T&C</p>
          <p  onclick="window.location.href='https:\\www.beardo.in/2020-clearance-sale-terms'">Terms & Conditions - 2020 Stock Clearance Sale</p>
        </div>
      </div>
      <div id="footer_div3">
        <span style="color: grey ">COMMUNITY</span>
        <p id="icon">
          <a class="fab fa-facebook-square" href="https://www.facebook.com/beardoofficial/"></a>
          <a class="fab fa-instagram"  href="https://www.instagram.com/beardo.official/?hl=en"></a>
          <a class="fab fa-twitter-square"  href="https://twitter.com/beardoformen?lang=en"></a>
          <a class="fab fa-youtube-square"  href="https://www.youtube.com/channel/UC8tE3gNWC-B6BqLuKkqivxw"></a>
        </p>
        <p id="div3_p1">SIGN UP FOR EMAIL</p>
        <p id="div3_p2">Deals ,News and Stealth products releases</p>
        <form id="footer_form">
          <div>
            <input id="footer_email" type="email" placeholder="Email" />
            <button onclick="" id="footer_btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    <div id="footer_div4">
      <div id="footer_div41">COPYRIGHT2022</div>
      <div>ZED LIFESTYLE PVT. LTD.</div>
      <div id="footer_div41">ALL RIGHTS RESERVED</div>
    </div>
    
    
    <style>
      #footer_main {
        margin-top: 400px;
      }

      .footer_body {
        background-color: black;
        color: white;
      }
      * {
        font-family: "Montserrat", sans-serif;
      }

      #footer {
        display: flex;
        width: 85%;

        margin-left: 8%;
        margin-top: 8%;
      }
      #hr1 {
        font-size: 30px;
        background-color: white;
      }
      #footer_div1 {
        display: flex;
        width: 44%;
        font-weight: 550;
      }

      #footer_div2 {
        display: flex;
        width: 35%;
        font-weight: 550;
      }
      #footer_div3 {
        width: 22%;
        font-weight: 550;
        margin-left: 5%;
      }
      #footer_div4 {
        display: flex;

        justify-content: space-around;
        text-decoration: underline;
        margin-top: 8%;
        height: 15px;
        padding: 1%;
        background-color: rgb(26, 26, 26);
        font-size: 90%;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      #footer_div1 > div,
      #footer_div2 > div,
      #footer_div3 > div {
        width: 100%;
        font-weight: 300;
        font-size: 90%;
      }
      #footer_div21 {
        padding-bottom: 19%;
        color: grey;
        font-weight: 550;
        font-size: large;
      }
      #footer_div22 {
        padding-bottom: 14%;
        color: grey;
        font-weight: 550;
        font-size: large;
      }
      #footer > div > div > p:hover {
        color: rgb(255, 0, 0);
      }

      #icon > a {
        font-size: 200%;
        margin-left: 10%;
        margin: 6%;
        text-decoration: none;
        color: aliceblue;
      }
      #icon > a:hover {
        color: rgb(223, 116, 116);
        font-size: 220%;
      }
      #div3_p1 {
        font-size: 90%;
        font-weight: 550;
      }
      #div3_p2 {
        font-size: 80%;
        font-weight: 500;
        color: grey;
      }
      #footer_form {
        border: 1px solid rgb(245, 242, 242);
        height: 36px;
        background-color: white;
      }
      #footer_email {
        height: 34px;
        width: 70%;
        background-color: black;
        border: 0;
        padding: 0.5%;
      }
      #footer_btn {
        border: 0;
        background-color: white;
      }
      #footer_div41 {
        font-size: 86%;
      }
      #footer_div11 {
        margin-top: 9%;
      }

      @media screen and (max-width: 480px) {
        #footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
        }
      }
    </style>`
}

export {footer}