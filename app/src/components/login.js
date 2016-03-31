'use strict';

const React = require('react');
const Link = require('react-router').Link;

const Login = React.createClass({
  handleClick: function (e) {

  },
  render: function () {
    return (
      <div className="row">
        <img className='logo-size' src='images/logo.jpg' />
        <form method='post' action='localhost:3001/api/trails'>
          <label htmlFor="first_name">Nombre</label>
          <input name="first_name" type="text" className="u-full-width" placeholder="Escribe tu nombre" />
          <label htmlFor="last_name">Apellido</label>
          <input name="last_name" type="text" className="u-full-width" placeholder="Escribe tu apellido" />
          <label htmlFor="route">Clave de tu ruta</label>
          <input name="route" type="text" className="u-full-width" placeholder="Escribe tu clave de ruta" />
          <Link to='/check'>
            <input onClick={this.handleClick} className="button-primary u-full-width" type="submit" value="Enviar" />
          </Link>
        </form>
      </div>
    );
  }
});

module.exports = Login;
