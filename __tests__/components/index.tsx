import React from 'react';
import PropTypes from 'prop-types';

export type Props = { className: string; value: object; onChange: Function };

export default class BoilerplateReactTsComponent extends React.Component<Props> {
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

  render() {
    const { value } = this.props;
    return <div style={{ color: 'red' }}>Hello world. {value}</div>;
  }
}
