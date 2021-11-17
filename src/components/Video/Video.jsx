
import React from 'react';
import PropsTypes from 'prop-types';
import DateTimePretty from "../DateTimePretty/DateTimePretty";
import DateTime from "../DateTime/DateTime"


  
 const Video = ({url,date,id}) => {
    return (
        <div className="video">
        <iframe src={url} 
            frameborder="0" 
            allow="autoplay; 
            encrypted-media" 
            allowfullscreen>
            title = {id}
            </iframe>
            <DateTimePrettyWith date={date} />
        </div>
    )
  };
  const DateTimePrettyWith = DateTimePretty(DateTime);

  
Video.propTypes = {
    url: PropsTypes.string.isRequired,
    date: PropsTypes.string.isRequired,
  }
  export default Video;