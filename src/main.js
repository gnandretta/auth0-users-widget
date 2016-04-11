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
  return {};
}

Widget.state = Widget.state || Widget.initialState();

Widget.render = () => {
  const el = <div>content</div>;
  ReactDOM.render(el, document.getElementById("container"));
}

Widget.render();
