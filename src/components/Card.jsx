import React from 'react'
const Card = () => {
  return (
    <>
    <section>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card text-color border-0">
            <div className="card-body">
              <p className="">INgredients</p>
              <h2 className="card-title">Better Ingredients</h2>
              <div>Only the best when you choose products offered on our platform high-quality
                ingredients for high quality products! </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card cardbg border-0" style={{backgroundImage:"url('./Assets/h2-b1.jpg.png')"}}>
            <div className="card-body text-color">
              <h5 className="card-title">Vitamin C</h5>
              <p className="card-text desc">Vitamin C as ascorbic acid</p>
              <a href="/" className="card-link fw-bold text-color">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card cardbg border-0" style={{backgroundImage:"url(./Assets/bn2-2.jpg.png)"}} >
            <div className="card-body text-color">
              <h5 className="card-title">Vitamin B3</h5>
              <p className="card-text desc">Niacin for healthy gut and skin</p>
              <a href="/" className="card-link fw-bold text-color">See More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md">
          <div className="card cardbg border-0" style={{backgroundImage:"url('./Assets/bn2-3.jpg.png')"}}>
            <div className="card-body text-color">
              <h5 className="card-title">Magnesium</h5>
              <p className="card-text desc">Boost energy and support muscle</p>
              <a href="/" className="card-link fw-bold text-color">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card cardbg border-0" style={{backgroundImage:"url('./Assets/bn2-4.jpg.png')"}}>
            <div className="card-body text-color">
              <h5 className="card-title">Hyaluronic Acid</h5>
              <p className="card-text desc">For smooth,supple and soft skin!</p>
              <a href="/" className="card-link fw-bold text-color">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card cardbg border-0" style={{backgroundImage:"url('./Assets/bn2-5.jpg.png')"}}>
            <div className="card-body text-color">
              <h5 className="card-title">Lactobacillus</h5>
              <p className="card-text desc">Invigorate your gut microbiome</p>
              <a href="/" className="card-link fw-bold text-color">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card cardbg border-0" style={{backgroundImage:"url('./Assets/bn2-3.jpg.png')"}}>
            <div className="card-body text-color">
              <h5 className="card-title">Magnesium</h5>
              <p className="card-text desc">Boost energy and support muscle</p>
              <a href="/" className="card-link fw-bold text-color">See More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Card
