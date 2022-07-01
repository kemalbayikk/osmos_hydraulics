import React from 'react'

const BrandingTwo = () => {

  const data = [
    {
        id : "01",
        heading : "Şirket Özelliği 1",
        desc : "Şirket Özelliği Açıklaması 1- Şirket Özelliği Açıklaması 1- Şirket Özelliği Açıklaması 1- Şirket Özelliği Açıklaması 1"
    },
    {
        id : "02",
        heading : "Şirket Özelliği 1",
        desc : "Şirket Özelliği Açıklaması 2- Şirket Özelliği Açıklaması 2- Şirket Özelliği Açıklaması 2- Şirket Özelliği Açıklaması 2"
    },
    {
        id : "03",
        heading : "Şirket Özelliği 3",
        desc : "Şirket Özelliği Açıklaması 3- Şirket Özelliği Açıklaması 3- Şirket Özelliği Açıklaması 3- Şirket Özelliği Açıklaması 3"
    },
  ]

  return (
    <>
        <section className='Branding'>
            <div className='container grid'>
                {data.map((value) => {
                    return (
                        <div className='box flex'>
                            <div className='text'>
                                <h1>{value.id}</h1>
                            </div>
                            <div className='para'>
                                <h2>{value.heading}</h2>
                                <p>{value.desc}</p>
                            </div>    
                        </div>
                    )
                })}
            </div>

        </section>
    </>
  )
}

export default BrandingTwo