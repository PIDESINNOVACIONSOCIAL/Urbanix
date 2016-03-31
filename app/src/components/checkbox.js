'use strict';

const React = require('react');
const Link = require('react-router').Link;

const OptionCheck = require('./option');

const CheckBox = React.createClass({
  componentWillMount: function () {
    this.setState({
      data: [
        { _id: '1234',name: 'Juan Acatitla' }
      ]
    });
  },
  getInitialState: function () {
    return {
      title: 'Uberto - Checador',
      route: 'Una ruta peligrosa',
      plaque: '',
      status: ''
    };
  },
  handlePlaqueChange: function (e) {
    this.setState({
      plaque: e.target.value
    });
  },
  handleSubmitClick: function () {
    this.setState({
      plaque: '',
      status: 'Registration complete...'
    });
  },
  render: function () {
    return (
      <div>
        <img className='logo-size' src='images/logo.jpg' />
        <Link to='/'>Atras</Link>
        <div>
          {this.state.status ? <p className='confirm-status'>{this.state.status}</p> : '' }
        </div>
        <div className="row">
          <h4>{this.state.title}</h4>
        </div>
        <div className="row">
          <div className="ruta u-full-width">{this.state.route}</div>
          <select className="u-full-width" >
            {
              this.state.data.map(element => {
                return <OptionCheck key={element._id} name={element.name} />;
              })
            }
          </select>
          <input
            onChange={this.handlePlaqueChange}
            className="u-full-width"
            type="text"
            placeholder="Placa"
            value={this.state.plaque} />
          <div className="row">
            <input
              onClick={this.handleSubmitClick}
              name="Enviar"
              type="submit"
              value="Enviar"
              className="boton u-full-width" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CheckBox;
