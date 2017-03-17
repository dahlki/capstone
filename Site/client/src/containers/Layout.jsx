// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Header from '../components/Header.js'
// import Landing from './Landing.jsx'
//
// class Layout extends Component {
//
//   constructor(props) {
//     super(props);
//   }
//
//   render () {
//     return (
//       <div>
//         <Header />
//         <div className="container mainContainer">
//           <div className="row" id="mainRow">
//             <Landing />
//           </div>
//         </div>
//         { /* Footer? */}
//       </div>
//     );
//   }
// }
//
// /*
//   map functions if needed, remove at end if not used
//   const mapProps = state => ({})
//   const mapDispatch = {}
// */
//
// export default connect()(Layout);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Parallax } from 'react-parallax';

import Header from '../components/Header.js';
// import Parallax1 from '../components/Parallax1.jsx';
// import Parallax2 from './ParallaxPart2';
// import Parallax3 from './ParallaxPart3';
// import NonParallax1 from './NonParallax1';
// import NonParallax2 from './NonParallax2';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHide: true
    };
    this.hideBar = this.hideBar.bind(this);
  }

  hideBar(){
     let {isHide} = this.state;

     window.scrollY > 650 ? !isHide && this.setState({isHide: true}) : isHide && this.setState({isHide: false}) //eslint-disable-line
    //  this.prev = window.scrollY
  }

  componentDidMount(){
      this.hideBar();
      window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
       window.removeEventListener('scroll', this.hideBar);
  }

  render(){
    let hide = this.state.isHide;
    return (
      <div>
        <Header classHide={ hide } />
        <Parallax background1="./Record-Player-Wallpaper.jpg" strength={400}>
          <br />

        </Parallax>

        <Parallax background2="./Record-Player-Wallpaper.jpg" strength={400}>
          <br />

        </Parallax>

        <Parallax background3="./Record-Player-Wallpaper.jpg" strength={400}>
          <br />

        </Parallax>
      </div>
    );
  }
}

export default connect()(Layout);
