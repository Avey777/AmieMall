<template>
  <div class="after-sales-policy">
    <section class="hero-section">
      <div class="container">
        <h1>售后政策</h1>
        <p>我们为所有无人机产品提供全面的售后保障服务</p>
      </div>
    </section>

    <section class="policy-content">
      <div class="container">
        <div class="policy-card">
          <h2><i class="icon-warranty" /> 保修政策</h2>
          <div class="policy-details">
            <h3>保修期限</h3>
            <ul>
              <li>所有无人机主机：自购买日起 <strong>12个月</strong></li>
              <li>电池及充电器：自购买日起 <strong>6个月</strong></li>
              <li>遥控器：自购买日起 <strong>12个月</strong></li>
              <li>配件（螺旋桨等）：自购买日起 <strong>3个月</strong></li>
            </ul>

            <h3>保修范围</h3>
            <ul>
              <li>在正常使用条件下出现的材料或工艺缺陷</li>
              <li>非人为损坏的功能性故障</li>
            </ul>

            <h3>不保修范围</h3>
            <ul>
              <li>人为损坏或意外事故造成的故障</li>
              <li>未经授权的拆卸或改装</li>
              <li>自然灾害等不可抗力因素造成的损坏</li>
              <li>正常磨损或消耗品</li>
            </ul>
          </div>
        </div>

        <div class="policy-card">
          <h2><i class="icon-return" /> 退换货政策</h2>
          <div class="policy-details">
            <h3>7天无理由退换</h3>
            <p>自收到商品之日起7日内，商品完好未使用，可申请无理由退换货。</p>

            <h3>15天质量问题退换</h3>
            <p>
              自收到商品之日起15日内，出现非人为损坏的质量问题，可申请退换货。
            </p>

            <h3>退换货条件</h3>
            <ul>
              <li>商品及配件、包装完整</li>
              <li>提供原始购买凭证</li>
              <li>无人为损坏痕迹</li>
            </ul>
          </div>
        </div>

        <div class="policy-card">
          <h2><i class="icon-service" /> 售后服务流程</h2>
          <div class="policy-details">
            <div class="service-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>联系客服</h3>
                <p>通过官网在线客服、电话或邮箱联系我们的售后团队</p>
              </div>
            </div>

            <div class="service-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>问题诊断</h3>
                <p>我们的技术人员将协助您诊断问题并提供解决方案</p>
              </div>
            </div>

            <div class="service-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>维修/退换</h3>
                <p>根据问题性质安排维修或退换货服务</p>
              </div>
            </div>

            <div class="service-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>完成服务</h3>
                <p>确认问题解决并收集您的反馈</p>
              </div>
            </div>
          </div>
        </div>

        <div class="policy-card">
          <h2><i class="icon-contact" /> 联系我们</h2>
          <div class="policy-details contact-info">
            <p><strong>售后服务电话：</strong> 400-888-XXXX</p>
            <p><strong>售后服务邮箱：</strong> support@dronesales.com</p>
            <p><strong>服务时间：</strong> 周一至周日 9:00-18:00</p>
            <p>
              <strong>维修中心地址：</strong> XX市XX区XX路XX号无人机售后服务中心
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.after-sales-policy {
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero-section {
  background: linear-gradient(135deg, #1a73e8, #0d47a1);
  color: white;
  padding: 80px 0;
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

.policy-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
}

.policy-card h2 {
  color: #1a73e8;
  font-size: 1.8rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.policy-card h2 i {
  margin-right: 15px;
  font-size: 1.5rem;
}

.policy-details h3 {
  color: #444;
  font-size: 1.3rem;
  margin: 25px 0 15px;
}

.policy-details ul {
  padding-left: 20px;
}

.policy-details li {
  margin-bottom: 8px;
}

.service-step {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
}

.step-number {
  background: #1a73e8;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.contact-info p {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .policy-card {
    padding: 20px;
  }

  .policy-card h2 {
    font-size: 1.5rem;
  }
}
</style>
