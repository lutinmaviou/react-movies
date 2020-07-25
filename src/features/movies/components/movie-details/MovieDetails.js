import React, { Component } from 'react';

export default class MovieDetails extends Component {

    render() {
        return (
            <div className="w-25 bg-light p-4 d-flex flex-column">
                {this.props.movie ? (
                    <>
                        <h5>{this.props.movie.title}</h5>
                        <hr className="w-100" />
                        <div>
                            <img src={this.props.movie.img} alt="" className="d-block mx-auto w-100" />
                        </div>
                        <hr className="w-100" />
                        <span className="text-secondary">{this.props.movie.details}</span>
                        <hr className="w-100" />
                        <span>{this.props.movie.description}</span>
                    </>
                ) : null}
            </div>
        );
    }
}