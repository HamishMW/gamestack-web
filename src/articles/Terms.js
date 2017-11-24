import React, { Component } from 'react';
import Article from '../components/Article';
import terms from './terms.md';

export default class Privacy extends Component {
  state = {
    markdown: '',
  }

  componentWillMount() {
    this._fetchMarkdown();
  }

  _fetchMarkdown = async () => {
    const data = await fetch(terms);
    const text = await data.text();
    this.setState({markdown: text});
  }

  render() {
    const { markdown } = this.state;
    return <Article source={markdown} />
  }
}
