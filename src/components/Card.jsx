import React from 'react'
import {MdLocationOn} from 'react-icons/md'
const Card = (props) => {
    
  return (
    <section className="card">
        <div className="image">
            <img src={props.imageUrl} alt="" />
        </div>
        <div className="details">
            <div className="location">
                <MdLocationOn size={18} color="#F55A5A"/>
                <span className='country'>{props.location}</span>
                <span className='map'><a href={props.googleMapsUrl} target="_blank">View on Google Maps</a></span>
            </div>
            <h2 className='name'>{props.title}</h2>
            <div className="date">
                <span>{props.startDate}</span>
                <span>{props.endDate}</span>
            </div>
            <p>
{props.description}
            </p>
        </div>
    </section>
  )
}

export default Card