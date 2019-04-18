import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import SliderImage from './BeforeAfterSliderImage.js';
import './css/before-after.css';

class App extends Component {

  render() {

    const photos = [
      { width: 3, height: 2, slider: true,
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-7.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-9.jpg',
        caption: "People gathered outside the building.",
        credit: "Boris Tsang / Sun Photography Editor" },
        { slider: false,
          src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-8.jpg', width: 3, height: 2,
        caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
        credit: "Boris Tsang / Sun Photography Editor"},
        { width: 3, height: 2, slider: true,
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-18.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-3.jpg',
        caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
        credit: "Boris Tsang / Sun Photography Editor" },
        { slider: false,
          src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-15.jpg', width: 3, height: 2,
        caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
        credit: "Boris Tsang / Sun Photography Editor"},
        { width: 3, height: 2, slider: true,
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-20.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-1.jpg',
        caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
        credit: "Boris Tsang / Sun Photography Editor" },
        { slider: false,
          src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-6.jpg', width: 3, height: 2,
        caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
        credit: "Boris Tsang / Sun Photography Editor"},
        { width: 3, height: 2, slider: true,
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-12.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-7.jpg',
        caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
        credit: "Boris Tsang / Sun Photography Editor" },
        { width: 3, height: 2, slider: true,
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-16.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-6.jpg',
        caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
        credit: "Boris Tsang / Sun Photography Editor" },
        { width: 3, height: 2, slider: true,
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-11.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-8.jpg',
        caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
        credit: "Boris Tsang / Sun Photography Editor" }
    ];

    return (
      <div className="before-after-photos-page-wrapper">
        <div className="before-after-photos-page-header">
          <div className="before-after-photos-header-gradient"></div>
          <div className="before-after-title-container">
            <h2 className="before-after-gallery-title"> Willard Straight Takeover </h2>
            <h3 className="before-after-gallery-subtitle"> Before and After </h3>
            {/* <p className="photos-credit"><span> Photographs by Cornell Daily Sun Photography Department </span></p> */}
          </div>
        </div>
        <div className="before-after-gallery-container">
          <Gallery style={{maxHeight: "fit-content"}} photos={photos} columns={1} direction="column" ImageComponent={SliderImage}/>
        </div>
      </div>
    );
  }
}

export default App;
