import React, {Component} from "react"
import { Link } from "gatsby"
import 'bulma';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class MyCounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    let kindClass = `is-${this.props.kind}`;
    let disabled = false;
    if (this.state.counter >= 5) {
      kindClass = `is-success`;
      disabled = true;
    }
    return (
      <div>
        <button className={`button ${kindClass}`} onClick={this.onClick} disabled={disabled}>
          {this.props.label} counted {this.state.counter} times!
        </button>
      </div>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{textShadow: '0px 1px 22px rgba(255,0,0,0.7)'}}>Hi people, specially Tony</h1>
    <div class="columns is-desktop">
      <div class="column is-primary">
        <MyCounterButton kind="secondary" label="test"/>
      </div>
      <div class="column is-primary">
        <MyCounterButton kind="primary" label="diobel"/>
      </div>
      <div class="column is-primary">
        <button class="button is-primary">Primary</button>
      </div>
      <div class="column is-primary">
        <button class="button is-primary">Primary</button>
      </div>
    </div>
    <div class="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-link">Link</button>
</div>

<div class="buttons">
  <button class="button is-info">Info</button>
  <button class="button is-success">Success</button>
  <button class="button is-warning">Warning</button>
  <button class="button is-danger">Danger</button>
</div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
