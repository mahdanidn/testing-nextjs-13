import React from 'react'
import { dm_sans } from '../fonts'

export default function Dashboard() {
  return (
    <div>
      <h1 className={[dm_sans.className, 'text-rose-900 text-3xl'].join(" ")}>Dashboard</h1>
    </div>
  )
}
