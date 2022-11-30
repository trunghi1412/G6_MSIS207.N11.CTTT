import React from 'react'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
            <div className='left row'>
                <i className='fa fa-phone'></i>
                <label htmlFor=''>+ 84 (8) 24567889</label>
                <i className='fa fa-envelope'></i>
                <label htmlFor=''>support@tb.vn</label>
            </div>

            <div className='right row RText'>
                <label>Theme FAQ's</label>
                <label>Need Helps</label>

                <span><i className='fa fa-credit-card'></i></span>
                <label htmFor=''>Credit</label>

                <span><i className='fa fa-money-bill'></i></span>
                <label htmFor=''>Cash</label>

            </div>
        </div>
      </section>
    </>
  )
}

export default Head
