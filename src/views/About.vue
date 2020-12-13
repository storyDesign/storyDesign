<template>
<section class="wrapper">
  <div class="banner about_banner"></div>
  <div class="content_padding">
    <div class="container">
      <h1 class="title">故事設計</h1>
      <div class="subTitle">【 讓我們為您突顯產品的美好，與世界對話 】</div>
      「故事設計」是間以網站產品頁設計為主的設計工作室。
      當您本身已經擁有網站了，但因公司的商品政策或是市場變動，而需要作大規模的改版動作時，
      我們可以成為您的設計策略夥伴，協助您以小規模的方式，即可與市場消費者進行有效率的對談，
      使其更了解您的商品，進而產生興趣，讓您的每一分預算達到最大的效益。<br/>
      <br/>
      <div class="subTitle">
        <i class="fas fa-cog"></i> 您的網站 → 產品頁面 改版設計→ 消費者造訪 更了解產品<br/>
      </div>
    </div>
  </div>
  <div class="content_padding">
    <div class="container">
      <div class="subTitle">【 視覺設計與文案行銷都是種投資，我們協助您提升顧客對於產品的興趣 】</div>
      我們以消費者的語言與設計風格喜好，增進您與顧客的互動，彰顯您的優點、讓您看起來更專業，提升產品形象。
      為此我們十分注重開始設計前的溝通與分析，為您量身訂做最適當的結果，與您共享美好的設計經驗，
      下面是我們的專案執行流程。
      <div class="process_circle_box">
        <div class="process_circles">
          <div class="process_circle">
            <div class="circle_icon">
              <i class="far fa-comments"></i>
            </div>
            <div class="circle_text">
              諮詢估價<br/>
              訂金簽約
            </div>
          </div>
          <div class="process_text">
            我們依照您的需求，給予最合適的建議，讓您選擇最適合的方案，報價請參照價目表(已優惠不談價)
          </div>
        </div>
        <div class="process_circles">
          <div class="process_circle">
            <div class="circle_icon">
              <i class="far fa-address-card"></i>
            </div>
            <div class="circle_text">
              定義需求<br/>
              量身規劃
            </div>
          </div>
          <div class="process_text">
            我們會進一步了解您的商品，雙方溝通，為你縝密的規劃好適合之內容
          </div>
        </div>
        <div class="process_circles">
          <div class="process_circle">
            <div class="circle_icon">
              <i class="fab fa-medapps"></i>
            </div>
            <div class="circle_text">
              文案撰寫<br/>
              設計執行
            </div>
          </div>
          <div class="process_text">
            製作時間視專案規模而定，整體時間請參照方案。
          </div>
        </div>
        <div class="process_circles">
          <div class="process_circle">
            <div class="circle_icon">
              <i class="far fa-thumbs-up"></i>
            </div>
            <div class="circle_text">
              交件上線<br/>
              結案取款
            </div>
          </div>
          <div class="process_text">
            雙方努力了許久，產品頁面已順利發表上線，同時桌機版與手機版之測試完成!
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style lang="scss" scoped>
  .container {
    text-align: center;
  }
  .about_banner {
    background-image: url('~@/assets/images/about/banner.jpg');
  }
  .subTitle {
    color: #b46f54;
    margin-bottom: .5rem;
  }
  .process_circle_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  .process_circles {
    width: 100%;
  }
  .process_circle {
    width: 130px;
    height: 130px;
    border-radius: 100%;
    border: 1px solid #a9a9a9;
    color: #b46f54;
    text-align: center;
    margin: 20px auto;
    position: relative;
  }
  // .process_circle::before {
  //   content: '';
  //   width: 140px;
  //   height: 140px;
  //   position: absolute;
  //   top: -9px;
  //   left: -9px;
  //   border: 3px solid #b46f54;
  //   border-radius: 100%;
  //   z-index: 1;
  // }
  // .process_circle::after {
  //   content: '';
  //   width: 140px;
  //   height: 140px;
  //   position: absolute;
  //   top: -9px;
  //   left: -9px;
  //   border: 3px solid #FFF;
  //   border-radius: 100%;
  //   z-index: 2;
  // }
  .circle_icon {
    font-size: 2rem;
    margin-top: 15px;
  }
  .circle_text {
    line-height: 1.2;
  }
  .process_text {
    text-align: left;
  }
  @media screen and (min-width: 480px) {
    .process_circles {
      width: 45%;
    }
  }
  @media screen and (min-width: 769px) {
    .process_circles {
      width: 20%;
    }
  }
</style>
