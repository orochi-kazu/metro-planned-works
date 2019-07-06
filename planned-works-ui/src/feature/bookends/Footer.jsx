import React from 'react'

import { TotalAlerts } from '../TotalAlerts'
import { LastUpdate } from '../LastUpdate'
import { Attrib } from '../Attrib'
import './style.css'

const Footer = ({ alerts, lastUpdate }) => (
  <footer>
    <TotalAlerts {...{ alerts }} />
    <LastUpdate {...{ lastUpdate }} />
    <Attrib />
  </footer>
)

export { Footer }
