import React from 'react';

const Loading = () => (
  <div className="spinner spinner-center spinner-lg is-auth0">
    <div className="circle"></div>
  </div>
);

const SocialProvider = ({str}) => (
  <span className="auth0-lock-social-button" data-provider={str}>
    <div className="auth0-lock-social-button-icon"></div>
  </span>
);

const UserItem = ({user}) => {
  const maybeSocialProvider = user.socialProviders.length > 0
    ? <SocialProvider str={user.socialProviders[0]} />
    : null;

  return (
    <div className="user">
      <div className="tile">
        <img src={user.picture} />
        {maybeSocialProvider}
      </div>

      <div className="information">
        <a href="#" className="back"><i className="material-icons">keyboard_backspace</i></a>

        <div className="content">
          <div className="picture">
            <img src={user.picture} />
            {maybeSocialProvider}
          </div>

          <h2 className="name truncate">{user.name}</h2>
          <p className="secondary">Frontend Developer</p>
          <p className="additional">I like unicorns and bold fonts.</p>
          <a className="btn btn-lg btn-success" href="#"><span className="btn-icon icon-budicon-493"></span>Look up</a>
        </div>
      </div>
    </div>
  );
};

const UserGrid = ({users}) => (
  <span>
    {users.map((x, i) => <UserItem key={i} user={x} />)}
  </span>
);

const Stats = ({logins}) => {
  let msg;
  switch(logins) {
    case 0:
      msg = "Nobody logged in today.";
      break;
    case 1:
      msg = "1 user logged in today.";
      break;
    default:
      msg = `${logins} users logged in today.`;
  }
  return <span>{msg}</span>
};

const Error = () => <div>Error</div>;

export default ({users, stats}) => {
  const maybeStats = stats.loaded ? <Stats {...stats} /> : null;
  const areLatestUsersSync = Array.isArray(users.latest)
    && users.latest.reduce((r, o) => r && typeof o.sync === "string", true);
  const maybeLoading = !areLatestUsersSync ? <Loading /> : null;
  const maybeError = users.error ? <Error /> : null;
  const maybeLatestUsers = areLatestUsersSync
    ? <UserGrid users={users.latest} />
    : null;
  // const maybeUser = users.selected ? <User /> : null;

  return (
    <div className="auth0-users-widget">
      <h1>Latest Logins</h1>
      <div className="grid clearfix">
        {maybeError}
        {/*maybeUser*/}
        {maybeLoading}
        {maybeLatestUsers}
      </div>
      <p className="footer">
        {maybeStats}
      </p>
    </div>
  );
}
