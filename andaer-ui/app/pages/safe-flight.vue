<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>安全飞行指南</h1>
          <p>探索最佳实践、法规和技巧，确保您每次飞行都安全可靠</p>
          <div class="hero-buttons">
            <button class="btn btn-primary">查看安全视频</button>
            <button class="btn btn-secondary">下载安全手册</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Safety Guidelines -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>安全飞行原则</h2>
          <p>遵循这些基本准则，确保您和他人的安全</p>
        </div>
        <div class="guidelines">
          <div class="guideline-card">
            <div class="card-header">
              <i class="fas fa-binoculars card-icon"></i>
              <h3 class="card-title">视线内飞行</h3>
            </div>
            <div class="card-content">
              <ul>
                <li>
                  <i class="fas fa-check-circle"></i>始终保持无人机在视线范围内
                </li>
                <li><i class="fas fa-check-circle"></i>避免在障碍物后方飞行</li>
                <li>
                  <i class="fas fa-check-circle"></i>使用观察员协助监控飞行环境
                </li>
                <li>
                  <i class="fas fa-check-circle"></i
                  >避免在雾、雨或低光条件下飞行
                </li>
              </ul>
            </div>
          </div>

          <div class="guideline-card">
            <div class="card-header">
              <i class="fas fa-map-marked-alt card-icon"></i>
              <h3 class="card-title">遵守空域规定</h3>
            </div>
            <div class="card-content">
              <ul>
                <li><i class="fas fa-check-circle"></i>了解当地无人机法规</li>
                <li><i class="fas fa-check-circle"></i>避开机场和禁飞区域</li>
                <li>
                  <i class="fas fa-check-circle"></i>使用空域地图应用检查限制
                </li>
                <li><i class="fas fa-check-circle"></i>飞行高度不超过120米</li>
              </ul>
            </div>
          </div>

          <div class="guideline-card">
            <div class="card-header">
              <i class="fas fa-shield-alt card-icon"></i>
              <h3 class="card-title">安全预防措施</h3>
            </div>
            <div class="card-content">
              <ul>
                <li><i class="fas fa-check-circle"></i>飞行前检查设备状态</li>
                <li>
                  <i class="fas fa-check-circle"></i>保持安全距离（至少30米）
                </li>
                <li>
                  <i class="fas fa-check-circle"></i>避免在人群或车辆上方飞行
                </li>
                <li><i class="fas fa-check-circle"></i>注意天气变化和风速</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safety Tips -->
    <section class="section safety-tips">
      <div class="container">
        <div class="section-title">
          <h2>专业安全提示</h2>
          <p>提升您的飞行安全知识和技能</p>
        </div>
        <div class="tips-container">
          <div class="tip-card">
            <div
              class="tip-image"
              style="
                background:
                  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                  url(&quot;https://images.unsplash.com/photo-1506941433945-99a2aa4eed50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot;);
              "
            ></div>
            <div class="tip-content">
              <div class="tip-number">1</div>
              <h3 class="tip-title">飞行前检查清单</h3>
              <p>
                每次飞行前检查电池电量、螺旋桨状态、固件更新和GPS信号强度。确保遥控器和移动设备已充满电。
              </p>
            </div>
          </div>

          <div class="tip-card">
            <div
              class="tip-image"
              style="
                background:
                  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                  url(&quot;https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot;);
              "
            ></div>
            <div class="tip-content">
              <div class="tip-number">2</div>
              <h3 class="tip-title">返航点设置</h3>
              <p>
                起飞前确保GPS信号良好并设置返航点。定期检查返航点是否准确，特别是在移动位置后。
              </p>
            </div>
          </div>

          <div class="tip-card">
            <div
              class="tip-image"
              style="
                background:
                  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                  url(&quot;https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot;);
              "
            ></div>
            <div class="tip-content">
              <div class="tip-number">3</div>
              <h3 class="tip-title">电池管理</h3>
              <p>
                遵守电池使用规则：避免过度放电，在低温环境中预热电池，飞行时留足返航电量（建议30%）。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Regulations -->
    <section class="section regulations">
      <div class="container">
        <div class="section-title">
          <h2>全球飞行法规</h2>
          <p>了解您所在地区的无人机法规要求</p>
        </div>
        <div class="regulations-grid">
          <div class="regulation-item">
            <i class="fas fa-globe-americas regulation-icon"></i>
            <h3>美国 (FAA)</h3>
            <p>
              无人机重量超过250克需注册，禁止在人群上空飞行，必须通过TRUST测试，遵守400英尺高度限制。
            </p>
          </div>

          <div class="regulation-item">
            <i class="fas fa-globe-europe regulation-icon"></i>
            <h3>欧盟 (EASA)</h3>
            <p>
              分为开放、特定和认证三类。开放类需注册并完成在线培训考试，飞行高度限制120米。
            </p>
          </div>

          <div class="regulation-item">
            <i class="fas fa-globe-asia regulation-icon"></i>
            <h3>中国 (CAAC)</h3>
            <p>
              无人机需实名登记，禁飞区域包括机场、军事设施周边。视距内飞行高度不超过120米。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>常见问题解答</h2>
          <p>关于无人机安全飞行的常见问题</p>
        </div>
        <div class="faq-container">
          <div
            class="faq-item"
            v-for="(faq, index) in faqs"
            :key="index"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <span>{{ faq.question }}</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div
              class="faq-answer"
              :class="{ active: activeFaqIndex === index }"
            >
              <div class="faq-answer-content">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>准备好安全飞行了吗？</h2>
        <p>加入我们的安全飞行课程，获得专业认证并提升您的飞行技能</p>
        <button class="btn btn-primary">报名安全飞行课程</button>
      </div>
    </section>
  </div>
</template>

<script setup>
const faqs = ref([
  {
    question: "飞行前需要做哪些准备？",
    answer:
      "飞行前需要：1) 检查天气状况；2) 确认飞行区域是否允许无人机飞行；3) 检查无人机电池电量和设备状态；4) 校准指南针；5) 设置返航点；6) 确保GPS信号良好；7) 规划飞行路线。",
  },
  {
    question: "无人机在飞行中失去信号怎么办？",
    answer:
      "现代无人机通常具有自动返航功能：1) 保持遥控器开启；2) 尝试重新连接；3) 等待无人机自动返航（通常需要10-30秒）；4) 如果未返回，记录最后位置并联系技术支持。",
  },
  {
    question: "如何安全地操作无人机返航？",
    answer:
      "安全返航步骤：1) 当电池电量剩余30%时开始返航；2) 手动控制返航更安全；3) 保持适当高度避开障碍物；4) 降落时选择开阔平坦区域；5) 接近地面时缓慢下降；6) 确认降落点安全后完成降落。",
  },
  {
    question: "在哪些区域禁止飞行无人机？",
    answer:
      "禁飞区域包括：1) 机场周边（通常8-10公里范围）；2) 军事设施和政府建筑；3) 人群密集区域；4) 国家公园和自然保护区（需特别许可）；5) 禁飞区划定的城市区域；6) 私人领地上空（需许可）。",
  },
]);

const activeFaqIndex = ref(null);

const toggleFaq = (index) => {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index;
};
</script>
<style scoped>
/* Base Styles */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  line-height: 1.3;
  font-weight: 600;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

p {
  margin: 0 0 1rem 0;
  line-height: 1.6;
  color: #555;
}

/* Section Styling */
.section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #3498db;
}

