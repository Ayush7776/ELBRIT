import React from 'react'
import Image from 'next/image';
const Header = () => {
  return (
    <>
    <header className="banner bg">
    <h1 className="mt-1 brandname">Essential Vitamins</h1>
    <div className="container bg  text-center">
      <div className="row align-items-center">
        <div className="col text-start">
          <p className="fs-6 text-secondary">Online Medical Supplices</p>
          <h6 className="fs-3">Get Your Vitamins & Minerals</h6>
          <button className="btn expore rounded-pill mt-2" style={{background:"#17414f",color:"white"}}>Expore Now</button>
        </div>
        <div className="col">
          <Image className="img-fluid" width={500} priority={1} height={300} alt='logo' src="/Assets/f2-1.png.png"/>
        </div>
        <div className="col ms-5 mt-5">
          <div>
            <div className="vitans my-2">
              <div className="rounded-circle p-3 expore m-2 vitansbrand"></div>
              <div className="my-0">
                <div className="fw-bold">Vitamins</div>
                <div className="desc text-secondary">Incress Vitamins And Minerals In Your diet</div>
              </div>
            </div>
            <div className="vitans my-2">
              <div className="rounded-circle p-3 expore m-2 vitansbrand"></div>
              <div className="my-0">
                <div className="fw-bold">Vitamins</div>
                <div className="desc text-secondary">Incress Vitamins And Minerals In Your diet</div>
              </div>
            </div>
            <div className="vitans my-2">
              <div className="rounded-circle p-3 expore m-2 vitansbrand"></div>
              <div className="my-0">
                <div className="fw-bold">Vitamins</div>
                <div className="desc text-secondary">Incress Vitamins And Minerals In Your diet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mb-5">
        <div className=" rounded-circle p-3 bg-secondary m-1"></div>
        <div className="rounded-circle p-3 bg-secondary m-1 "></div>
      </div>

      <section className="dark-bg">
        <div className="container poup">
          <div className="row gy-4">
            
            <div className="col-md-4 feature-box">
              <div className="icon">🔬</div>
              <h5 className="fw-bold">Clinically Studied</h5>
              <p className="px-5 desc">All products that we offer have undergone lab and safety tests.</p>
            </div>
            
            <div className="col-md-4 feature-box">
              <div className="icon">🥗</div>
              <h5 className="fw-bold">Vegetarian Friendly</h5>
              <p className="px-5 desc">We have a wide selection of vegetarian products to meet your needs.</p>
            </div>
            
            <div className="col-md-4 feature-box">
              <div className="icon">🌏</div>
              <h5 className="fw-bold">Made In India</h5>
              <p className="px-5 desc">Shop local and explore health products made right here in India.</p>
            </div>
            
            <div className="col-md-4 feature-box">
              <div className="icon">🚚</div>
              <h5 className="fw-bold">Free Shipping</h5>
              <p className="px-5 desc">We deliver to your door with no shipping costs on your orders.</p>
            </div>
            
            <div className="col-md-4 feature-box">
              <div className="icon">✅</div>
              <h5 className="fw-bold">No Risk</h5>
              <p className="px-5 desc">We ensure that all products are safe and within their use-by date.</p>
            </div>
            
            <div className="col-md-4 feature-box">
              <div className="icon">🌱</div>
              <h5 className="fw-bold">GMO Free</h5>
              <p className="px-5 desc">Natural, no modified products and derivatives for those who need it.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
    </>
  )
}

export default Header;
