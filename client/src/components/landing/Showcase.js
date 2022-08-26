import React from 'react'
import Login from 'src/pages/login';

const Showcase = () => {
  return (
    <>
        <section className="showcase">
            <div className="overlay">
                <Login className="login"/>
            </div>
        </section>
    </>
  )
}

export default Showcase;