.section-title p {
  max-width: 700px;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  position: relative;
  height: 500px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80");
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #eee;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Button Styles */
.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Guidelines Section */
.guidelines {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.guideline-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.guideline-card:hover {
  transform: translateY(-10px);
}

.card-header {
  background: #3498db;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.card-icon {
  font-size: 1.8rem;
}

.card-title {
  margin: 0;
  color: white;
}

.card-content {
  padding: 20px;
}

.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-content li {
  padding: 8px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.card-content li i {
  color: #3498db;
  margin-top: 3px;
}

/* Safety Tips Section */
.safety-tips {
  background-color: #f9f9f9;
}

.tips-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.tip-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-10px);
}

.tip-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.tip-content {
  padding: 25px;
  position: relative;
}

.tip-number {
  position: absolute;
  top: -40px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.tip-title {
  margin-bottom: 15px;
  color: #2c3e50;
}

/* Regulations Section */
.regulations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.regulation-item {
  text-align: center;
  padding: 40px 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.regulation-item:hover {
  transform: translateY(-10px);
}

.regulation-icon {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;
}

.regulation-item h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}

/* FAQ Section */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 20px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
}

.faq-question i {
  transition: transform 0.3s ease;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #f8f9fa;
}

.faq-answer.active {
  max-height: 300px;
}

.faq-answer-content {
  padding: 20px;
}

.faq-item.active .faq-question i {
  transform: rotate(180deg);
}

/* CTA Section */
.cta {
  padding: 80px 0;
  text-align: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1508704029882-9cb3c86a4644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80");
  background-size: cover;
  background-position: center;
  color: white;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta p {
  max-width: 600px;
  margin: 0 auto 30px;
  font-size: 1.2rem;
  color: #eee;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero {
    height: 400px;
  }

  .hero h1 {
    font-size: 2.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
  }

  .section {
    padding: 60px 0;
  }

  .section-title h2 {
    font-size: 1.8rem;
  }

  .regulation-item {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 350px;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .section-title h2 {
    font-size: 1.5rem;
  }

  .guidelines,
  .tips-container,
  .regulations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
