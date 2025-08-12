<template>
  <div class="services-page">
    <section class="hero-section">
      <div class="container">
        <h1>专业无人机服务</h1>
        <p>为您提供全方位的无人机解决方案，从销售到售后一站式服务</p>
      </div>
    </section>

    <section class="service-categories">
      <div class="container">
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <h3>无人机销售</h3>
          <ul>
            <li>最新款消费级无人机</li>
            <li>专业航拍设备</li>
            <li>行业应用解决方案</li>
            <li>定制化服务</li>
          </ul>
          <NuxtLink to="/products" class="service-btn">查看产品</NuxtLink>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-cogs"></i>
          </div>
          <h3>技术支持</h3>
          <ul>
            <li>设备操作培训</li>
            <li>飞行技巧指导</li>
            <li>软件使用教学</li>
            <li>航拍后期处理</li>
          </ul>
          <NuxtLink to="/support" class="service-btn">获取支持</NuxtLink>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-tools"></i>
          </div>
          <h3>维修保养</h3>
          <ul>
            <li>专业检测设备</li>
            <li>原厂配件更换</li>
            <li>快速维修服务</li>
            <li>年度保养计划</li>
          </ul>
          <NuxtLink to="/repair" class="service-btn">申请服务</NuxtLink>
        </div>
      </div>
    </section>

    <section class="value-proposition">
      <div class="container">
        <h2>为什么选择我们的服务？</h2>
        <div class="value-grid">
          <div class="value-item">
            <i class="fas fa-check-circle"></i>
            <h3>正品保障</h3>
            <p>所有产品均为官方正品，享受完整售后服务</p>
          </div>
          <div class="value-item">
            <i class="fas fa-headset"></i>
            <h3>专业团队</h3>
            <p>10年以上无人机行业经验的技术支持团队</p>
          </div>
          <div class="value-item">
            <i class="fas fa-shield-alt"></i>
            <h3>安全保障</h3>
            <p>提供飞行保险和意外损坏保障计划</p>
          </div>
          <div class="value-item">
            <i class="fas fa-shipping-fast"></i>
            <h3>快速响应</h3>
            <p>全国主要城市24小时内上门服务</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="container">
        <h2>需要更多帮助？</h2>
        <p>我们的客服团队随时为您解答关于无人机的任何问题</p>
        <div class="contact-methods">
          <a href="tel:4007000303" class="contact-btn phone-btn">
            <i class="fas fa-phone"></i> 400-700-0303
          </a>
          <a
            href="https://wa.me/8613800138000"
            class="contact-btn whatsapp-btn"
          >
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
          <NuxtLink to="/contact" class="contact-btn email-btn">
            <i class="fas fa-envelope"></i> 在线留言
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 可以在这里添加页面逻辑
useHead({
  title: "无人机服务 - 专业无人机销售与售后",
  meta: [
    {
      name: "description",
      content:
        "提供专业无人机销售、技术支持、维修保养等全方位服务。正品保障，专业团队，快速响应。",
    },
  ],
});
</script>

<style scoped>
.services-page {
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/drone-hero-bg.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-section p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Service Categories */
.service-categories {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.service-categories .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-icon {
  font-size: 2.5rem;
  color: #0066cc;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #222;
}

.service-card ul {
  margin: 20px 0;
  padding-left: 20px;
}

.service-card li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.service-btn {
  display: inline-block;
  background: #0066cc;
  color: white;
  padding: 12px 25px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s;
}

.service-btn:hover {
  background: #0055aa;
}

/* Value Proposition */
.value-proposition {
  padding: 80px 0;
  text-align: center;
}

.value-proposition h2 {
  font-size: 2rem;
  margin-bottom: 50px;
  color: #222;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-item {
  padding: 30px 20px;
}

.value-item i {
  font-size: 2.5rem;
  color: #0066cc;
  margin-bottom: 20px;
}

.value-item h3 {
  font-size: 1.3rem;
  margin: 15px 0;
}

.value-item p {
  color: #666;
  line-height: 1.6;
}

/* Contact CTA */
.contact-cta {
  background-color: #0066cc;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.contact-cta h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact-cta p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 40px;
}

.contact-methods {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.contact-btn:hover {
  opacity: 0.9;
}

.phone-btn {
  background: white;
  color: #0066cc;
}

.whatsapp-btn {
  background: #25d366;
  color: white;
}

.email-btn {
  background: #333;
  color: white;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 20px;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .contact-methods {
    flex-direction: column;
    align-items: center;
  }

  .contact-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
