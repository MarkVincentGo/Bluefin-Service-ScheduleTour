  import React, { Component } from 'react';
  import axios from 'axios';
  import getDates from './helpers/getDates.js'

  import CalendarContainer from './CalendarContainer'

  export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        houseData: null,
        dates: getDates()
      };
    };

    componentDidMount() {
      if(this.props.listingId) {
        axios.get(`/house?listingId=${this.props.listingId}`)
          .then((response) => {
            this.setState({
              houseData: response.data[0]
            });
          });
      };
    };

    render() {
      return (
        <div>
          {
            this.state.houseData === null ?
            <p>Hello</p> :
            <CalendarContainer dates={this.state.dates}/>
          }

        </div>
      )
    }
  };
