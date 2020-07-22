import React, { Component } from 'react';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {

    click = () => {
        this.props.updatedSelectedMovie(this.props.movie.title);
    }

    render() {
        return (
            <div className={Style.container}>
                <div onClick={this.click} className="d-flex flex-row bg-light">
                    <img width="150" height="200" src={this.props.movie.img} alt="film" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.movie.title}</h5>
                        <hr className="w-100" />
                        <span className="flex-fill">{this.props.movie.details}</span>
                        <div className="d-flex justify-content-end">
                            {this.props.isFavorite ? (
                                <button
                                    className="btn btn-small btn-danger"
                                    onClick={() => {
                                        this.props.removeFavorite(this.props.movie.title)
                                    }}>Supprimer</button>
                            ) : (
                                    <button
                                        className="btn btn-small btn-primary"
                                        onClick={() => {
                                            this.props.addFavorite(this.props.movie.title)
                                        }}>Ajouter</button>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}