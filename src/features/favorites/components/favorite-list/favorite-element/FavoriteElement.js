import React, { Component } from 'react';
import Style from './FavoriteElement.module.scss';

export default class FavoriteElement extends Component {


    render() {
        return (
            <div className={Style.container}>
                <div className="d-flex flex-row bg-light">
                    <img width="150" height="200" src={this.props.favorite.img} alt="film" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.favorite.title}</h5>
                        <hr className="w-100" />
                        <span className="flex-fill">{this.props.favorite.details}</span>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-small btn-danger" onClick={() => {
                                this.props.removeFavorite(this.props.favorite.title)
                            }}>Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}