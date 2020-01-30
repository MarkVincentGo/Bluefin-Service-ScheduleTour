import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import axios from 'axios';

import App from '../src/app';
import CalendarContainer from '../src/CalendarContainer';
import CalendarEntry from '../src/CalendarEntry'

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
      const wrapper = shallow(<App />);
      await Promise.all([
        expect(axios.get).toHaveBeenCalledTimes(0),
        expect(wrapper.state().houseData).toBeNull()
      ]);
    })

    it('makes a call to the api', async () => {
      const wrapper = shallow(<App listingId={123456789}/>);
      await Promise.all([
        expect(axios.get).toHaveBeenCalledWith('/house?listingId=123456789'),
        expect(axios.get).toHaveBeenCalledTimes(1)
      ]);
    });

    it('changes the listingId state to be the number passed in as props', async () => {
      const wrapper = shallow(<App listingId={123456789}/>);
      const instance = wrapper.instance();

      expect(instance.props.listingId).toEqual(123456789);
      await Promise.all([
        expect(axios.get).toHaveBeenCalledTimes(1),
        wrapper.setState({houseData: {
          id: 123456789,
          listing_price: 123456,
          name: 'Mamba'
        }}, () => {
          expect(wrapper.state().houseData.id).toEqual(123456789);
          expect(wrapper.state().houseData.listing_price).toEqual(123456);
          expect(wrapper.state().houseData.name).toEqual('Mamba');
        })
      ])
    });

    // to see if rerendering works... will change as components are added
    // it('renders the name of the agent to dom', async () => {
    //     const wrapper = shallow(<App listingId={123456789}/>);
    //     await Promise.all([
    //       wrapper.setState({houseData: {
    //         id: 123456789,
    //         listing_price: 123456,
    //         name: 'Mamba'
    //       }}, () => {
    //         expect(wrapper.find('p').text()).toEqual('Mamba');
    //       })
    //     ]);
    // })
  });

  describe('Calendar', () => {
    test('renders calendar entries for next two weeks', () => {
      const dates = {
        day: [
          'Thursday',  'Friday',
          'Saturday',  'Sunday',
          'Monday',    'Tuesday',
          'Wednesday', 'Thursday',
          'Friday',    'Saturday',
          'Sunday',    'Monday'
        ],
        month: [
          'January',  'January',
          'January',  'February',
          'February', 'February',
          'February', 'February',
          'February', 'February',
          'February', 'February'
        ],
        date: [
          29, 30, 31, 1, 2,
           3,  4,  5, 6, 7,
           8,  9
        ]
      }
      const wrapper = mount(<CalendarContainer dates={dates}/>);
      expect(wrapper.find(CalendarEntry).length).toEqual(12);
    });

    describe('Calendar entry', () => {
      test('receives props of one day', () => {
        const date = {
          day: 'WEDNESDAY',
          month: 'JAN',
          date: 29
        };
        const wrapper = shallow(<CalendarEntry date={date}/>).dive();
        expect(wrapper.find('.date').text()).toEqual('29');
        expect(wrapper.find('.month').text()).toEqual('JAN');
        expect(wrapper.find('.day').text()).toEqual('WEDNESDAY');
        //expect(props).arrayContaining['date', 'month', 'day']
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
