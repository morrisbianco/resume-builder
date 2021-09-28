import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import html2canvas from 'html2canvas';
import './Template.css'

import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';

const Resume = () => {

  function createPDF(e) {
    const tempHTML = document.querySelector('#inner');
    const bounds = tempHTML.getBoundingClientRect();
    window.scrollTo(0, bounds.y);
    html2canvas(tempHTML).then(canvas => {
      console.log(canvas);
      const image = canvas.toDataURL('image/jpeg');
      e.target.href = image;
    });
  }

  useEffect(() => {
    document.title = `Rapid Résumé | Resume`;
  });

  const { loading, data, error } = useQuery(QUERY_ME);
  const user = data?.me;
  if (error) console.log(error);
  console.log(user);

  const renderEducationList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <EducationList user={user} title="List of Users" />
    }
  }
  const renderExperienceList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <ExperienceList user={user} title="List of Users" />
    }
  }
  const renderProjectList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <ProjectList user={user} title="List of Users" />
    }
  }

  if (!Auth.loggedIn()) {
    return (
      <div className="has-text-centered">
        <h4 className="fullprofile title mt-0">
          You need to be logged in to see this page. <br /> Use the navigation links above to
          sign up or log in!
        </h4>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <h1> Oops! Looks like something went wrong. </h1>
        <Link to='/'>Return to Home</Link>
      </div>
    )
  }

  return (
    <html className="hero">
      <head>
        <title>${user.resume.name} | Web Designer, Director | name@yourdomain.com</title>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="stylesheet" type="text/css"
          href="https://yui-s.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />
      </head>

      <body>
        <div id="doc2" className="yui-t7 margin1 contain2 full hero">
          <div id="inner">
            <div id="hd">
              <div className="yui-gc">
                <div className="yui-u first">
                  <h1>{`${user.resume[0].name}`}</h1>
                  <h2>Github: {`${user.resume[0].github}`} | Linkedin: {`${user.resume[0].linkedIn}`} </h2>
                </div>

                <div className="yui-u">
                  <div className="contact-info">
                    <h3>{`${user.email}`}</h3>
                    <h3>{`${user.resume[0].phoneNumber}`}</h3>
                    <h3>{`${user.resume[0].address}`}, {`${user.resume[0].city}`}</h3>
                    <h3>{`${user.resume[0].state}`}, {`${user.resume[0].zip}`}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div id="bd">
              <div id="yui-main">
                <div className="yui-b">
                  <div className="yui-gf">
                    <div className="yui-u first">
                      <h2>Profile</h2>
                    </div>
                    <div className="yui-u">
                      <p className="enlarge">
                        {`${user.resume[0].summary}`}
                      </p>
                    </div>
                  </div>

                  <div className="yui-gf">
                    <div className="yui-u first">
                      <h2>Skills</h2>
                    </div>
                    <div className="yui-u">
                      <ul className="talent">
                        <li>{`${user.resume[0].skills}`}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Projects</h2>
                  </div>
                  <div className="yui-u">
                    {renderProjectList()}
                  </div>
                </div>
              </div>
            </div>
            <div className="yui-gf">
              <div className="yui-u first">
                <h2>Experience</h2>
              </div>
              {renderExperienceList()}
            </div>
            <div className="yui-gf last">
              <div>
                <div className="yui-u first">
                  <h2>Education</h2>
                </div>
                {renderEducationList()}
              </div>
            </div>
            <div id="ft">
              <p>{`${user.resume[0].name}`} &mdash; {`${user.email}`} &mdash; {`${user.resume[0].phoneNumber}`} &mdash;
                {`${user.resume[0].address}`}, {`${user.resume[0].city}`}, {`${user.resume[0].state}`} {`${user.resume[0].zip}`}
              </p>
            </div>
          </div>
        </div>
        <a download='resume.jpeg' href='.' className="btnDownload button" onClick={createPDF}>click to download</a>
      </body>
    </html>
  );
};

export default Resume;