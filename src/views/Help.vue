<template>
<section class="wrapper">
  <div class="banner help_banner"></div>
  <div class="content_padding">
    <div class="container">
      <div class="help_box">
        <div class="help_title">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          如何在服務開始前進一步溝通詢問？
        </div>
        <div class="help_text">
          你可以加入我們的Line:
          <a href="" class="line_link">
            <img src="@/assets/images/help/line.png" class="img-fluid"/>
          </a>
          <br/>
          或是FB私訊：
          <a href="http://m.me/108972294340080" target="_blank" class="fb_link">http://m.me/108972294340080</a>
        </div>
      </div>
      <div class="help_box">
        <div class="help_title">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          為什麼你們價格會比其他行銷公司優惠？
        </div>
        <div class="help_text">
          因為母公司已有成熟健全的電商團隊，執行面也都是由我們親自執行。
        </div>
      </div>
      <div class="help_box">
        <div class="help_title">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          請問執行款項如何支付？
        </div>
        <div class="help_text">
          款項需於執行前支付訂金，中期款、尾款。
        </div>
      </div>
      <div class="help_box">
        <div class="help_title">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          如果使用包月方案最短約期要簽多久？
        </div>
        <div class="help_text">
          如果使用包月的話，最短約期為一個月。
        </div>
      </div>
      <div class="help_box">
        <div class="help_title">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          請問付款方式
        </div>
        <div class="help_text">
          我們提供匯款、現金支付。
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  mounted() {
    document.querySelectorAll('.help_title').forEach((item, i) => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.help_text').forEach((text) => {
          text.classList.remove('on');
        });
        document.querySelectorAll('.help_text')[i].classList.toggle('on');
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.help_banner {
    background-image: url('~@/assets/images/help/banner.jpg');
}
.help_box {
  border-bottom: 1px solid #cfcfcf;
  margin: 1rem auto;
}
.help_title {
  color: #b46f54;
  margin-top: .5rem;
  padding-left: .5rem;
  cursor: pointer;
  &:hover {
    color: #674639
  }
}
.help_icon {
  margin-right: .5rem;
}
.help_text {
  margin-left: 2.3rem;
  margin-bottom: .5rem;
  transition: all .4s ease;
  height: 0;
  overflow: hidden;
  color: #777777;
}
.on {
  height: auto;
  margin-top: 1rem;
}
.line_link {
  width: 150px;
  display: inline-block;
  vertical-align: middle;
  transition: all .2s ease;
  &:hover {
    filter: brightness(1.1);
  }
}
.fb_link {
  color: #b46f54;
  transition: all .2s ease;
  &:hover {
    filter: brightness(1.2);
  }
}
</style>
