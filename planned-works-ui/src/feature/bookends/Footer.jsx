import React from 'react'

import { TotalAlerts } from '../TotalAlerts'
import { LastUpdate } from '../LastUpdate'
import { Attrib } from '../Attrib'
import './style.css'

const Footer = ({ alerts, lastSync, lastUpdate }) => (
  <footer>
    <TotalAlerts {...{ alerts }} />
    <LastUpdate {...{ lastSync, lastUpdate }} />
    <Attrib />
  </footer>
)

export { Footer }
