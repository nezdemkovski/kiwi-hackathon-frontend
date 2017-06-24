import React, { Component } from 'react';

class CitiesCount extends Component {
  constructor(props) {
    super(props);
    this.chars = '010101';
    this.state = {
      count: this.props.count,
    };
  }
  setRandom = () => {
    this.setText(`${Math.floor(Math.random() * 4000)}`);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      this.setText(this.props.count);
    }
  }
  setText = newText => {
    const oldText = this.state.count;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  };
  update = () => {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += char;
      } else {
        output += from;
      }
    }
    this.setState({ count: output });
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };
  randomChar = () => {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  };
  render() {
    return (
      <div
        className="text"
        ref={node => {
          this.text = node;
        }}
      >
        {this.state.count} places
      </div>
    );
  }
}

export default CitiesCount;
