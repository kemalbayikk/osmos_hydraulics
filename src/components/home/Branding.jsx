import React from 'react'

const Branding = () => {

  const data = [
    {
        id : "01",
        heading : "Yenilikçi Çözümler",
        desc : "Tasarladığımız yenilikçi çözümler ile hedefimiz olan alanlarda hızlı ve pratik müdahale şansını müşterilerimize sunuyoruz"
    },
    {
        id : "02",
        heading : "Genç ve Dinamik Kadro",
        desc : "Genç ve dinamik kadromuz yeni mühendislik trendlerine hakim ve çalışmaya istekli yapısı ile son teknoloji hidrolik çözümleri üretiyoruz"
    },
    {
        id : "03",
        heading : "Şirketinize Özel Çözümler",
        desc : "Mühendis kadromuz ve TOBB işbirliği ile şirketinize özel çözümler üretiyoruz"
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

export default Branding