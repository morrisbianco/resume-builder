import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import './Template.css'

const Resume = () => {

  useEffect(() => {
    document.title = `Rapid Résumé | Resume`;
  });

  const { loading, data, error } = useQuery(QUERY_ME);
  const user = data?.me;
  if (error) console.log(error);
  console.log(user);


  if (!Auth.loggedIn()) {
    return (
      <div className="has-text-centered">
        <h4 className="fullprofile title mt-6">
          You need to be logged in to see this page. <br /> Use the navigation links above to
          sign up or log in!
        </h4>
      </div>
    );
  }

  return (
    <html className="hero">
      <head>
        <title>${user.resume.name} | Web Designer, Director | name@yourdomain.com</title>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="stylesheet" type="text/css"
					href="" media="all" />
      </head>

      <body>
        <div id="doc2" className="yui-t7 animate__rollIn animate__animated margin1 contain2 full hero">
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
                        {/* <li className="last">Javascript</li>
                      </ul>
// test
                      <ul className="talent">
                        <li>Jquery</li>
                        <li>PHP</li>
                        <li className="last">CVS / Subversion</li>
                      </ul>

                      <ul className="talent">
                        <li>OS X</li>
                        <li>Windows XP/Vista</li>
                        <li className="last">Linux</li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Projects</h2>
                  </div>
                  <div className="yui-u">

                    <div className="talent">
                      <h2>{`${user.project[0].title}`}</h2>
                      <p>{`${user.project[0].points}`}</p>
                      <p>{`${user.project[0].tools}`}</p>
                      <p>{`${user.project[0].link}`}</p>
                    </div>

                    {/* <div className="talent">
                      <h2>App Interface Debugger</h2>
                      <p>Debug your app's interface like a professional with React-friendly debugging application. </p>
                      <p>AppIDebugger.com</p>
                    </div>

                    <div className="talent">
                      <h2>Project Manager</h2>
                      <p>A project manager built into your console that allows the user to manage multiple projects and teams. </p>
                      <p>ProjManager.com</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="yui-gf">
              <div className="yui-u first">
                <h2>Experience</h2>
              </div>
              <div className="yui-u">
                <div className="job last">
                  <h2>{`${user.experience[0].company}`}</h2>
                  <h2>{`${user.experience[0].location}`}</h2>
                  <h3>{`${user.experience[0].role}`}</h3>
                  <h4>{`${user.experience[0].date}`}</h4>
                  <p>{`${user.experience[0].description}`}</p>
                  <p>{`${user.experience[0].keyAchievements}`}</p>
                </div>
              </div>
            </div>
            <div className="yui-gf last">
              <div className="yui-u first">
                <h2>Education</h2>
              </div>
              <div className="job last">
                <h4>{`${user.education[0].date}`}</h4>
              </div>
              <div className="yui-u">
                <h2>{`${user.education[0].school}`} - {`${user.education[0].location}`}</h2>
                <h3>{`${user.education[0].description}`} </h3>
              </div>
            </div>
            <div id="ft">
              <p>{`${user.resume[0].name}`} &mdash; {`${user.email}`} &mdash; {`${user.resume[0].phoneNumber}`} &mdash;
                {`${user.resume[0].address}`}, {`${user.resume[0].city}`}, {`${user.resume[0].state}`} {`${user.resume[0].zip}`}
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Resume;