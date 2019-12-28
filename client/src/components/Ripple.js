import React from 'react';


class Ripple extends React.Component {
    initializeState = () => {
      return {
        spanStyles: {},
        count: 0
      }
    }
    state = this.initializeState();

    render() {
      const {children = null, classes="", onClickHandler=null} = this.props;
      return (
        <div className={classes} onClick={this.onClickHandler}>
          {this.props.children}
        </div>
      );
    }
  }


export default Ripple