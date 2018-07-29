import { Component } from 'react';

export default class ScrollToTop extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
