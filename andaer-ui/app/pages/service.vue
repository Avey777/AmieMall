<template>
  <div class="services-page">
    <section class="hero-section">
      <div class="container">
        <!-- 专业无人机服务 -->
        <h1>Professional drone services</h1>
        <!-- 为您提供全方位的无人机解决方案，从销售到售后一站式服务 -->
        <p>Comprehensive drone solutions from sales to after-sales service.</p>
      </div>
    </section>

    <section class="service-categories">
      <div class="container">
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-shopping-cart" />
          </div>
          <!-- 无人机销售 -->
          <h3>Drone sales</h3>
          <ul>
            <li>The latest consumer grade drone</li>
            <li>Professional aerial photography equipment</li>
            <!-- <li>行业应用解决方案</li> -->
            <!-- <li>定制化服务</li> -->
          </ul>
          <!-- <NuxtLink to="/products" class="service-btn">查看产品</NuxtLink> -->
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-cogs" />
          </div>
          <!-- 技术支持 -->
          <h3>Technical support</h3>
          <ul>
            <li>Equipment operation training</li>
            <li>Flight skills instruction</li>
            <li>Software usage tutorial</li>
            <!-- <li>航拍后期处理</li> -->
          </ul>
          <!-- <NuxtLink to="/support" class="service-btn">获取支持</NuxtLink> -->
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-tools" />
          </div>
          <!-- 维修保养 -->
          <h3>Maintenance and repair</h3>
          <ul>
            <li>Professional testing equipment</li>
            <li>Original equipment replacement</li>
            <!-- <li>快速维修服务</li> -->
            <!-- <li>年度保养计划</li> -->
          </ul>
          <!-- <NuxtLink to="/repair" class="service-btn">申请服务</NuxtLink> -->
        </div>
      </div>
    </section>

    <section class="value-proposition">
      <div class="container">
        <!-- 为什么选择我们的服务？ -->
        <h2>Why choose our service?</h2>
        <div class="value-grid">
          <div class="value-item">
            <i class="fas fa-check-circle" />
            <h3>Genuine product guarantee</h3>
            <p>
              All products are official genuine with full after-sales service.
            </p>
          </div>
          <div class="value-item">
            <i class="fas fa-headset" />
            <h3>Professional team</h3>
            <p>
              A more professional technical support team with extensive drone
              industry experience.
            </p>
          </div>
          <div class="value-item">
            <i class="fas fa-shield-alt" />
            <h3>Safety assurance</h3>
            <!-- 提供飞行保险和意外损坏保障计划 -->
            <p>
              Professional safety training and flight protection program
              provided.
            </p>
          </div>
          <div class="value-item">
            <i class="fas fa-shipping-fast" />
            <h3>Fast response</h3>
            <!-- 全国主要城市24小时内上门服务 -->
            <p>24/7 online support service</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="container">
        <!-- 需要更多帮助？ -->
        <h2>Need more assistance?</h2>
        <!-- 我们的客服团队随时为您解答关于无人机的任何问题 -->
        <p>
          Our customer service team is ready to answer any questions you have
          about drones.
        </p>
        <!-- <div class="contact-methods">
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
        </div> -->
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
