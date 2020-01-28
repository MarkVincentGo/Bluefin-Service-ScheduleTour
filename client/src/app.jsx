  import React, { Component } from 'react';
  import axios from 'axios';

  export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listingId: null
      };
      this.houseData = {};
    };

    componentDidMount() {
      if(this.props.listingId) {
        axios.get(`/house?listingId=${this.props.listingId}`)
          .then((response) => {
            this.houseData = response.data[0];
            this.setState({
              listingId: this.houseData.listingId
            });
          });
      };
    };

    render() {
      return (
        <div>
          Mamba4Life
          <p>{
            this.state.listingId === null ? 'Hello' : `${this.houseData.name}`}
          </p>
        </div>
      )
    }
  };
