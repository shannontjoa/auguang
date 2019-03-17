import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import MdHome from 'react-icons/lib/md/home';
import FaPhone from 'react-icons/lib/fa/phone';
import MdEmail from 'react-icons/lib/md/email';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact Us</h1>
              <div className="card">
                <div className="card-image" />
                <div className="card-content">
                  <MdHome />
                  &nbsp; 1120 Anzac Parade, Maroubra NSW 2035
                  <p />
                  <FaPhone />
                  &nbsp; +61 9661 8922
                  <p />
                  <MdEmail />
                  &nbsp; admin@auguang.info
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
