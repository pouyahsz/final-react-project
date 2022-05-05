import React from 'react';
import { FooterIcon, FooterListColumn } from './footer-components/footer-components';
import './footer-style.scss';
import { ReactComponent as DeliveryIcon } from '../../images/delivery.svg';
import { ReactComponent as OrderIcon } from '../../images/order-status.svg';
import { ReactComponent as ReturnIcon } from '../../images/return.svg';
import { ReactComponent as SupportIcon } from '../../images/support-center.svg';
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-top-section">

                <div className="container">
                    <div className="footer-top-section-items">
                            <FooterIcon caption="Visit our Support Center">
                                <DeliveryIcon />
                            </FooterIcon>
                            <FooterIcon caption="Visit our Support Center">
                                <OrderIcon />
                            </FooterIcon>
                            <FooterIcon caption="Visit our Support Center">
                                <ReturnIcon />
                            </FooterIcon>
                            <FooterIcon caption="Visit our Support Center">
                                <SupportIcon />
                            </FooterIcon>

                        </div>
                </div>
            </div>
            <div className="footer-bottom-section">
                <div className="container">
                <div className="footer-top-section-items row">
                    <FooterListColumn dataList={
                        [['Check Order Status','https://www.bestbuy.com/profile/ss/orderlookup'],
                        ['Shipping, Delivery & Pickup','https://www.bestbuy.com/site/help-topics/shipping-delivery-store-pickup/pcmcat316000050003.c?id=pcmcat316000050003'],
                        ['Returns & Exchanges','https://www.bestbuy.com/site/help-topics/return-exchange-policy/pcmcat260800050014.c?id=pcmcat260800050014'],
                        ['Price Match Guarantee','https://www.bestbuy.com/site/customer-service/price-match-guarantee/pcmcat290300050002.c?id=pcmcat290300050002'],
                        ['Product Recalls','https://www.bestbuy.com/site/help-topics/product-recalls/pcmcat114800050015.c?id=pcmcat114800050015']
                    ]
                        } title="Order and Purchases"/>
                    <FooterListColumn dataList={
                        [['Visit our Support Center','https://www.bestbuy.com/site/electronics/customer-service/pcmcat87800050001.c?id=pcmcat87800050001'],
                        ['Shop with an Expert','https://www.bestbuy.com/services/triage/shopping'],
                        ['Schedule a Service','https://www.bestbuy.com/services/triage/home'],
                        ['Manage an Appointment','https://www.bestbuy.com/dossier/service/appointmentfinder'],
                        ['Protection & Support Plans','https://www.bestbuy.com/site/electronics/services/pcmcat1528819595254.c?id=pcmcat1528819595254'],
                        ['Haul Away & Recycling','https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025']
                    
                    ]
                        } title="Partnerships"/>
                    <FooterListColumn dataList={
                        [['Check Order Status','https://www.bestbuy.com/profile/ss/orderlookup'],
                        ['Shipping, Delivery & Pickup','https://www.bestbuy.com/site/help-topics/shipping-delivery-store-pickup/pcmcat316000050003.c?id=pcmcat316000050003'],
                        ['Returns & Exchanges','https://www.bestbuy.com/site/help-topics/return-exchange-policy/pcmcat260800050014.c?id=pcmcat260800050014'],
                        ['Price Match Guarantee','https://www.bestbuy.com/site/customer-service/price-match-guarantee/pcmcat290300050002.c?id=pcmcat290300050002'],
                        ['Product Recalls','https://www.bestbuy.com/site/help-topics/product-recalls/pcmcat114800050015.c?id=pcmcat114800050015'],
                        ['Trade-In Program','https://www.bestbuy.com/site/services/best-buy-trade-in/pcmcat133600050011.c?id=pcmcat133600050011']
                    
                    ]
                        } title="Payment Options"/>
                    <FooterListColumn dataList={
                        [['Visit our Support Center','https://www.bestbuy.com/site/electronics/customer-service/pcmcat87800050001.c?id=pcmcat87800050001'],
                        ['Shop with an Expert','https://www.bestbuy.com/services/triage/shopping'],
                        ['Schedule a Service','https://www.bestbuy.com/services/triage/home'],
                        ['Manage an Appointment','https://www.bestbuy.com/dossier/service/appointmentfinder'],
                        ['Protection & Support Plans','https://www.bestbuy.com/site/electronics/services/pcmcat1528819595254.c?id=pcmcat1528819595254'],
                        ['Haul Away & Recycling','https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025']
                    
                    ]
                        } title="Rewards and Membership
                        "/>
                    <FooterListColumn dataList={
                        [['Check Order Status','https://www.bestbuy.com/profile/ss/orderlookup'],
                        ['Shipping, Delivery & Pickup','https://www.bestbuy.com/site/help-topics/shipping-delivery-store-pickup/pcmcat316000050003.c?id=pcmcat316000050003'],
                        ['Returns & Exchanges','https://www.bestbuy.com/site/help-topics/return-exchange-policy/pcmcat260800050014.c?id=pcmcat260800050014'],
                        ['Price Match Guarantee','https://www.bestbuy.com/site/customer-service/price-match-guarantee/pcmcat290300050002.c?id=pcmcat290300050002'],
                        ['Product Recalls','https://www.bestbuy.com/site/help-topics/product-recalls/pcmcat114800050015.c?id=pcmcat114800050015'],

                    
                    ]
                        } title="Support and Services"/>
                    <FooterListColumn dataList={
                        [['Visit our Support Center','https://www.bestbuy.com/site/electronics/customer-service/pcmcat87800050001.c?id=pcmcat87800050001'],
                        ['Shop with an Expert','https://www.bestbuy.com/services/triage/shopping'],
                        ['Schedule a Service','https://www.bestbuy.com/services/triage/home']
                    
                    ]
                        } title="About Best Buy"/>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="links">
                    <ul>
                        <li><a href="https://www.bestbuy.com/site/help-topics/accessibility/pcmcat1496336482680.c?id=pcmcat1496336482680">Accessibility</a></li>
                        <li><a href="https://www.bestbuy.com/site/help-topics/terms-and-conditions/pcmcat204400050067.c?id=pcmcat204400050067">Terms and Conditions</a></li>
                        <li><a href="https://www.bestbuy.com/site/help-topics/privacy-policy/pcmcat204400050062.c?id=pcmcat204400050062">Privacy</a></li>
                        <li><a href="https://www.bestbuy.com/site/help-topics/privacy-policy/pcmcat204400050062.c?id=pcmcat204400050062">Interest-Based Ads</a></li>
                        <li><a href="https://www.bestbuy.com/site/help-topics/privacy-policy/pcmcat204400050062.c?id=pcmcat204400050062">California Privacy Rights</a></li>
                        <li><a href="https://www.bestbuy.com/site/help-topics/privacy-policy/pcmcat204400050062.c?id=pcmcat204400050062">Do Not Sell My Personal Information</a></li>
                        <li><a href="https://www.bestbuy.com/site/help-topics/privacy-policy/pcmcat204400050062.c?id=pcmcat204400050062">California Supply Chain Transparency Act</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
