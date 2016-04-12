import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

const state = {
    stats: {
      loaded: true,
      logins: 43,
    },
    users: {
      error: false,
      full: true,
      latest: [
        {
          name: "Gabriel Andretta",
          nickname: "Gabriel Andretta",
          picture: "https:\/\/pbs.twimg.com\/profile_images\/378800000053651919\/27246a03737f41dd06633bfd74ca9f3c_normal.png",
          socialProviders: ["twitter"]
        },
        {
          email: "gabriel.andretta@gmail.com",
          name: "gabriel.andretta@gmail.com",
          nickname: "gabriel.andretta",
          picture: "https:\/\/s.gravatar.com\/avatar\/05a4170856a6157f81319595e42fdc5b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
          socialProviders: ["github"]
        },
        {
          email: "gabriel.andretta@gmail.com",
          name: "gabriel.andretta@gmail.com",
          nickname: "gabriel.andretta",
          picture: "https:\/\/s.gravatar.com\/avatar\/05a4170856a6157f81319595e42fdc5b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
          socialProviders: ["instagram"]
        },
        {
          email: "gabriel.andretta+18@gmail.com",
          name: "gabriel.andretta+18@gmail.com",
          nickname: "gnandretta",
          picture: "https:\/\/s.gravatar.com\/avatar\/c7d9610710f2ec82c65dca071de0e259?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgn.png",
          socialProviders: ["github"],
          username: "gnandretta"
        },
        {
          email: "gabriel.andretta+17@gmail.com",
          name: "gabriel.andretta+17@gmail.com",
          nickname: "gabriel.andretta+17",
          picture: "https:\/\/s.gravatar.com\/avatar\/a2b30d4a1c5b82657f191ee24533fbd3?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
          socialProviders: []
        },
        {
          email: "gabriel.andretta+16@gmail.com",
          name: "gabriel.andretta+16@gmail.com",
          nickname: "gabriel.andretta+16",
          picture: "https:\/\/s.gravatar.com\/avatar\/8e5de6e11045344267dbcd9ec746467c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
          socialProviders: [],
        },
        {
          email: "gabriel.andretta+15@gmail.com",
          name: "gabriel.andretta+15@gmail.com",
          nickname: "gabriel.andretta+15",
          picture: "https:\/\/s.gravatar.com\/avatar\/ba0aa404d89e097a7c135e74217b9659?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
          socialProviders: []
        },
        {
          email: "gabriel.andretta+14@gmail.com",
          name: "gabriel.andretta+14@gmail.com",
          nickname: "gabriel.andretta+14",
          picture: "https:\/\/s.gravatar.com\/avatar\/2ee5b87c91f911c5734ece66eaba8ec0?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
          socialProviders: []
        },
        {
          email: "gabriel.andretta+13@gmail.com",
          name: "gabriel.andretta+13@gmail.com",
          nickname: "gnandretta13",
          picture: "https:\/\/s.gravatar.com\/avatar\/374b0873408e20cde31a6759ccc4c67b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgn.png",
          socialProviders: [],
          username: "gnandretta13"
        }
      ]
    }
};


class Auth0UserWidget {

  constructor(domain, token) {
    this.domain = domain;
    this.token = token;
  }

  render(el) {
    ReactDOM.render(<Component {...state} />, el);
  }

}

window.Auth0UserWidget = Auth0UserWidget;
