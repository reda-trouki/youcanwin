import React from 'react'

type socialButton ={
    link: string;
    icon: React.ReactNode;
}

const SocialButton = ({link, icon}: socialButton) => {
  return (
    <a href={link} className="social-btn">{icon}</a>
  )
}

export default SocialButton