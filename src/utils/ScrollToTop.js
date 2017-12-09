import React from 'react';

export default class ScrollToTop extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
