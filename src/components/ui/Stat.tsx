import React from 'react'

const Stat = ({title, desc, icon}: {title:string, desc:string, icon: React.ReactNode}) => {
  return (
    <div className="stat-item">
        <span className="stat-icon">{icon}</span>
        <strong>{title}</strong>
        <p>{desc}</p>
      </div>
  )
}

export default Stat