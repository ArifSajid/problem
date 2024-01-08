import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Regal Do Lobo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Hatil-Loren",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Regal Furniture",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Cultured White",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Partex Furniture",
    },
 
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
