import React from 'react'

import { TotalAlerts } from '../TotalAlerts'
import { LastUpdate } from '../LastUpdate'
import { Attrib } from '../Attrib'
import './style.css'

const Footer = () => (
  <footer>
    <TotalAlerts />
    <LastUpdate />
    <Attrib />
  </footer>
)

export { Footer }
