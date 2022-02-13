import React from "react";

const Container2 = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div
          id='carousel-example-generic'
          className='carousel-bg carousel slide'
          data-ride='carousel'
        >
          {/* Indicators */}
          <ol className='carousel-indicators'>
            <li
              data-target='#carousel-example-generic'
              data-slide-to={0}
              className='active'
            />
            <li data-target='#carousel-example-generic' data-slide-to={1} />
            <li data-target='#carousel-example-generic' data-slide-to={2} />
          </ol>
          {/* Wrapper for slides */}
          <div className='carousel-inner' role='listbox'>
            <div
              className='item active'
              style={{
                backgroundImage: 'url(https://unsplash.it/1240/530?image=721)',
              }}
            >
              <div className='carousel-caption'>...</div>
            </div>
            <div
              className='item'
              style={{
                backgroundImage: 'url(https://unsplash.it/1240/530?image=723)',
              }}
            >
              <div className='carousel-caption'>...</div>
            </div>
            <div
              className='item'
              style={{
                backgroundImage: 'url(https://unsplash.it/1240/530?image=681)',
              }}
            >
              <div className='carousel-caption'>...</div>
            </div>
          </div>
          {/* Controls */}
          <a
            className='left carousel-control'
            href='#carousel-example-generic'
            role='button'
            data-slide='prev'
          >
            <span
              className='glyphicon glyphicon-chevron-left'
              aria-hidden='true'
            />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='right carousel-control'
            href='#carousel-example-generic'
            role='button'
            data-slide='next'
          >
            <span
              className='glyphicon glyphicon-chevron-right'
              aria-hidden='true'
            />
            <span className='sr-only'>Next</span>
          </a>
        </div>
        <section className='details'>
          <h1>Bootstrap 3 Carousel Slider Explained</h1>
          <div className='back-link'>
            <a href='http://thecodeblock.com/create-bootstrap-carousel-fade-transition-effect'>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='20px'
                height='20px'
                viewBox='0 0 400.004 400.004'
                style={{ enableBackground: 'new 0 0 400.004 400.004' }}
                fill='rgb(234,234,234)'
                xmlSpace='preserve'
              >
                <g>
                  <path
                    d='M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
                c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
                c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
                C400.004,190.438,392.251,182.686,382.688,182.686z'
                  />
                </g>
              </svg>
              Back to article
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Container2;
