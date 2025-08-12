<template>
  <div class="safety-privacy-page">
    <section class="hero-section">
      <div class="container">
        <h1>安全与隐私</h1>
        <p>我们致力于保护您的数据和无人机的安全飞行</p>
      </div>
    </section>

    <section class="safety-section">
      <div class="container">
        <h2>无人机安全指南</h2>
        <div class="safety-grid">
          <div class="safety-card">
            <div class="icon">
              <Icon name="material-symbols:flight-class" />
            </div>
            <h3>飞行前检查</h3>
            <ul>
              <li>检查电池电量和设备状态</li>
              <li>确认飞行环境安全</li>
              <li>了解当地法规和禁飞区</li>
            </ul>
          </div>

          <div class="safety-card">
            <div class="icon">
              <Icon name="mdi:weather-cloudy" />
            </div>
            <h3>天气条件</h3>
            <ul>
              <li>避免在强风、雨雪天气飞行</li>
              <li>注意温度对电池性能的影响</li>
              <li>保持视线范围内飞行</li>
            </ul>
          </div>

          <div class="safety-card">
            <div class="icon">
              <Icon name="mdi:account-group" />
            </div>
            <h3>人群安全</h3>
            <ul>
              <li>远离人群和动物</li>
              <li>保持安全距离</li>
              <li>尊重他人隐私</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="privacy-section">
      <div class="container">
        <h2>隐私政策</h2>
        <div class="privacy-content">
          <div class="privacy-block">
            <h3>数据收集</h3>
            <p>我们仅收集必要的用户信息用于订单处理和售后服务，包括：</p>
            <ul>
              <li>联系信息（姓名、地址、电话、邮箱）</li>
              <li>支付信息（通过安全支付网关处理）</li>
              <li>设备注册信息（用于保修和固件更新）</li>
            </ul>
          </div>

          <div class="privacy-block">
            <h3>数据保护</h3>
            <p>我们采用行业标准的安全措施保护您的数据：</p>
            <ul>
              <li>SSL加密传输</li>
              <li>定期安全审计</li>
              <li>严格的内部访问控制</li>
              <li>符合GDPR等隐私法规</li>
            </ul>
          </div>

          <div class="privacy-block">
            <h3>无人机数据</h3>
            <p>我们的无人机产品设计考虑了您的隐私：</p>
            <ul>
              <li>飞行数据本地存储选项</li>
              <li>可选择的云同步功能</li>
              <li>清晰的数据收集提示</li>
              <li>一键删除个人数据的选项</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="compliance-section">
      <div class="container">
        <h2>法规合规</h2>
        <div class="compliance-content">
          <p>我们的无人机产品符合以下安全标准和法规要求：</p>
          <div class="compliance-badges">
            <div class="badge">
              <Icon name="simple-icons:faadacertificate" />
              <span>FAA认证</span>
            </div>
            <div class="badge">
              <Icon name="simple-icons:ce" />
              <span>CE认证</span>
            </div>
            <div class="badge">
              <Icon name="simple-icons:iso" />
              <span>ISO 9001</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <h2>有隐私或安全问题？</h2>
        <p>我们的团队随时为您解答疑问</p>
        <NuxtLink to="/contact" class="contact-button"> 联系我们 </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// 可以在这里添加必要的逻辑
</script>

<style scoped>
.safety-privacy-page {
  color: #333;
}

.hero-section {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/drone-safety-bg.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #222;
}

.safety-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.safety-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.safety-card:hover {
  transform: translateY(-5px);
}

.safety-card h3 {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #0066cc;
}

.safety-card ul {
  padding-left: 20px;
}

.safety-card li {
  margin-bottom: 10px;
}

.icon {
  font-size: 2.5rem;
  color: #0066cc;
}

.privacy-section {
  background: #f9f9f9;
  padding: 80px 0;
}

.privacy-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.privacy-block {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.privacy-block h3 {
  color: #0066cc;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.compliance-section {
  padding: 80px 0;
}

.compliance-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.compliance-content p {
  margin-bottom: 40px;
}

.compliance-badges {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.badge .icon {
  font-size: 3rem;
}

.contact-section {
  background: #0066cc;
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.contact-section h2 {
  color: white;
}

.contact-button {
  display: inline-block;
  background: white;
  color: #0066cc;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background: #f0f0f0;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 20px;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }
}
</style>
