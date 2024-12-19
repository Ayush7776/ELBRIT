import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
    <footer className="text-white py-5">
    <div className="container">
      <div className="row text-center mb-4">
        <div className="col-md-4 mb-4">
          <div className="d-flex align-items-center justify-content-center rounded-4 p-3"
            style={{backgroundColor:"#215d72"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone"
              viewBox="0 0 16 16">
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <div className="mx-4 text-start">
              <div className="mb-0 desc">Phone Number</div>
              <div className="fw-bold desc">+974 3118 1843</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex align-items-center justify-content-center rounded-4 p-3"
            style={{backgroundColor:"#215d72"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-voicemail"
              viewBox="0 0 16 16">
              <path
                d="M7 8.5A3.5 3.5 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5m-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0" />
            </svg>
            <div className="mx-4 text-start">
              <div className="mb-0 desc">Email Address</div>
              <div className="fw-bold desc">Elbrithcqhr@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex align-items-center justify-content-center rounded-4 p-3"
            style={{backgroundColor:"#215d72"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-map"
              viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z" />
            </svg>
            <div className="mx-4 text-start">
              <div className="mb-0 desc">Office Location</div>
              <div className="fw-bold desc">Ambassador Street, Zone 61,</div>
            </div>
          </div>
        </div>

    
        <div className="row text-start">
          <div className="col-md mb-3 p-3">
            <Image src="/Assets/log.png" alt="Elbrit Logo" style={{width:"auto",height:"auto"}} height={100} width={300} className="img-fluid mb-3"/>
          </div>
          <div className="col-md mb-3 desc p-3">
            <p>Your health, physical and emotional well-being is important to us. We are always by your side and have
              made
              it even easier for you to find the necessary vitamins.</p>
          </div>
          <div className="col-md">
          </div>
          <div className="col-12">
            <p className="small">&copy; Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
