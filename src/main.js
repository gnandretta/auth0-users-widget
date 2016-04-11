var Reloader = Reloader || {};

Reloader.reloadJSFile = (path) => {
  const x = document.createElement("script");
  x.setAttribute("src", path + "?rel=" + (new Date().getTime()));
  document.body.appendChild(x);
  setTimeout(() => document.body.removeChild(x), 500);
}

Reloader.reloadCSSFile = (path) => {
  const x = document.createElement("link");
  x.setAttribute("rel", "stylesheet");
  x.setAttribute("href", path + "?rel=" + (new Date().getTime()));
  document.head.appendChild(x);
  setTimeout(() => document.head.removeChild(x), 750);
}

Reloader.reloadFile = (path) => {
  if (path.endsWith(".js")) Reloader.reloadJSFile(path);
  if (path.endsWith(".css")) Reloader.reloadCSSFile(path);
}

Reloader.startReloading = (files) => {
  setTimeout(() => {
    console.debug("--- reloading ---");
    files.map(Reloader.reloadFile);
  }, 500);
}

Reloader.startReloading(["build/main.js", "style.css"]);

var Widget = Widget || {};

Widget.initialState = () => {
  return {
    stats: [
      {
        "date": "2016-04-11T00:00:00.000Z",
        "logins": 43,
        "signups": 21
      }
    ],
    users: [
      {
        "name": "Gabriel Andretta",
        "picture": "https://pbs.twimg.com/profile_images/378800000053651919/27246a03737f41dd06633bfd74ca9f3c_normal.png",
        "description": "frontend team at @auth0, not an artist, likes programming languages where parens hug the code",
        "lang": "en",
        "location": "Santa Fe, Argentina",
        "screen_name": "gnandretta",
        "time_zone": "Buenos Aires",
        "url": "http://t.co/7ldsZOJHPE",
        "utc_offset": -10800,
        "updated_at": "2016-04-11T21:09:05.045Z",
        "user_id": "twitter|80337151",
        "nickname": "Gabriel Andretta",
        "identities": [
          {
            "user_id": "80337151",
            "provider": "twitter",
            "connection": "twitter",
            "isSocial": true
          }
        ],
        "created_at": "2015-10-13T20:02:43.051Z",
        "last_ip": "200.127.195.84",
        "last_login": "2016-04-11T21:09:05.032Z",
        "logins_count": 149
      },
      {
        "email": "gabriel.andretta@gmail.com",
        "email_verified": true,
        "updated_at": "2016-04-11T21:06:01.289Z",
        "picture": "https://s.gravatar.com/avatar/05a4170856a6157f81319595e42fdc5b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
        "user_id": "auth0|564e2c3c8237d8042304f271",
        "name": "gabriel.andretta@gmail.com",
        "nickname": "gabriel.andretta",
        "identities": [
          {
            "user_id": "564e2c3c8237d8042304f271",
            "provider": "auth0",
            "connection": "Username-Password-Authentication",
            "isSocial": false
          }
        ],
        "created_at": "2016-02-01T18:01:17.182Z",
        "last_password_reset": "2016-03-16T19:05:16.155Z",
        "last_ip": "200.127.195.84",
        "last_login": "2016-04-08T14:35:21.806Z",
        "logins_count": 56,
        "user_metadata": {
          "hola": "chau"
        }
      },
      {
        "email": "gabriel.andretta@gmail.com",
        "email_verified": true,
        "updated_at": "2016-03-29T17:52:54.398Z",
        "picture": "https://s.gravatar.com/avatar/05a4170856a6157f81319595e42fdc5b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
        "user_id": "email|568aeda4f609ee1adad0a996",
        "name": "gabriel.andretta@gmail.com",
        "nickname": "gabriel.andretta",
        "identities": [
          {
            "user_id": "568aeda4f609ee1adad0a996",
            "provider": "email",
            "connection": "email",
            "isSocial": false
          }
        ],
        "created_at": "2016-01-18T16:50:19.814Z",
        "last_ip": "200.127.195.84",
        "last_login": "2016-03-29T17:52:54.397Z",
        "logins_count": 22
      },
      {
        "email": "gabriel.andretta+18@gmail.com",
        "email_verified": false,
        "username": "gnandretta",
        "updated_at": "2016-03-22T19:22:21.819Z",
        "picture": "https://s.gravatar.com/avatar/c7d9610710f2ec82c65dca071de0e259?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgn.png",
        "user_id": "auth0|56f17bcc236c8824504e8814",
        "name": "gabriel.andretta+18@gmail.com",
        "nickname": "gnandretta",
        "identities": [
          {
            "user_id": "56f17bcc236c8824504e8814",
            "provider": "auth0",
            "connection": "Username-Password-Authentication",
            "isSocial": false
          }
        ],
        "created_at": "2016-03-22T17:07:24.483Z",
        "blocked": true,
        "last_ip": "200.127.195.84",
        "last_login": "2016-03-22T19:22:21.819Z",
        "logins_count": 12
      },
      {
        "email": "gabriel.andretta+17@gmail.com",
        "email_verified": false,
        "updated_at": "2016-03-22T17:03:57.775Z",
        "picture": "https://s.gravatar.com/avatar/a2b30d4a1c5b82657f191ee24533fbd3?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
        "user_id": "auth0|56f17afc246eddef35685bc7",
        "name": "gabriel.andretta+17@gmail.com",
        "nickname": "gabriel.andretta+17",
        "identities": [
          {
            "user_id": "56f17afc246eddef35685bc7",
            "provider": "auth0",
            "connection": "Username-Password-Authentication",
            "isSocial": false
          }
        ],
        "created_at": "2016-03-22T17:03:56.365Z",
        "last_ip": "200.127.195.84",
        "last_login": "2016-03-22T17:03:57.775Z",
        "logins_count": 1
      },
      {
        "email": "gabriel.andretta+16@gmail.com",
        "email_verified": false,
        "updated_at": "2016-03-22T17:02:34.405Z",
        "picture": "https://s.gravatar.com/avatar/8e5de6e11045344267dbcd9ec746467c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
        "user_id": "auth0|56f17aa9e98a4b467a6ccfdb",
        "name": "gabriel.andretta+16@gmail.com",
        "nickname": "gabriel.andretta+16",
        "identities": [
          {
            "user_id": "56f17aa9e98a4b467a6ccfdb",
            "provider": "auth0",
            "connection": "Username-Password-Authentication",
            "isSocial": false
          }
        ],
        "created_at": "2016-03-22T17:02:33.566Z",
        "last_ip": "200.127.195.84",
        "last_login": "2016-03-22T17:02:34.404Z",
        "logins_count": 1
      },
      {
        "email": "gabriel.andretta+15@gmail.com",
        "email_verified": false,
        "updated_at": "2016-03-22T17:02:06.765Z",
        "picture": "https://s.gravatar.com/avatar/ba0aa404d89e097a7c135e74217b9659?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
        "user_id": "auth0|56f17a8de98a4b467a6ccfca",
        "name": "gabriel.andretta+15@gmail.com",
        "nickname": "gabriel.andretta+15",
        "identities": [
          {
            "user_id": "56f17a8de98a4b467a6ccfca",
            "provider": "auth0",
            "connection": "Username-Password-Authentication",
            "isSocial": false
          }
        ],
        "created_at": "2016-03-22T17:02:05.294Z",
        "last_ip": "200.127.195.84",
        "last_login": "2016-03-22T17:02:06.764Z",
        "logins_count": 1
      },
      {
        "email": "gabriel.andretta+14@gmail.com",
        "email_verified": false,
        "updated_at": "2016-03-21T20:55:30.165Z",
        "picture": "https://s.gravatar.com/avatar/2ee5b87c91f911c5734ece66eaba8ec0?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
        "user_id": "auth0|56f05fc1971d7f7612c19411",
        "name": "gabriel.andretta+14@gmail.com",
        "nickname": "gabriel.andretta+14",
        "identities": [
          {
            "user_id": "56f05fc1971d7f7612c19411",
            "provider": "auth0",
            "connection": "Username-Password-Authentication",
            "isSocial": false
          }
        ],
        "created_at": "2016-03-21T20:55:29.189Z",
        "last_login": "2016-03-21T20:55:30.165Z",
        "logins_count": 1,
        "user_metadata": {
          "what": "PRUEBA"
        }
      },
      {
        "email": "gabriel.andretta+13@gmail.com",
        "email_verified": false,
        "username": "gnandretta13",
        "updated_at": "2016-03-21T20:49:19.286Z",
        "picture": "https://s.gravatar.com/avatar/374b0873408e20cde31a6759ccc4c67b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgn.png",
        "user_id": "auth0|56f05e4e971d7f7612c193b8",
        "name": "gabriel.andretta+13@gmail.com",
        "nickname": "gnandretta13",
        "identities": [
          {
            "user_id": "56f05e4e971d7f7612c193b8",
            "provider": "auth0",
            "connection": "Username-Password-Authentication",
            "isSocial": false
          }
        ],
        "created_at": "2016-03-21T20:49:18.438Z",
        "last_login": "2016-03-21T20:49:19.286Z",
        "logins_count": 1
      }
    ]
  };
}

Widget.state = Widget.state || Widget.initialState();

Widget.render = () => {
  const el = <div>content</div>;
  ReactDOM.render(el, document.getElementById("container"));
}

Widget.render();
