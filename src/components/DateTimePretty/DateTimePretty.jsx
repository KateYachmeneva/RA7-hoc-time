
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

export default function DateTimePretty(Component){
    function HOCComponent(props){
        const date = props;
        const prettyDate = moment(date).fromNow() ;
        console.log(prettyDate);
       return <Component {...props} date = {prettyDate}/>
    }
  HOCComponent.displayName = 'withDataTimePrettyHOC';
  return HOCComponent;

}
DateTimePretty.PropsTypes = {
    date: PropTypes.string.isRequired,
}