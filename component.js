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
 <span>{ users.map((x, i) => <UserItem key={i} user={x} />)}</span>
);

const Stats = ({stats}) => (
  <span>22 users logged in today.</span>
);


export default ({users, stats}) => {
  return (
    <div className="auth0-users-widget">
      <h1>Latest Logins</h1>
      <div className="grid clearfix">
        <UserGrid users={users.recent} />
      </div>
      <p className="footer">
        <Stats stats={stats} />
      </p>
    </div>
  );
}
