import React, { Component } from 'react';



class Listing extends Component {
    render() {
        return (



            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">{this.props.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.full_location}</h6>
                    <p className="card-text">
                        {this.props.lat},{this.props.lng}
                    </p>
                    <a href="tel:1{this.props.phone}" className="card-link">{this.props.phone}</a>
                    <a href="{this.props.website}" className="card-link">{this.props.website}</a>
                </div>
            </div>



        );
    }
}

export default Listing;