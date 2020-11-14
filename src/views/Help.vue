<template>
<section class="wrapper">
  <div class="banner help_banner"></div>
  <div class="content_padding">
    <div class="container">
      <div>
        <div class="help_title" @click="toggleText">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          如何在服務開始前進一步溝通詢問？
        </div>
        <div class="help_text" ref="helpText">
          你可以加入我們的Line: 加入好友<br/>
          或是FB私訊：<a href="https://www.facebook.com/%E6%95%85%E4%BA%8B%E8%A8%AD%E8%A8%88story-design-108972294340080/"></a>
        </div>
      </div>
      <div>
        <div class="help_title" @click="toggleText">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          為什麼你們價格會比其他行銷公司優惠？
        </div>
        <div class="help_text" ref="helpText">
          因為母公司已有成熟健全的電商團隊，執行面也都是由我們親自執行。
        </div>
      </div>
      <div>
        <div class="help_title" @click="toggleText">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          請問執行款項如何支付？
        </div>
        <div class="help_text" ref="helpText">
          款項需於執行前支付訂金，中期款、尾款。
        </div>
      </div>
      <div>
        <div class="help_title" @click="toggleText">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          如果使用包月方案最短約期要簽多久？
        </div>
        <div class="help_text" ref="helpText">
          如果使用包月的話，最短約期為一個月。
        </div>
      </div>
      <div>
        <div class="help_title" @click="toggleText">
          <span class="help_icon">
            <i class="fas fa-question-circle"></i>
          </span>
          請問付款方式
        </div>
        <div class="help_text" ref="helpText">
          我們提供匯款、現金支付。
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  methods: {
    toggleText() {
      this.$refs.helpText.classList.toggle('on');
    },
  },
};
</script>

<style lang="scss" scoped>
.help_banner {
    background-image: url('~@/assets/images/help/banner.jpg');
}
.help_title {
  color: #b46f54;
  margin-bottom: 1rem;
  padding-bottom: .5rem;
  padding-left: .5rem;
  border-bottom: 1px solid #cfcfcf;
  cursor: pointer;
  &:hover {
    color: #674639
  }
}
.help_icon {
  margin-right: .5rem;
}
.help_text {
  margin-left: 2.2rem;
  transition: all .4s ease;
  height: 0;
  overflow: hidden;
}
.on {
  height: auto;
}
</style>
