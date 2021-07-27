import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import './profile.css'

const Resume = () => {

  useEffect(() => {
    document.title = `Rapid Résumé | Profile`;
  });

  const { loading, data, error } = useQuery(QUERY_ME);

  const user = data?.me;
  console.log(user)
  if (error) console.log(error);

  if (loading) {
    return <h4>Loading...</h4>;
  }

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
    <html>

      <head>

        <title>Jonathan Doe | Web Designer, Director | name@yourdomain.com</title>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        <meta name="keywords" content="" />
        <meta name="description" content="" />

        <link rel="stylesheet" type="text/css"
          href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />

      </head>

      <body>
        <div id="doc2" className="yui-t7">
          <div id="inner">

            <div id="hd">
              <div className="yui-gc">
                <div className="yui-u first">
                  <h1>Jonathan Doe</h1>
                  <h2>Web Designer, Director</h2>
                </div>

                <div className="yui-u">
                  <div className="contact-info">

                    <h3><a href="mailto:name@yourdomain.com">name@yourdomain.com</a></h3>
                    <h3>(313) - 867-5309</h3>
                  </div>
                  {/* <!--// .contact-info --> */}
                </div>
              </div>
              {/* <!--// .yui-gc --> */}
            </div>
            {/* <!--// hd --> */}

            <div id="bd">
              <div id="yui-main">
                <div className="yui-b">

                  <div className="yui-gf">
                    <div className="yui-u first">
                      <h2>Profile</h2>
                    </div>
                    <div className="yui-u">
                      <p className="enlarge">
                        Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize
                        tactical initiatives before cross-media catalysts for change.
                      </p>
                    </div>
                  </div>
                  {/* <!--// .yui-gf --> */}

                  <div className="yui-gf">
                    <div className="yui-u first">
                      <h2>Skills</h2>
                    </div>
                    <div className="yui-u">

                      <div className="talent">
                        <h2>Web Design</h2>
                        <p>Assertively exploit wireless initiatives rather than synergistic core competencies. </p>
                      </div>

                      <div className="talent">
                        <h2>Interface Design</h2>
                        <p>Credibly streamline mission-critical value with multifunctional functionalities. </p>
                      </div>

                      <div className="talent">
                        <h2>Project Direction</h2>
                        <p>Proven ability to lead and manage a wide variety of design and development projects in team and
                          independent situations.</p>
                      </div>
                    </div>
                  </div>
                  {/* <!--// .yui-gf --> */}

                  <div className="yui-gf">
                    <div className="yui-u first">
                      <h2>Technical</h2>
                    </div>
                    <div className="yui-u">
                      <ul className="talent">
                        <li>XHTML</li>
                        <li>CSS</li>
                        <li className="last">Javascript</li>
                      </ul>

                      <ul className="talent">
                        <li>Jquery</li>
                        <li>PHP</li>
                        <li className="last">CVS / Subversion</li>
                      </ul>

                      <ul className="talent">
                        <li>OS X</li>
                        <li>Windows XP/Vista</li>
                        <li className="last">Linux</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!--// .yui-gf--> */}

                  <div className="yui-gf">

                    <div className="yui-u first">
                      <h2>Experience</h2>
                    </div>
                    {/* <!--// .yui-u --> */}
                    <div className="yui-u">
                      <div className="job last">
                        <h2>International Business Machines (IBM)</h2>
                        <h3>Lead Web Designer</h3>
                        <h4>2001-2004</h4>
                        <p>Globally re-engineer cross-media schemas through viral methods of empowerment. Proactively grow
                          long-term high-impact human capital and highly efficient innovation. Intrinsicly iterate excellent
                          e-tailers with timely e-markets.</p>
                      </div>
                    </div>
                  </div>
                  <div className="yui-gf last">
                    <div className="yui-u first">
                      <h2>Education</h2>
                    </div>
                    <div className="yui-u">
                      <h2>Indiana University - Bloomington, Indiana</h2>
                      <h3>Dual Major, Economics and English &mdash; <strong>4.0 GPA</strong> </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="ft">
              <p>Jonathan Doe &mdash; <a href="mailto:name@yourdomain.com">name@yourdomain.com</a> &mdash; (313) - 867-5309
              </p>
            </div>
            {/* <!--// footer --> */}

          </div>
          {/* <!-- // inner --> */}

        </div>
        {/* <!--// doc --> */}


      </body>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
<script>
	const main = document.querySelector("main");
	const button = document.querySelector("button");

	function createPDF() {
		var pdf = new jsPDF('p', 'pt', 'a4');
		pdf.addHTML(main, function () {
			pdf.save('web.pdf');
		});
	}

	button.addEventListener("click", () => {
		button.style.display = 'none';
		createPDF();
	});
</script> */}

    </html>
  );
};

export default Resume;