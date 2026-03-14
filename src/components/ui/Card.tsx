import type React from "react";

type card={
    title:string;
    desc: string;
    icon: React.ReactNode
}

const Card = ({title, desc, icon}:card) => {
  return (
    <div className="f-card">
          <div className="icon-box">{icon}</div>
          <h3>{title}</h3>
          <p>{desc}</p>
      </div>
  )
}

export default Card