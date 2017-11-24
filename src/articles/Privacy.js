import React, { Component } from 'react';
import Article from '../components/Article';
import privacy from './privacy.md';

export default class Privacy extends Component {
  state = {
    markdown: '',
  }

  componentWillMount() {
    this._fetchMarkdown();
  }

  _fetchMarkdown = async () => {
    const data = await fetch(privacy);
    const text = await data.text();
    this.setState({markdown: text});
  }

  render() {
    const { markdown } = this.state;
    return <Article source={markdown} />
  }
}
