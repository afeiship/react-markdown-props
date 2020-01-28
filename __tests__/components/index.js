import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'boilerplate-react-component';

export default class BoilerplateReactComponent extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.object,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.state = {};
  }

  _onClick = (e) => {
    console.log('click me!');
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...props}>
        <p>
          <button onClick={this._onClick} className="icon-play">
            PLAY
          </button>
        </p>
        <p>Hello React!!</p>
      </div>
    );
  }
}
