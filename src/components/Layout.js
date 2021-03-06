import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/sass/main.scss'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPreloaded: true,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const {
      children,
      extraTitle,
      metaDescription,
      extraKeywords = '',
    } = this.props
    const { isPreloaded } = this.state

    const finalKeywords = [
      'animación, hostelería, recepción, restauración, animador, hostelero, recepcionista',
      extraKeywords,
    ]
      .filter(Boolean)
      .join(', ')

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                heading
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={[extraTitle, data.site.siteMetadata.title]
                .filter(Boolean)
                .join(' - ')}
              meta={[
                {
                  name: 'description',
                  content: metaDescription || data.site.siteMetadata.heading,
                },
                {
                  name: 'keywords',
                  content: finalKeywords,
                },
              ]}
            >
              <html lang="es" />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              {children}
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
