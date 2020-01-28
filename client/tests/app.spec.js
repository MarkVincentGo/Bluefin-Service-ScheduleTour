import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App from '../src/app';
import axios from 'axios';

jest.mock('axios');

describe('App', () => {
  it('snapshot renders', () => {
    const app = renderer.create(<App />);
    let tree = app.toJSON();
    expect(app).toMatchSnapshot();
  });

  describe('On mount', () => {
    beforeEach(() => {
      const data = {
        data: [
          {
            id: 123456789,
            listing_price: 123456,
            name: 'Mamba'
          }
        ]
      };
      axios.get = jest.fn(() => Promise.resolve(data));
    });

    it('keeps the listingId state null if no number passed in as props', async () => {
      const wrapper = mount(<App />);
      await expect(wrapper.state().listingId).toBeNull();
    })

    it('makes a call to the api', async () => {
      const wrapper = mount(<App listingId={123456789}/>);
      await Promise.all([
        expect(axios.get).toHaveBeenCalledWith('/house?listingId=123456789'),
        expect(axios.get).toHaveBeenCalledTimes(1)
      ]);
    });

    it('changes the listingId state to be the number passed in as props', done => {
      const wrapper = mount(<App listingId={123456789}/>);
      axios.get()
        .then(() => {
          setImmediate(() => {
            wrapper.update();
            const instance = wrapper.instance();
            expect(instance.houseData.id).toEqual(123456789);
            done();
          });
        })
    });

    // to see if rerendering works... will change as components are added
    it('renders the name of the agent to dom', async () => {
        const wrapper = mount(<App listingId={123456789}/>);

        const instance = await wrapper.instance();
        wrapper.setState({listingId: instance.houseData.id}, () => {
          expect(wrapper.find('p').text()).toEqual('Mamba');
        })
    })


  });

  // all the tests below are for future components...
  // no tests made for them yet.
  describe('Calendar', () => {
    xtest('renders calendar list component', () => {

    });

    describe('Calendar entry', () => {
      xtest('snapshot renders', () => {

      });
    });
  });


  describe('Schedule Tour Button', () => {
    xtest('schedule tour button renders', () => {

    });
  });

  describe('Ask Button', () => {
    xtest('ask button renders', () => {

    });
  });

  describe('Contact Button', () => {
    xtest('contact button renders', () => {

    });
  });

  describe('Refund Button', () => {
    xtest('refund component renders', () => {

    });
  });

  describe('Start Offer button', () => {
    xtest('start offer component renders', () => {

    });
  });
});
