import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type size = 'sm' | 'md' | 'lg' | 'xl'


type Properties = 
{
    color: colors
    text: string
    title: string
}

export const WithTransition = ({text, title, color}: Properties)  =>
{
    const css: string = `btn btn-${color}`   

    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="assets/img/slides-1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="assets/img/slides-2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="assets/img/slides-3.jpg" className="d-block w-100" alt="..."/>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            </div>
        </div>        
    );
}
