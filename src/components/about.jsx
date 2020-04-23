import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>As a lifelong artist, I approach coding with the same openness and creativity. The challenges of web development are fun, exciting and inspiring. I look forward to solving every problem that arises and satisfying the needs of every client.</p>
                    <p>I have started reflecting my ideas and thougths through the medium of words recently. You can write me back if you want to comment or share ideas too :P </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I am a graduate of the Flatiron School with the Full Stack Web Development program using Ruby, Sinatra, Ruby on Rails, JavaScript, React, Redux, HTML, CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                          <h3>Creative Writing and Web/Content/Copywriting </h3>
                          <p>I come from a solid writing background</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-5">
                      <span className="icon">
                          <i className="icon-data" />
                      </span>
                      <div className="desc">
                          <h3>Art and Photography</h3>
                          <p>I have been painting and drawing and creative photographing for many years</p>
                      </div>
                      </div>
                  </div>
                  {/*
                  
                  */}
                  </div>
              </div>
              </section>
            </div>
          )
        }
      }
