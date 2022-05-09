import React, { Component } from 'react';
import PropTypes from 'prop-types';
{/*PropTypes exports a range of validators that can be used to make sure the data you receive is valid.*/}
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
{/*when react helmet is used with server-side rendering, it allows you to set meta tags that will be read by search engines and social media crawlers.*/}
import '../assets/sass/grayscale.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Grayscale' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
              <meta name="referrer" content="origin"></meta>
            </Helmet>
            <div className={'page-top'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
