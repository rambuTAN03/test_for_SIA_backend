
import React from "react";

import NavBar from './components/NavBar';
import MessageFab from './components/MessageFab';

import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

import Wave1 from './components/waves/Wave1';
import Wave2 from './components/waves/Wave2';
import Wave3 from './components/waves/Wave3';
import AboutRight from './components/AboutRight';

function App() {

  /*
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);
  */

  return (

    <>

      <NavBar />

      <MessageFab />

      <div className="content" style={{ marginTop: '2.9em' }}>

        <div className="bannerCard">

          <h1>Wash Your Stress Away!</h1>
          <p>
            Wash your stress away, one load at a time,
            because every laundry day is a fresh start.
          </p>

        </div>

        <Wave1 />

      </div>

      <div className="content2">

        <div className="aboutContainer">

          <div className='aboutLeft'>

            <h1>About</h1>

            <p className="m-2">
              VSP Laundry Shop was founded in [Year] by a group of laundry enthusiasts who shared a
              common vision: to provide a comprehensive and customer-centric laundry experience.
              Their passion for laundry stemmed from the belief that doing laundry should be easy, efficient,
              and accessible to everyone. With that aspiration, VSP Laundry Shop was born.
            </p>

          </div>

          <AboutRight />

        </div>

        <Wave2 />

      </div>


      <div className="content3">

        <div className="faq">

          <h1>FAQs</h1>

          <Panel className='faqPanel' header="What are the services you offer?" style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
            <p className="m-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header="What kind of items do you cater for washing?"  style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
            <p className="m-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header="What are your opening hours?" style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
            <p className="m-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header="How many days will I receive my items back?"  style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
            <p className="m-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

        </div>

        <Wave3 />

      </div>

      <div className="footnote">
        <h1>Vsp Laundry Shop</h1>
        <h2>Quezon Street, Panabo City, Davao Region, 8105</h2>
        <h2>Contact Number na wala ko kabalo</h2>
      </div>

    </>
  )
}

export default App
