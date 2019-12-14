import React from "react";

import "./Header.scss";

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      version: "0.0.0"
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://registry.npmjs.com/react-figma-plugin-ds')
      .then(res => res.json())
      .then(data => {
        this.setState({
          version: data["dist-tags"].latest
        })
      })
  }

  render() {
    return (
      <>
        <header className="header">
          <div></div>
          <div>React Figma Plugin / Examples</div>
          <div className="links">
            <a
              className="avatar"
              href="https://twitter.com/alexandrtovmach"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://www.gravatar.com/avatar/83c2a3f2d5337e5d04680e4150ad2073?size=240&amp;default=https%3A%2F%2Fs3-alpha.figma.com%2Fstatic%2Fuser_1.png"
              />
            </a>
            <a
              className="button button--primary"
              href="https://github.com/alexandrtovmach/react-figma-plugin-ds"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            <a
              className="version type type--pos-small-normal"
              href="https://www.npmjs.com/package/react-figma-plugin-ds/v/latest"
              target="_blank"
              rel="noreferrer noopener"
            >
              v{this.state.version}
            </a>
          </div>
        </header>
        <div className="header-compensator"></div>
      </>
    );
  }
}
