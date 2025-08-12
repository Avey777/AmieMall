<template>
  <div class="about-page">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="container">
        <h1>关于<span>天空科技</span></h1>
        <p class="subtitle">引领无人机科技，创造无限可能</p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="company-intro">
      <div class="container">
        <div class="intro-content">
          <h2>我们的故事</h2>
          <p>
            天空科技成立于2015年，是中国领先的无人机解决方案提供商。我们专注于消费级和专业级无人机的研发、生产和销售，致力于为全球客户提供高品质的无人机产品和技术服务。
          </p>
          <p>
            经过多年的发展，我们已经成长为行业内的标杆企业，产品广泛应用于航拍摄影、农业植保、电力巡检、地理测绘等多个领域。
          </p>
          <div class="achievement-grid">
            <div class="achievement-item">
              <span class="number">10+</span>
              <span class="label">年行业经验</span>
            </div>
            <div class="achievement-item">
              <span class="number">50+</span>
              <span class="label">专利技术</span>
            </div>
            <div class="achievement-item">
              <span class="number">1000+</span>
              <span class="label">企业客户</span>
            </div>
            <div class="achievement-item">
              <span class="number">10万+</span>
              <span class="label">满意用户</span>
            </div>
          </div>
        </div>
        <div class="intro-image">
          <img src="/images/p7.webp" alt="天空科技团队" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- 我们的使命 -->
    <section class="mission-section">
      <div class="container">
        <h2>我们的使命</h2>
        <div class="mission-cards">
          <div class="mission-card">
            <i class="fas fa-bullseye"></i>
            <h3>愿景</h3>
            <p>
              成为全球无人机技术创新的领导者，推动无人机技术在各行业的深度应用。
            </p>
          </div>
          <div class="mission-card">
            <i class="fas fa-rocket"></i>
            <h3>使命</h3>
            <p>
              通过创新技术降低无人机使用门槛，让更多人享受无人机带来的便利与乐趣。
            </p>
          </div>
          <div class="mission-card">
            <i class="fas fa-heart"></i>
            <h3>价值观</h3>
            <p>客户至上、技术创新、诚信经营、追求卓越。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-section">
      <div class="container">
        <h2>核心团队</h2>
        <div class="team-grid">
          <div class="team-member">
            <img src="/images/p7.webp" alt="CEO 张伟" loading="lazy" />
            <h3>张伟</h3>
            <p class="position">创始人 & CEO</p>
            <p class="bio">无人机行业资深专家，拥有15年航空电子研发经验。</p>
          </div>
          <div class="team-member">
            <img src="/images/p7.webp" alt="CTO 李娜" loading="lazy" />
            <h3>李娜</h3>
            <p class="position">首席技术官</p>
            <p class="bio">前大疆创新核心技术骨干，飞行控制系统专家。</p>
          </div>
          <div class="team-member">
            <img src="/images/p7.webp" alt="CMO 王强" loading="lazy" />
            <h3>王强</h3>
            <p class="position">市场总监</p>
            <p class="bio">数字营销专家，成功打造多个科技品牌。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="partners-section">
      <div class="container">
        <h2>合作伙伴</h2>
        <div class="partners-grid">
          <img src="/images/p7.webp" alt="大疆" loading="lazy" />
          <img src="/images/p7.webp" alt="Autel" loading="lazy" />
          <img src="/images/p7.webp" alt="索尼" loading="lazy" />
          <img src="/images/p7.webp" alt="佳能" loading="lazy" />
          <img src="/images/p7.webp" alt="百度" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- 联系我们CTA -->
    <section class="contact-cta">
      <div class="container">
        <h2>想了解更多？</h2>
        <p>我们随时准备回答您的任何问题，为您提供专业的无人机解决方案。</p>
        <NuxtLink to="/contact" class="cta-button">联系我们</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "关于我们 - 天空科技无人机",
  meta: [
    {
      name: "description",
      content:
        "了解天空科技无人机公司 - 我们的故事、使命、团队和成就。中国领先的无人机解决方案提供商。",
    },
  ],
});
</script>

<style scoped>
.about-page {
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 英雄区域 */
.hero-section {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/p7.webp");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 120px 20px;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.hero-section h1 span {
  color: #4caf50;
}

.hero-section .subtitle {
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
}

/* 公司简介 */
.company-intro {
  padding: 80px 0;
}

.company-intro .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.intro-content h2 {
  font-size: 2rem;
  margin-bottom: 25px;
  color: #222;
}

.intro-content p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.intro-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.achievement-item {
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.achievement-item .number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 5px;
}

.achievement-item .label {
  font-size: 0.9rem;
  color: #666;
}

/* 使命部分 */
.mission-section {
  background: #f9f9f9;
  padding: 80px 0;
}

.mission-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
}

.mission-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.mission-card {
  background: white;
  padding: 40px 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-10px);
}

.mission-card i {
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 20px;
}

.mission-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

/* 团队部分 */
.team-section {
  padding: 80px 0;
}

.team-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #f5f5f5;
}

.team-member h3 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.team-member .position {
  color: #4caf50;
  font-weight: 500;
  margin-bottom: 15px;
}

.team-member .bio {
  color: #666;
}

/* 合作伙伴 */
.partners-section {
  background: #f9f9f9;
  padding: 80px 0;
}

.partners-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
  align-items: center;
}

.partners-grid img {
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.partners-grid img:hover {
  filter: grayscale(0);
  opacity: 1;
}

/* 联系我们CTA */
.contact-cta {
  background: #4caf50;
  color: white;
  text-align: center;
  padding: 80px 0;
}

.contact-cta h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact-cta p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 30px;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #4caf50;
  padding: 15px 40px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #f5f5f5;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .company-intro .container {
    grid-template-columns: 1fr;
  }

  .intro-image {
    order: -1;
    margin-bottom: 40px;
  }

  .hero-section {
    padding: 80px 20px;
  }

  .hero-section h1 {
    font-size: 2.2rem;
  }

  .mission-cards,
  .team-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .achievement-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
