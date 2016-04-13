import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';
import styleguide from './styleguide.css';
import social from './social.css';
import style from './style.css';
import icon from './icon.css';

const preloadImg = (src, cb = () => {}) => {
  const img = document.createElement("img");
  img.addEventListener("load", () => { cb(null, src); });
  img.addEventListener("error", (err) => { cb(err, src) });
  img.src = src;
  return img;
}

class Auth0UsersWidget {

  constructor(domain, token, action) {
    this.domain = domain;
    this.token = token;
    this.state = {
      action: action,
      stats: {},
      users: {}
    }
    this.getStats();
    this.getUsers();
  }

  get(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Authorization", "Bearer " + this.token);
    xhr.onerror = function() {
      cb({})
    };
    xhr.onload = function() {
      cb(null, JSON.parse(xhr.responseText));
    };
    xhr.send();
  }

  getStats() {
    const url = "https://"
      + this.domain
      + "/api/v2/stats/daily"
      + "?from="
      + new Date().toISOString().substr(0, 10).replace(/-/g, '');

    this.get(url, (err, res) => {
      if (!err && res[0] && typeof res[0].logins !== "undefined") {
        this.state.stats = {
          loaded: true,
          logins: res[0].logins
        };
        this.render();
      } else {
        // TODO
      }
    });
  }

  getUsers() {
    const url = "https://"
      + this.domain
      + "/api/v2/users?per_page=9&page=0&sort=last_login%3A-1&search_engine=v2";

    this.get(url, (err, res) => {
      if (Array.isArray(res)) {
        this.state.users = {
          latest: res.map(function(o) {
            return {
              description: o.description,
              email: o.email,
              lastLogin: o.last_login,
              name: o.name,
              nickname: o.nickname,
              picture: o.picture,
              socialProviders: o.identities.reduce(function(a, o) {
                if (o.isSocial && typeof o.provider === "string") {
                  a.push(o.provider);
                }
                return a;
              }, []),
              username: o.username
            };
          })
        };
        this.state.users.latest.forEach(o => {
          preloadImg(o.picture, (err, src) => {
            this.state.users.latest = this.state.users.latest.map(o => {
              if (o.picture === src) {
                o.sync = err ? "error" : "ok";
              }
              return o;
            });
           this.render();
          });
        });
        this.render();
      } else {
        this.state.users = {
          error: true
        };
      }
    });
  }

  selectUser(o) {
    this.state.users.selected = o;
    this.render();
  }

  render(el) {
    if (el) this.el = el;
    if (!this.el) return;
    ReactDOM.render(
      <Component
        selectUser={this.selectUser.bind(this)}
        {...this.state}
      />,
      this.el
    );
  }

}

window.Auth0UsersWidget = Auth0UsersWidget;
