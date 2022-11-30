import React from 'react'

const Categories = () => {
    const data =[
        {
            cateName: "Tiểu Thuyết",
        },
        {
            cateName: "Truyện Ngắn - Tản Văn",
        },
        {
          cateName: "Light Novel",
        },
        {
          cateName: "Ngôn Tình",
        },
        {
          cateName: "Quản trị - Lãnh Đạo",
        },
        {
          cateName: "Phân Tích Kinh Tế",
        },
        {
          cateName: "Nhân Vật - Bài Học Kinh Doanh",
        },
        {
          cateName: "Chính Trị",
        },
        {
          cateName: "Kinh Tế",
        },    
        {
          cateName: "Kỹ Năng Sống",
        },
        {
          cateName: "Tâm Lý",
        },
      
    ]
  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
                return(
                    <div className='box f_flex' key={index}>
                        <span>{value.cateName}</span>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Categories
