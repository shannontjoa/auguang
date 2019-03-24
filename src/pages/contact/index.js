import React from 'react';
import Layout from '../../components/Layout';
import MdHome from 'react-icons/lib/md/home';
import FaPhone from 'react-icons/lib/fa/phone';
import MdEmail from 'react-icons/lib/md/email';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content" style={{ marginTop: '100px' }}>
              <h1>Contact Us</h1>
              <div className="card" style={{ 'max-width': '400px' }}>
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
