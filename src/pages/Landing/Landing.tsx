import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import styled from 'styled-components'
import iconLogoBlack from 'url:../../assets/images/logo_black.svg'
import { Layout } from '../../components/Layout'
import './Landing.scss'
import texts from './landing_page_texts.json'

const StyledSocialLinkIcons = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-left: 10px;
`

export const Landing: React.FC = (props) => {
  return (
    <Layout skipHeader={true} skipMenu={true} skipFooter={true}>
      <div className="column landing_page">
        <div className="row header">
          <img src={iconLogoBlack} />
          <section className="column">
            <h1>SOCIAL SLAM</h1>
            <p>{texts.header}</p>
          </section>
        </div>
        <div className="row section_row">
          <section className="column">
            <h3>Problem</h3>
            <p>{texts.problem}</p>
          </section>
          <section className="column">
            <h3>Strategie</h3>
            <p>{texts.strategy}</p>
          </section>
          <section className="column">
            <h3>Lösung</h3>
            <p>{texts.solution}</p>
          </section>
        </div>
        <div className="row blue">
          <h2>Ziel der Plattform</h2>
          <p>{texts.platform_goal_1}</p>
          <p>{texts.platform_goal_2}</p>
        </div>
        <div className="row section_row">
          <section className="column">
            <h3>USP</h3>
            <p>{texts.USP}</p>
          </section>
          <section className="column">
            <h3>Zielgruppe</h3>
            <p>{texts.demographic}</p>
          </section>
        </div>
        <footer className="row">
          <div>
            <span>contact@socialslam.de</span>
          </div>
          <div className="social_media">
            <span>Folge uns für weitere Informationen auf</span>
            <a
              href="https://www.facebook.com/SocialSlam.official/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledSocialLinkIcons icon={faFacebookSquare} />
            </a>
            <a
              href="https://www.instagram.com/socialslam_official/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledSocialLinkIcons icon={faInstagram} />
            </a>
          </div>
        </footer>
      </div>
    </Layout>
  )
}
