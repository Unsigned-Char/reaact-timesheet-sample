var React = require('react/addons');

var FormSectionHeader = React.createClass({

  render: function () {

    return (
      <div className="two column row">
        <div className="column">
          <h4>{this.props.header}</h4>
        </div>
        <div className="column">
          {this.props.rightContent}
        </div>
      </div>
    );
  }
});

module.exports = FormSectionHeader;