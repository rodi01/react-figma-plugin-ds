import React from "react";

import { Button, Checkbox, Disclosure } from "../../dist";
import Layout from "./components/Layout";

export default class ExaplePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {} = this.state;
    return (
      <Layout>
        <section id="buttons" className="viewport">
          <div className="frame">
            <Button>Start</Button>
            <Button isDestructive>Start</Button>
            <Button isSecondary isDestructive onClick={console.log}>
              Start
            </Button>
          </div>
        </section>

        <section id="checkbox" className="viewport">
          <div className="frame">
            <Checkbox defaultValue={true} isCheckbox label="Checkbox" />
            <Checkbox label="Switch" />
            <Checkbox onChange={console.log} label="with handler" />
          </div>
        </section>

        <section id="checkbox" className="viewport">
          <div className="frame">
            <Disclosure label="Disclosure">Panel content here</Disclosure>
            <Disclosure label="Disclosure" isSection isDefaultExpanded>Panel content here</Disclosure>
            <Disclosure label="Disclosure" isSection onExpandChange={console.log}>Panel content here</Disclosure>
          </div>
        </section>
      </Layout>
    );
  }
}