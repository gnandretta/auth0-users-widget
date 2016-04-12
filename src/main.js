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
    stats: {
      error: false,
      logins: 43,
    },
    users: {
      error: false,
      full: true,
      recent: [
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
          socialProviders: []
        },
        {
          email: "gabriel.andretta@gmail.com",
          name: "gabriel.andretta@gmail.com",
          nickname: "gabriel.andretta",
          picture: "https:\/\/s.gravatar.com\/avatar\/05a4170856a6157f81319595e42fdc5b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fga.png",
          socialProviders: ["facebook"]
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
}

Widget.state = Widget.state || Widget.initialState();



Widget.render = () => {
  var userData = Widget.state.users.recent;
  var users = [];

  function getLoading() {
    return (
      <div className="spinner spinner-center spinner-lg is-auth0">
        <div className="circle"></div>
      </div>
    )
  }

  function getSocialProvider(current) {
    if(current.socialProviders.length) {
      return (
        <span className="auth0-lock-social-button" data-provider={current.socialProviders[0]}>
          <div className="auth0-lock-social-button-icon"></div>
        </span>
      )
    }

    return false;
  }

  for (var i = 0; i < userData.length; i++) {
    var current = userData[i];

    users.push(
      <div key={'user-' + i} className="user">

        <div className="tile">
          <img src={current.picture} />
          {getSocialProvider(current)}
        </div>

        <div className="information">
          <a href="#" className="back"><i className="material-icons">keyboard_backspace</i></a>
          <div className="content">
            <img src={current.picture} />
            <h2 className="name truncate">{current.name}</h2>
            <p className="secondary">Frontend Developer</p>
            <p className="additional">I like unicorns and bold fonts.</p>
            <a className="btn btn-lg btn-success" href="#"><span className="btn-icon icon-budicon-493"></span>Look up</a>
          </div>
        </div>
      </div>
    );
  }

  const el = (
    <div className="auth0-users-widget">
      <h1>Latest Logins</h1>
      <div className="grid clearfix">
        {users}
      </div>
      <p className="footer">
        22 users logged in today.
      </p>
    </div>
  );

  ReactDOM.render(el, document.getElementById("container"));
}

Widget.render();
