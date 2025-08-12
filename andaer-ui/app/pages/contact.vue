<template>
  <div class="contact-page">
    <h1>联系我们</h1>

    <div class="contact-section">
      <h2>在线客服</h2>
      <p>周一至周日：9:00-21:00（北京时间）</p>
      <button class="contact-button">联系在线客服</button>
    </div>

    <div class="contact-section">
      <h2>大疆公众号</h2>
      <p>DJI 大疆创新品牌资讯、产品教学与官方售后服务，尽在于此</p>
      <p>更多官方公众号😊</p>
    </div>

    <div class="contact-section">
      <h2>DJI 大疆服务小程序</h2>
      <p>DJI 大疆创新售后服务申请、服务信息查询、玩机技巧学习，一键直达</p>
    </div>

    <div class="contact-section">
      <h2>热线服务</h2>
      <p>普通话：4007000303</p>
      <p>周一至周日：9:00-21:00（北京时间）</p>
      <p>更多电话支持😊</p>
    </div>

    <div class="contact-section">
      <h2>社交媒体</h2>
      <div class="social-media">
        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          target="_blank"
          class="social-link whatsapp"
        >
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a
          href="https://facebook.com/YOUR_FACEBOOK_PAGE"
          target="_blank"
          class="social-link facebook"
        >
          <i class="fab fa-facebook"></i> Facebook
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add any necessary script logic here
</script>

<style scoped>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.contact-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.contact-section h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.contact-button {
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

.contact-button:hover {
  background-color: #0055aa;
}

.social-media {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
}

.social-link.whatsapp {
  background-color: #25d366;
}

.social-link.facebook {
  background-color: #4267b2;
}

.social-link:hover {
  opacity: 0.9;
}
</style>
