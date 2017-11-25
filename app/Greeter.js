//
import config from './config.json';
import React, {Component} from 'react';
import styles from './style.scss';

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
      -{config.greetText}-
      <span>222</span>
      </div>
    )
  }
}

export default Greeter;