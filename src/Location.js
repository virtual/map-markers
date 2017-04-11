import React, {Component} from 'react'
import Listing from './Listing';

class Location extends Component {
    render() {
        return (
            <div className='ingredient'>


                {(this.props.locations).map((location, index) => {
                    return <Listing key={index} lat={location.lat} lng={location.lng} name={location.name} full_location={location.full_location} phone={location.phone} website={location.website} />
                })}
            </div>
        );
    }
}

export default Location