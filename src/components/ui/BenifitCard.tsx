import React from 'react'

type benifitCard={
    title:string;
    desc: string;
    icon: React.ReactNode
}

const BenifitCard = ({title, desc, icon}: benifitCard) => {
  return (
    <div className="benefit-card">
      <div className="b-icon">{icon}</div>
      <h3>{title}t</h3>
      <p>{desc}</p>
    </div>
  )
}

export default BenifitCard