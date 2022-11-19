import React from "react";

const MyFooter = () => (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} className='text-center text-lg-start text-muted'>
      <section className='border-bottom'>
        <div className='container text-center text-md-start mt-5'>
        &nbsp;
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Victorgraciaweb
              </h6>
              <p>
                Desarrollador web y apps freelance de productos tecnológicos para profesionales, pequeñas compañías y agencias digitales.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Dapp</h6>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <i className='fas fa-envelope me-3'></i>
                victorgraciaweb.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4 bg-dark text-white' >
        © 2022 Copyright
      </div>
    </footer>
);

export default MyFooter;