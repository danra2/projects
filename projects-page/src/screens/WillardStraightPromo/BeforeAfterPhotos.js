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
      caption: "Students cross the former Triphammer Bridge over Fall Creek towards central campus, Edward L. Whitfield '71 in the lead.",
      credit: "Fenton Sands '70"},
      { display: 'multiple', src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-14.jpg', width: 3, height: 2,
      caption: "",
      credit: "Fenton Sands '70"},
      { display: 'multiple', src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-13.jpg', width: 3, height: 2,
      caption: "",
      credit: "Fenton Sands '70"},
      { display: 'multiple', src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-5.jpg', width: 3, height: 2,
      caption: "Once inside, the students secure the doors. Eric D. Evans '69 is seen here at the right.",
      credit: "Fenton Sands '70"}
    ]

    const photos2 = [
      { width: 3, height: 2, display: 'slider',
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-12.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-7.jpg',
        caption: "Occupiers sit in front of what is now the Willard Straight Hall Music Room.",
        credit: "Fenton Sands '70 & Boris Tsang / Sun Photography Editor" },
      { display: 'full',
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-8.jpg', width: 3, height: 2,
      caption: "An Ivy Room scene captures some calm moments.",
      credit: "Fenton Sands '70"},
      { width: 3, height: 2, display: 'slider',
        before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-11.jpg',
        after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-8.jpg',
        caption: "A group of occupiers confer in what was then the second-floor Straight Game Room.",
        credit: "Fenton Sands '70 & Boris Tsang / Sun Photography Editor" },
      { display: 'full',
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-15.jpg', width: 3, height: 2,
      caption: "After getting ready to leave on the first day, a warning was expressed at this meeting that going out might subject students to attack. The occupiers decided to stay overnight.",
      credit: "Fenton Sands '70"},
      { width: 3, height: 2, display: 'slider',
      before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-20.jpg',
      after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-1.jpg',
      caption: "The march ended at the sloped front lawn of 320 Wait Ave., where a seven-point agreement between the black students and the administrator would be signed.",
      credit: "Fenton Sands '70 & Boris Tsang / Sun Photography Editor" },
      { display: 'full',
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-6.jpg', width: 3, height: 2,
      caption: "Occupiers watch as campus police (then known as the Safety Division) begin to gather outside.",
      credit: "Fenton Sands '70"},
      { width: 3, height: 2, display: 'slider',
      before: 'https://cornellsun.com/wp-content/uploads/2019/04/FSands-16.jpg',
      after: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-WSH50-6.jpg',
      caption: "As rumors spread that white students were planning armed assaults, the black occupiers chose to bring in guns. Here, the group gathers in the Straight lobby on Sunday morning, April 20, preparing to march out.",
      credit: "Fenton Sands '70" }
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
          <p>Courtesy of Fenton Sands ’70</p>
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
