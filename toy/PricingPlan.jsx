import React from 'react';
import './가격표.css'; 
import milkkeyring from './milkkeyring.png'
import pen from './pen.png'
import snowball from './snowball.png'

const PricingPlan = () => {
  return (
    <div className="panel">
      <div className="pricing-plan">
      <img src={milkkeyring} alt="우유키링" className="pricing-img" style={{ width: '200px', height: '200px' }} />
        <h2 className="pricing-header">우유키링</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">신제품</li>
          <li className="pricing-features-item">흔들면 우유도 흔들려요!</li>
        </ul>
        <span className="pricing-price">Free</span>
        <a href="#/" className="pricing-button">Free trial</a>
      </div>

      <div className="pricing-plan">
        <img src={pen} alt="" className="pricing-img"  style={{ width: '200px', height: '200px' }} />
        <h2 className="pricing-header">수룡 볼펜</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">스테디 셀러</li>
          <li className="pricing-features-item">이걸로 필기하면 과탑</li>
        </ul>
        <span className="pricing-price">$150</span>
        <a href="#/" className="pricing-button is-featured">Free trial</a>
      </div>

      <div className="pricing-plan">
        <img src={snowball} alt="" className="pricing-img"  style={{ width: '200px', height: '200px' }}  />
        <h2 className="pricing-header">스노우볼</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">크리스마스 시즌</li>
          <li className="pricing-features-item">이번 크리스마스 선물은 이걸로?</li>
        </ul>
        <span className="pricing-price">$400</span>
        <a href="#/" className="pricing-button">Free trial</a>
      </div>
    </div>
  );
};

export default PricingPlan;
