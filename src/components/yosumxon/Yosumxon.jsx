import React from 'react'
import rox  from '../../assets/rox.png'
import './Yosumxon.css'
const Yosumxon = () => {
  return (
    <div>
      <section className='section'>
        <div>
          <h3 className='h1'>Check out your monthly <br /> summary with a glance.</h3>
          <p className='p'>Vivamus facilisis, neque sit amet venenatis euismod, <br /> neque viverra velit, sit amet vehicula sapien elit eget tortor.</p>
        </div>
        <div>
          <img src={rox} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Yosumxon
