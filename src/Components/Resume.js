import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var tools = this.props.data.tools.map(function(tools){
        // return <div><em>{tools.name}</em></div>
        // return  <Column>{tools.name}</Column>
        return <div key={tools.title} className="columns portfolio-item">
        <div className="item-wrap" style={{background: "transparent"}}>
         <a href={tools.url} title={tools.title}>
            <img  src={`Images/Skill/${tools.image}`} style={{height: "90px"}}/>
            <div className="overlay">
               <div className="portfolio-item-meta">
              <h5>{tools.name}</h5>
               </div>
             </div>
           <div className="link-icon"><i className="fa fa-link"></i></div>
         </a>
       </div>
     </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row tools">

         <div className="twelve columns collapsed">

         <div className="three columns header-col">
            <h1><span>Tools</span></h1>
         </div>
          <div className="nine columns main-col">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {tools}
            </div>
          </div>
            
          </div>
      </div>

      <div className="row">

         <div className="twelve columns collapsed">

         <div className="three columns header-col">
            <h1><span>Courses</span></h1>
         </div>
          <div className="nine columns main-col">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns responsive">
      <div className="item-wrap">
        <a target="_blank" href="https://hacktiv8.com/verify/glng/kevin-hadi-sutanto/">
          <img src="images/skill/hacktiv8.png" alt="hacktiv8"/>
        </a>
      </div>
    </div>
            </div>
          </div>
            
          </div>
      </div>

   </section>
    );
  }
}

export default Resume;
