import React, { Component } from 'react';

export const Charaters = () => (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ruta-de-la-imagen-1"
          alt="Primera imagen"
        />
        <Carousel.Caption>
          <h3>Primer slide</h3>
          <p>Descripción del primer slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ruta-de-la-imagen-2"
          alt="Segunda imagen"
        />
        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>Descripción del segundo slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ruta-de-la-imagen-3"
          alt="Tercera imagen"
        />
        <Carousel.Caption>
          <h3>Tercer slide</h3>
          <p>Descripción del tercer slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);
