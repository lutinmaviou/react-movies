import React, { Component } from 'react';
import FavoriteElement from './favorite-element/FavoriteElement';

export default class FavoriteList extends Component {

    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
                {this.props.favorites.map((f, index) => (
                    <FavoriteElement
                        key={f.title + index}
                        favorite={f}
                        removeFavorite={this.props.removeFavorite}
                    />
                ))}
            </div>
        );
    }
}