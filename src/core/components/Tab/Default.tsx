import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'active' | 'disabled'


type Properties = 
{
    msg: string
    color: colors
    text: string
    size: string
    state: string
    heading: string
}

export const Order = ({color='', text, size='md', state='', heading}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`  

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{heading}</h5>

              <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="myTabjustified" role="tablist">
                <li className="nav-item flex-fill" role="presentation">
                  <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-justified" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item flex-fill" role="presentation">
                  <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-justified" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item flex-fill" role="presentation">
                  <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                </li>
              </ul>
              <div className="tab-content pt-2" id="myTabjustifiedContent">
                <div className="tab-pane fade show active" id="home-justified" role="tabpanel" aria-labelledby="home-tab">
                  {text}
                </div>
                <div className="tab-pane fade" id="profile-justified" role="tabpanel" aria-labelledby="profile-tab">
                  Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                </div>
                <div className="tab-pane fade" id="contact-justified" role="tabpanel" aria-labelledby="contact-tab">
                  Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                </div>
              </div>

            </div>
          </div>       
    );
}
