import React from 'react'
import { footerNames } from '../constants/appConfig'

const FooterSection = React.memo(() => (
  <footer className="footer-section">
    <p className="footer-title">Developed by</p>
    <div className="footer-names">
      {footerNames.map((name) => (
        <span key={name} className="footer-name">{name}</span>
      ))}
    </div>
  </footer>
))

export default FooterSection
