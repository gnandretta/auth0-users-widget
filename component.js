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

const UserItem = ({i, onClick, user}) => {
  const maybeSocialProvider = user.socialProviders.length > 0
    ? <SocialProvider str={user.socialProviders[0]} />
    : null;

  const clickHandler = () => onClick(user);

  let css = {
    animationDelay: (i * 50) + 'ms'
  };

  return (
    <div className="user animated fadeIn" style={css} onClick={clickHandler}>
      <div className="tile">
        <img src={user.picture} />
        {maybeSocialProvider}
      </div>
    </div>
  );
};

const UserGrid = ({selectUser, users}) => (
  <span>
    {users.map((x, i) => <UserItem key={i} i={i} user={x} onClick={selectUser} />)}
  </span>
);

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {oldUser: false}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({oldUser: !nextProps.user && this.props.user});
  }

  render() {
    let {user, selectUser} = this.props;

    const clickHandler = e => {
      e.preventDefault();

      selectUser(undefined);
    }
    let className = user ? 'fadeInRight' : 'fadeOutRight';
    className += ' information animated';

    if (!user && !this.state.oldUser) {
      return <span></span>;
    }

    if (!user) {
      user = this.state.oldUser;
    }

    const maybeSocialProvider = user.socialProviders.length > 0
      ? <SocialProvider str={user.socialProviders[0]} />
      : null;

    return (
      <div className={className}>
        <a onClick={clickHandler} href="#" className="back"><i className="material-icons">keyboard_backspace</i></a>

        <div className="content">
          <div className="picture">
            <img src={user.picture} />
            {maybeSocialProvider}
          </div>

          <h2 className="name truncate">{user.nickname}</h2>
          <p className="secondary">Frontend Developer</p>
          <p className="additional">I like unicorns and bold fonts.</p>
          <a className="btn btn-lg btn-success" href="#"><span className="btn-icon icon-budicon-493"></span>Look up</a>
        </div>
      </div>
    );

  }
}
const Stats = ({logins}) => {
  let msg;
  switch(logins) {
    case undefined:
      msg = "";
      break;
    case 0:
      msg = "Nobody logged in today.";
      break;
    case 1:
      msg = "1 user logged in today.";
      break;
    default:
      msg = `${logins} users logged in today.`;
  }
  return !msg ? <span>&nbsp;</span> : <span className="animated fadeIn">{msg}</span>;
};

const Error = () => (
  <div className="error">
    <span className="circle"><span className="icon-budicon-414"></span></span>
    <p>There was an error retrieving users. Please <a href="#">try again</a> later.</p>
  </div>
);

export default ({users, selectUser, stats}) => {
  const maybeError = users.error ? <Error /> : null;
  const areLatestUsersSync = Array.isArray(users.latest)
    && !users.error
    && users.latest.reduce((r, o) => r && typeof o.sync === "string", true);
  const maybeLoading = !areLatestUsersSync && !users.error
    ? <Loading />
    : null;
  const maybeLatestUsers = areLatestUsersSync && !users.error
    ? <UserGrid users={users.latest} selectUser={selectUser}/>
    : null;
  const maybeUser = !users.error
    ? <User user={users.selected} selectUser={selectUser} />
    : null;

  return (
    <div className="auth0-users-widget">
      <h1>Latest Logins</h1>
      <div className="grid clearfix">
        {maybeError}
        {maybeUser}
        {maybeLoading}
        {maybeLatestUsers}
      </div>
      <p className="footer">
        <Stats {...stats} />
      </p>
    </div>
  );
}
