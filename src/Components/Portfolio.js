import React, { Component } from 'react';


class Portfolio extends Component {

  state = {
    data: []
  }

  componentFetchData(){
    const urlFetch = fetch('https://api.github.com/user/repos', {
      method: 'get',
      headers: new Headers({
        'token':  "14f9caf1d005f3f04bec916d51df47b1572dac14",
        'content-type': 'application/json; charset=utf-8',
      })
    })

    urlFetch.then( res => {
      if(res.status === 200)
         return res.json()   
   }).then( resJson => console.log("fetch result = ", resJson))
    // {
      // console.log(resJson)
      // this.setState({
      //     data: resJson
      // })
  //  })
  }

  render() {

    
    // console.log(this.componentFetchData)

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
