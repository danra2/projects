import React, { Component } from 'react';
import './css/willard-timeline.css';
import Footer from '../../components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="wsh-timeline-app">
        <div className="timeline-header"></div>
        <div className="timeline-caption-container">
          <p> Drawn by Alicia Wang</p>
        </div>
        <div className="timeline-title-container">
          <h2 className="timeline-title"> Occupations Throughout Cornell’s History </h2>
          <h3 className="timeline-subtitle"> A Timeline of Events </h3>
        </div>
        <div className="timeline">
          <div id="first-entry-container" className="entry-container left">
            <div className="entry-content">
              <img className="entry-photo" alt="entry-photo-1" src="https://cornellsun.com/wp-content/uploads/2019/04/Copy-of-Occupations-Through-History-1-5-1-1972.png"/>
              <div className="entry-text-container">
                <h2>Carpenter Hall, 1972</h2>
                <p>Hundreds of anti-war demonstrators seize Carpenter Hall to protest “Cornell’s complicity in the war machine,” singling out the Aeronautical 
                  Laboratory’s work with the Defense Department. They leave after five days, after a judge issues an injunction against them. "</p>
              </div>
            </div>
          </div>
          <div className="entry-container right">
            <div className="entry-content">
              <img className="entry-photo" alt="entry-photo-2" src="https://cornellsun.com/wp-content/uploads/2019/04/Copy-of-Occupations-Through-History-2-Day-Hall-Takeover-04-20-76.png"/>
              <div className="entry-text-container">
                <h2>Day Hall &amp; Admissions Office, 1976</h2>
                <p>Almost 200 Black students occupy Day Hall for 10 hours to protest the firing of assistant financial aid director Herbert Parker. Earlier in 
                  the day, students had briefly occupied the University Admissions office at 410 Thurston Ave."</p>
              </div>
            </div>
          </div>
          <div className="entry-container left">
            <div className="entry-content">
              <div className="entry-photo-filler" alt="entry-photo-3"/>
              <div className="entry-text-container">
                <h2>Johnson Museum, 1978</h2>
                <p>After Board of Trustees chairman Robert Purcell ’32 says in an interview with The Sun that black students need to “integrate into the white 
                  man’s world,” and that Cornell might consider phasing out the Africana Studies center, 200 students blockade the Johnson Museum, trapping 
                  President Frank Rhodes and several trustees inside. The crowd disperses after Rhodes has a heated, and at one moment physical, conversation 
                  with Africana director James Turner. </p>
              </div>
            </div>
          </div>
          <div className="entry-container right">
            <div className="entry-content">
              <img className="entry-photo" alt="entry-photo-4" src="https://cornellsun.com/wp-content/uploads/2019/04/Copy-of-Occupations-Through-History-3-Day-Hall-Occupation-of-Rhodes’-Office-03-25-81.png"/>
              <div className="entry-text-container">
                <h2>President’s Office, 1981</h2>
                <p>Seventeen students occupy President Rhodes’ office after Cornell announces an 18 percent tuition hike. On Rhodes’ orders, armed Public 
                  Safety officers in riot gear eject the students. The tuition hikes are passed by the Board of Trustees the next day as hundreds of 
                  students rally outside Statler.</p>
              </div>
            </div>
          </div>
          <div className="entry-container left">
            <div className="entry-content">
              <img className="entry-photo" alt="entry-photo-5" src="https://cornellsun.com/wp-content/uploads/2019/04/Copy-of-Occupations-Through-History-4-Day-Hall-Protest-04-26-85.png"/>
              <div className="entry-text-container">
                <h2>Day Hall, 1985</h2>
                <p>Over the course of two weeks, hundreds of students conduct a sit-in in Day Hall to demand an end to Cornell’s continued investment in 
                  Apartheid South Africa. Cornell Public Safety officers arrest over 900 students. McGraw Tower is briefly occupied as well. </p>
              </div>
            </div>
          </div>
          <div className="entry-container right">
            <div className="entry-content">
            <div className="entry-photo-filler" alt="entry-photo-3"/>
              <div className="entry-text-container">
                <h2>Day Hall, 1991</h2>
                <p>Over 200 primarily black and Latino students, barricade and occupy Day Hall for 15 hours to protest proposed cuts to financial aid, 
                  which students feared would disproportionately affect minority students, and the ongoing search for a director of the Hispanic 
                  American Studies Program. After the protest, Cornell commits to maintaining current levels of aid, and replaces the chair of the 
                  search committee. </p>
              </div>
            </div>
          </div>
          <div className="entry-container left">
            <div className="entry-content">
              <img className="entry-photo" alt="entry-photo-7" src="https://cornellsun.com/wp-content/uploads/2019/04/Copy-of-Occupations-Through-History-5-Day-Hall-11-20-93.png"/>
              <div className="entry-text-container">
                <h2>Day Hall, 1993</h2>
                <p> Over 100 Latino students, under the leadership of Eduardo Peñalver ’94 (now dean of Cornell Law School), occupy Day Hall for 
                  four days. Sparked by vandalism of an Arts Quad art installation, the protest called for improved Latino recruitment, admissions, 
                  aid and other policies, and eventually led to the creation of the Latino Living Center.</p>
              </div>
            </div>
          </div>
          <div className="entry-container right">
            <div className="entry-content">
            <div className="entry-photo-filler" alt="entry-photo-3"/>
              <div className="entry-text-container">
                <h2>Willard Straight, 2014</h2>
                <p>A group of students calling themselves the Ad Hoc Committee for Student Democracy take over a Student Assembly meeting in Memorial Hall. 
                  The Committee was protesting the SA’s decision the previous week to indefinitely table a resolution calling for Cornell to divest from 
                  companies doing business in Israel.</p>
              </div>
            </div>
          </div>
          <div className="entry-container left">
            <div className="entry-content">
            <div className="entry-photo-filler" alt="entry-photo-3"/>
              <div className="entry-text-container">
                <h2>Willard Straight, 2017</h2>
                <p>After a black student is beaten by white students using racial slurs in Collegetown, 300 protestors led by Black Students United 
                  deliver a list of demands to President Pollack in Day Hall, and then march to Willard Straight Hall, which they occupy for 
                  several hours. .</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
