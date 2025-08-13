<template>
  <div class="safety-privacy-page">
    <!-- <section class="hero-section">
      <div class="container">
        <h1>安全与隐私</h1>
        <p>我们致力于保护您的数据和无人机的安全飞行</p>
      </div>
    </section> -->

    <section class="privacy-section">
      <div class="container">
        <h2>Privacy policy</h2>
        <div class="privacy-content">
          <div class="privacy-block">
            <h3>Data collection</h3>
            <p>
              We only collect essential user information for order processing
              and after-sales service, including:
            </p>
            <ul>
              <li>Contact information (name, address, phone number, email)</li>
              <li>
                Payment information (processed through secure payment gateways)
              </li>
              <!-- <li>设备注册信息（用于保修和固件更新）</li> -->
            </ul>
          </div>

          <div class="privacy-block">
            <h3>Data protection</h3>
            <p>
              We employ industry-standard security measures to protect your
              data:
            </p>
            <ul>
              <!-- <li>SSL加密传输</li> -->
              <!-- <li>定期安全审计</li> -->
              <li>Strict internal access controls</li>
              <li>Compliance with privacy regulations such as GDPR</li>
            </ul>
          </div>

          <!-- <div class="privacy-block">
            <h3>无人机数据</h3>
            <p>我们的无人机产品设计考虑了您的隐私：</p>
            <ul>
              <li>飞行数据本地存储选项</li>
              <li>可选择的云同步功能</li>
              <li>清晰的数据收集提示</li>
              <li>一键删除个人数据的选项</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <section class="compliance-section">
      <div class="container">
        <h2>Regulatory compliance</h2>
        <div class="compliance-content">
          <p>
            Our drone products comply with the following safety standards and
            regulatory requirements:
          </p>
          <div class="compliance-badges">
            <div class="badge">
              <Icon name="simple-icons:faadacertificate" />
              <span>FAA certification</span>
            </div>
            <div class="badge">
              <Icon name="simple-icons:ce" />
              <span>CE certification</span>
            </div>
            <div class="badge">
              <Icon name="simple-icons:iso" />
              <span>ISO 9001</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="contact-section">
      <div class="container">
        <h2>有隐私或安全问题？</h2>
        <p>我们的团队随时为您解答疑问</p>
        <NuxtLink to="/contact" class="contact-button"> 联系我们 </NuxtLink>
      </div>
    </section> -->
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
