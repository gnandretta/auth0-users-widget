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

  function getError() {
    return (
      <div className="error">
        <span className="circle"><span className="icon-budicon-414"></span></span>
        <p>There was an error retrieving users. Please <a href="#">try again</a> later.</p>
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
              <div className="picture">
                <img src={current.picture} />
                {getSocialProvider(current)}
              </div>
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
        {getError()}
      </div>
      <p className="footer">
        22 users logged in today.
      </p>
    </div>
  );

  ReactDOM.render(el, document.getElementById("container"));
}

Widget.render();
