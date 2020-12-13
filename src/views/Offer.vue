<template>
<section class="wrapper">
  <div class="banner offer_banner"></div>
  <div class="content_padding">
    <div class="container service_contain">
      <div class="service_box">
        <h1 class="title">
          <span><i class="fab fa-bandcamp"></i></span>
          找我們執行
        </h1>
        <div class="chart">
          <div class="chart_color_box">
            <div class="chart_color chart_color1">時間省下 <span class="chart_num">85%</span></div>
            <div class="chart_color chart_color2">每月薪資支出省下 <span class="chart_num">92%</span></div>
          </div>
        </div>
      </div>
      <div class="service_box">
        <h1 class="title">包月商品銷售頁設計 服務內容</h1>
        <div class="service_text">
          <span class="offer_icon"><i class="fas fa-lightbulb"></i></span>文案＋版面設計一次擁有<br>
          <span class="offer_icon"><i class="fas fa-lightbulb"></i></span>銷售頁內含產品規格、細節及使用情境等<br>
          <span class="offer_icon"><i class="fas fa-lightbulb"></i></span>銷售頁主視覺定位確認<br>
          <span class="offer_icon"><i class="fas fa-lightbulb"></i></span>降低消費者對產品疑慮，提高信任感<br>
          <span class="offer_icon"><i class="fas fa-lightbulb"></i></span>製作高轉換銷售頁，有效提升顧客留存率<br>
          <span class="offer_icon"><i class="fas fa-lightbulb"></i></span>提高消費者下單意願，並有效提升客單價
        </div>
      </div>
    </div>
  </div>
  <div class="content_padding">
    <div class="container">
      <h1 class="plan_h1">選擇方案</h1>
      <div class="plan_box">
        <div class="plan">
          <div class="plan_container">
            <div class="plan_title">
              方案A
              <span class="diver">-</span>
              <span class="mounth">1個月</span>
            </div>
            <div class="plan_price">
              <span class="plan_price_icon">$</span>19,800
            </div>
            <ul class="plan_text">
              <li>網站產品內頁企劃</li>
              <li>網站產品文案、設計 x1</li>
              <li>網路行銷活動banner x1</li>
              <li>RWD響應式設計</li>
              <li>官網後台產品項目上架維護</li>
            </ul>
          </div>
        </div>
        <div class="plan">
          <div class="plan_container">
            <div class="plan_title">
              方案B
              <span class="diver">-</span>
              <span class="mounth">3個月</span>
            </div>
            <div class="plan_price">
              <span class="plan_price_icon">$</span>59,400
            </div>
            <ul class="plan_text">
              <li>網站產品內頁企劃</li>
              <li>網站產品文案、設計 x3</li>
              <li>網路行銷活動banner x2</li>
              <li>RWD響應式設計</li>
              <li>官網後台產品項目上架維護</li>
              <li>指定電子商務通路：主圖設計，各款規格尺寸</li>
              <li>商品部落客和網紅行銷廣告建議與溝通</li>
            </ul>
          </div>
        </div>
        <div class="plan">
          <div class="plan_container">
            <div class="plan_title">
              方案C
              <span class="diver">-</span>
              <span class="mounth">6個月</span>
            </div>
            <div class="plan_price">
              <span class="plan_price_icon">$</span>118,800
            </div>
            <ul class="plan_text">
              <li>網站產品內頁企劃</li>
              <li>網站產品文案、設計 x6</li>
              <li>網路行銷活動banner x5</li>
              <li>RWD響應式設計</li>
              <li>官網後台產品項目上架維護</li>
              <li>指定電子商務通路：主圖設計，各款規格尺寸</li>
              <li>商品部落客和網紅行銷廣告建議與溝通</li>
              <li>商品行銷規劃諮詢及網路廣告建議</li>
              <li>SEO網站優化建議</li>
            </ul>
          </div>
        </div>
        <div class="plan">
          <div class="plan_container">
            <div class="plan_title">
              方案D
              <span class="diver">-</span>
              <span class="mounth">12個月</span>
            </div>
            <div class="plan_price">
              <span class="plan_price_icon">$</span>237,600
            </div>
            <ul class="plan_text">
              <li>網站產品內頁企劃</li>
              <li>網站產品文案、設計 x12</li>
              <li>網路行銷活動banner x12</li>
              <li>RWD響應式設計</li>
              <li>官網後台產品項目上架維護</li>
              <li>指定電子商務通路：主圖設計，各款規格尺寸</li>
              <li>商品部落客和網紅行銷廣告建議與溝通</li>
              <li>商品行銷規劃諮詢及網路廣告建議</li>
              <li>SEO網站優化建議</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.offer_banner {
    background-image: url('~@/assets/images/offer/banner.jpeg');
}
.service_contain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.service_box {
  width: 100%;
}
.service_text {
  line-height: 2.5em;
  color: #624033;
  font-size: 1.2rem;
}
.offer_icon {
  color: #ffb600;
  margin-right: 8px;
}
.chart {
  width: 100%;
  height: 265px;
  border-bottom: 2px solid #b36e53;
  border-left: 2px solid #b36e53;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,.5);
  margin-bottom: 2rem;
}
.chart_color_box {
  width: 100%;
}
.chart_color {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  background-image: linear-gradient(100deg, #ff7b00, #ffb600);
  color: #FFF;
  margin: 40px 0;
}
.chart_color1 {
  width: 82%;
}
.chart_color2 {
  width: 90%;
}
.chart_num {
  font-weight: bold;
  font-size: 21px;
}
.plan_h1 {
  color: #624033;
  font-weight: normal;
  padding: 1.5rem 0;
  text-align: center;
}
.plan_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.plan {
  width: 100%;
  background-color: #f7f7f7;
  margin: 10px 0;
}
.plan_container {
  border: 1px solid #b36d52;
  height: 100%;
}
.plan_title {
  background-color: #b36d52;
  color: #FFF;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
}
.diver {
  color: #FFF;
  padding: 0 3px;
}
.mounth {
  color: #ffe8af;
}
.plan_price {
  font-size: 2rem;
  padding: .5rem 1rem;
  text-align: center;
  background-color: #FFF;
  font-weight: bold;
  color: #995100;
}
.plan_text {
  list-style: none;
  padding: 0 1rem;
  li {
    margin: 15px 0;
  }
}
.plan_price_icon {
  font-size: 1.2rem;
  vertical-align: super;
  margin-right: 5px;
}
@media screen and (min-width: 769px) {
  .plan {
    width: 49%;
  }
}
@media screen and (min-width: 992px) {
  .plan {
    width: 24%;
  }
  .service_box {
    width: 47%;
  }
  .chart {
    margin-bottom: 0;
  }
}
</style>
