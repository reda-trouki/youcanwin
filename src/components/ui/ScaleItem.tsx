import React from 'react'

const ScaleItem = ({title, desc, icon}: {title: string, desc:string, icon:React.ReactNode}) => {
  return (
    <div className="scale-item">
        <div className="icon-box">{icon}</div>
        <strong>{title}</strong>
        <p>{desc}</p>
      </div>
  )
}

export default ScaleItem