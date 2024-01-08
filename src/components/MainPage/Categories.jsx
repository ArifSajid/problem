import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/Single, Bed.svg",
      cateName: "Armchair",
    },
    {
      cateImg: "./images/category/Single, Bed.svg",
      cateName: "Sofa",
    },
    {
      cateImg: "./images/category/Single, Bed.svg",
      cateName: "Bed",
    },
    {
      cateImg: "./images/category/Single, Bed.svg",
      cateName: "Light",
    },

  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
