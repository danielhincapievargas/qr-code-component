import React from "react"
import "./QRCard.css"

const QRCard = () => {

  return (
    <>
      <img className="qr-img" src="/imgs/image-qr-code.png" alt="" />
      <div className="text-container">
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take you coding skills to the next level</p>
      </div>
    </>
  )
}

export default QRCard