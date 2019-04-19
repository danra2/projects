import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import SliderImage from './BeforeAfterSliderImage.js';
import './css/before-after.css';
import Footer from '../../components/Footer/Footer.js';

class App extends Component {

  render() {

    const photos = [
      { width: 3, height: 2, display: 'slider',
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-7.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-9.jpg',
        caption: "Students for a Democratic Society members, defending the Takeover, circle the once-famous Stump (where colorful campus event messages were painted by students each morning.",
        credit: "Fenton Sands '70 & Boris Tsang / Sun Photography Editor" },
      { width: 3, height: 2, display: 'slider',
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-18.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-3.jpg',
        caption: "After exiting the Straight, the protesters march across the Arts Quad, accompanied by Cornell Safety Division officers.",
        credit: "Fenton Sands '70& Boris Tsang / Sun Photography Editor" }
    ];

    const photos3 = [
      { display: 'multiple', src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-2.jpg', width: 3, height: 2,
      caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
      credit: "Boris Tsang / Sun Photography Editor"},
      { display: 'multiple', src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-14.jpg', width: 3, height: 2,
      caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
      credit: "Boris Tsang / Sun Photography Editor"},
      { display: 'multiple', src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-13.jpg', width: 3, height: 2,
      caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
      credit: "Boris Tsang / Sun Photography Editor"},
      { display: 'multiple', src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-5.jpg', width: 3, height: 2,
      caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
      credit: "Boris Tsang / Sun Photography Editor"}
    ]

    const photos2 = [
      { width: 3, height: 2, display: 'slider',
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-12.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-7.jpg',
        caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
        credit: "Fenton Sands '70 & Boris Tsang / Sun Photography Editor" },
      { display: 'full',
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-8.jpg', width: 3, height: 2,
      caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
      credit: "Boris Tsang / Sun Photography Editor"},
      { width: 3, height: 2, display: 'slider',
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-11.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-8.jpg',
        caption: "A group of occupiers confer in what was then the second-floor Straight Game Room.",
        credit: "Fenton Sands '70 & Boris Tsang / Sun Photography Editor" },
      { display: 'full',
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-15.jpg', width: 3, height: 2,
      caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
      credit: "Boris Tsang / Sun Photography Editor"},
      { width: 3, height: 2, display: 'slider',
      before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-20.jpg',
      after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-1.jpg',
      caption: "The march ended at the sloped front lawn of 320 Wait Ave., where a seven-point agreement between the black students and the administrator would be signed.",
      credit: "Fenton Sands '70 & Boris Tsang / Sun Photography Editor" },
      { display: 'full',
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-6.jpg', width: 3, height: 2,
      caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
      credit: "Boris Tsang / Sun Photography Editor"},
      { width: 3, height: 2, display: 'slider',
      before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-16.jpg',
      after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-6.jpg',
      caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
      credit: "Boris Tsang / Sun Photography Editor" }
    ]

    return (
      <div className="before-after-photos-page-wrapper">
        <div className="before-after-photos-page-header">
          <div className="before-after-row">
            <div className="before-after-column">
              <img className="before-after-column-img" src="https://cornellsun.com/wp-content/uploads/2019/04/FSands-3.jpg" alt="Mountains"/>
            </div>
            <div className="before-after-column">
              <img className="before-after-column-img" src="https://cornellsun.com/wp-content/uploads/2019/04/FSands-4.jpg" alt="Snow"/>
            </div>
          </div>
        </div>
        <div className="before-after-caption-container">
          <p>Fenton Sands ’70</p>
        </div>
        <div className="before-after-title-container">
          <h2 className="before-after-gallery-title"> Inside the Occupied Straight </h2>
          <h3 className="before-after-gallery-subtitle"> Fenton Sands ’70, One of the Afro-American Society Members Who Took Over the Straight in 1969, Shares His 
          Insider Photos of History Unfolding </h3>
          {/* <p className="photos-credit"><span> Photographs by Cornell Daily Sun Photography Department </span></p> */}
        </div>
        <div className="before-after-gallery-container">
          <Gallery key="gallery-1" style={{maxHeight: "fit-content"}} photos={photos} columns={1} direction="column" ImageComponent={SliderImage}/>
          <Gallery key="gallery-2"  style={{maxHeight: "fit-content"}} photos={photos3} columns={2} direction="row" ImageComponent={SliderImage}/>
          <Gallery key="gallery-3"  style={{maxHeight: "fit-content"}} photos={photos2} columns={1} direction="column" ImageComponent={SliderImage}/>
          {/* <Gallery style={{maxHeight: "fit-content"}} photos={photos} columns={1} direction="column" ImageComponent={SliderImage}/> */}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
