import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [
                  { id: 1, projectTitle: 'Mapping Tool', projectImage: "images/work-map-tool.jpeg", projectUrl: 'https://twitter.com/jessiewillms/status/936683176822558722', projectTools: ['JavaScript','MapBox','React'], projectDetails: 'Custom mapping platform for CBC reporters.' },
                  { id: 2, projectTitle: 'The Royal Wedding, decoded', projectImage: "images/work-royal-wedding.jpg", projectUrl: 'http://www.cbc.ca/news2/interactives/royal-annotations/', projectTools: ['HTML','SASS/CSS'], projectDetails: 'Everything you needed (needed?) to know about the royal wedding' },
                  { id: 3, projectTitle: 'Beyond94: Truth and Reconciliation', projectImage: "images/work-trc.jpg", projectUrl: 'http://newsinteractives.cbc.ca/longform-single/beyond-94', projectTools: ['Craft (CMS)','JavaScript','SASS/CSS'], projectDetails: 'Custom CMS measure the progress of each of the 94 Calls to Action from the TRC.' },
                  // { id: 4, projectTitle: 'Mapping Tool', projectImage: "images/cool.jpg", projectUrl: 'http://www.cbc.ca/', projectTools: ['JavaScript','MapBox','React'], projectDetails: 'lalalalallalal' }
            ],
      loading: true
    };
  }

  // componentDidMount() {
  //   // console.log(`mounting`);
  //   // console.log(this);
  //   const params = this.props.match.params || {};
  //   // const searchTerm = params.searchTerm || undefined;
  //   const searchTerm = "jessie-willms-79095a1a";
  //   this.loadBeers(searchTerm);
  // }
  //
  // // componentDidUpdate(prevProps) {
  // //   console.log('did update');
  // //   const currentSearchTerm = this.props.match.params.searchTerm;
  // //   const oldSearchTerm = prevProps.match.params.searchTerm;
  // //   if (currentSearchTerm !== oldSearchTerm) {
  // //     this.loadBeers(currentSearchTerm);
  // //   }
  // // }
  //
  // loadBeers = (searchTerm = "jessie-willms-79095a1a") => {
  //       // console.log({searchTerm});
  //       // Client ID:	77jvu9cc36tlwi
  //       // Client Secret:	Ta3aJaNSXO9LzpeP
  //       // https://www.linkedin.com/in/jessie-willms-79095a1a/?code=AQSCv5ElJkeaJUoZ7R7mHl6DgBTARi3E0jc4JMzpupa8zXqTY7BXNof_YaIyCyF9juHva_z9FFkwhW9MEY7_g7WhGd_gtWy5gXLLjVVTb8eProZ_3o_d5Iu728aT_46yQUJrNZuQoZJ9qcyfRkpLP-NJOxCMwA_M8Q83GEER
  //
  //       // AQSCv5ElJkeaJUoZ7R7mHl6DgBTARi3E0jc4JMzpupa8zXqTY7BXNof_YaIyCyF9juHva_z9FFkwhW9MEY7_g7WhGd_gtWy5gXLLjVVTb8eProZ_3o_d5Iu728aT_46yQUJrNZuQoZJ9qcyfRkpLP-NJOxCMwA_M8Q83GEER
  //
  //       this.setState({ loading: true });
  //   //
  //   // // Check for beers in local storage
  //   // const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
  //   //
  //   // if (localStorageBeers) {
  //   //   const localBeers = JSON.parse(localStorageBeers);
  //   //   this.setState({ beers: localBeers, loading: false });
  //   //   return; // stop before fetch happens!
  //   // }
  //   // const the_url = "https://www.linkedin.com/in/jessie-willms-79095a1a/?code=AQR3pBCXUT2b2DbcuCzsf_yluKzT3jHhv4zi85oPXHp5dYExmEPLGkJf5J2t6BwE7vQsQdvvNbSBFYIbViiM2CSHZCZxvmvgxsEKF-Ig3QLcnmGW3UEF2eVwlM__rP7ClpHu1OQ1QulaAP6PE1zS-2MTqClbhA3w7WV5TyfJ"
  //   // const the_url = "https://api.linkedin.com/in/jessie-willms-79095a1a&oauth2_access_token=77jvu9cc36tlwi&format=json"
  //  //  const the_url = "https://api.linkedin.com/v1/people/~?format=json&oauth2_access_token=AQXdSP_W41_UPs5ioT_t8HESyODB4FqbkJ8LrV_5mff4gPODzOYR"
  //  //  fetch(the_url, {
  //  //    method: 'GET',
  //  //    mode: "no-cors",
  //  //    headers: new Headers({
  //  //    Connection: 'Keep-Alive',
  //  //    'Authorization': 'Bearer AQXdSP_W41_UPs5ioT_t8HESyODB4FqbkJ8LrV_5mff4gPODzOYR'
  //  //    }),
  //  // })
  //  //    .then(data => data.json())
  //  //    .then(data => {
  //  //          console.log({data});
  //  //      // filter for beers with images
  //  //      const beers = data.data || [];
  //  //      const filteredBeers = beers.filter(beer => !!beer.labels);
  //  //      this.setState({ beers: filteredBeers, loading: false });
  //  //      // save to local storage in case we search for this again
  //  //      localStorage.setItem(
  //  //        `search-${searchTerm}`,
  //  //        JSON.stringify(this.state.beers)
  //  //      );
  //  //    })
  //  //    .catch(err => console.error(err));
  // };

  render() {
    return (
          <main className="wrapper">
                <Header siteName="Jessie Willms!" workBio="A web developer working with reporters and editors at the CBC to tell visual stories." funBio={["Outside of a text editor, I play softball, ride my bike, and ", <a href="https://www.goodreads.com/user/show/20291883-jessie-willms" target="_blank" className="link">read</a>, " in the various parks of downtown Toronto."]} socialMedia_Twitter={["Find me on the internet ", <a href='@jessiewillms' target="_blank" className="link">@jessiewillms</a>, "."]} socialMedia_LinkedIn={["View my resume ", <a href='@https://www.linkedin.com/in/jessie-willms-79095a1a' target="_blank" className="link">on LinkedIn</a>, "."]}/>
          {/* <Skills tech="JavaScript, Python, React, D3.js" /> */}
    <Work projects={this.state.beers}/>
<Footer email="willms.jessie@gmail.com" />
      </main>
    );
  }
}

export default Main;
