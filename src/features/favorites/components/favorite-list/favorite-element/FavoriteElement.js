import React, { Component } from 'react';
import Style from './FavoriteElement.module.scss';

export default class FavoriteElement extends Component {


    render() {
        const { favorite } = this.props;
        return (
            <div className={Style.container}>
                <div className="d-flex flex-row bg-light">
                    <img width="150" height="200" src={favorite.img} alt="film" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{favorite.title}</h5>
                        <hr className="w-100" />
                        <span className="flex-fill">{favorite.details}</span>
                        <div className="d-flex justify-content-end">
                            <button
                                className="btn btn-small btn-danger"
                                onClick={() => { this.props.removeFavorite() }}>
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}