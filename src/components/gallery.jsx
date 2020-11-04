import React, { Component } from 'react';

export class Gallery extends Component {
  render() {
    return (
      <div id='portfolio' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Gallery</h2>
            <p>Have a look at some of the project we have done.</p>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/portfolio/nuces-circle.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>NUCES circle</h4>
                      </div>
                      <img
                        src='img/portfolio/nuces-circle.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/portfolio/dar-ul-tohfa.jpg'
                      title='Dar-ul-Tohfa'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Dar Ul Tohfa</h4>
                      </div>
                      <img
                        src='img/portfolio/dar-ul-tohfa.jpg'
                        className='img-responsive'
                        alt='Dar-ul-Tohfa'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/portfolio/Front Mall (1).jpeg'
                      title='The Front Mall Android'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src='Front Mall (1).jpeg'
                        className='img-responsive'
                        alt='The Front Mall Android'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/portfolio/Front Mall (2).jpeg'
                      title='The Front Mall Web'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src='img/portfolio/Front Mall (2).jpeg'
                        className='img-responsive'
                        alt='The Front Mall Web'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/portfolio/05-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src='img/portfolio/05-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/portfolio/06-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src='img/portfolio/06-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/07-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/08-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/09-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
