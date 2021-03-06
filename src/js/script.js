function InnerHeader(props) {
  return (
    <div className="wrapper">
      <h1 className="header-project">Power-engineering project</h1>
    </div>
  );
}

ReactDOM.render(<InnerHeader />, document.getElementById('header'));

function MainHeader(props) {
  return (
    <h2 className="main__header">{props.value}</h2>
  );
}

function MainDescription(props) {
  const text = 'Some description of my work: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <p className="main__description">{text}</p>
  );
}

function MainWrapper(props) {
  return (
    <div className="wrapper">
      <MainHeader value="Header of the project"/>
      <MainDescription />
    </div>
  );
}

ReactDOM.render(<MainWrapper className="wrapper"/>, document.getElementById('main-information'));

function Footer(props) {
  return (
    <div></div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('footer'));