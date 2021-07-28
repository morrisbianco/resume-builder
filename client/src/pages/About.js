import React, { useEffect } from 'react';
import './aboutUs.css';


const About = () => {

  useEffect(() => {
    document.title = `Rapid Résumé | Our Team`;
  });

  return (

<div class="container aboutUsFull  py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
      </div>
    </div>

    <div class="row text-center">
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://avatars.githubusercontent.com/u/82290175?v=4?s=400" alt="" width="100" class="imgluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Andrew Bianco</h5><span class="small text-uppercase text-muted">Front End - React</span>
          <ul class="columns">
            <li class="column"><a href="https://github.com/morrisbianco" class="social-link"><i class="fa fa-github"></i></a></li>
            <li class="column"><a href="mailto:andrewbianco98@gmail.com" class="social-link"><i class="fa fa-envelope"></i></a></li>
            <li class="column"><a href="https://www.linkedin.com/in/morris-bianco-a7165820b/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
       

      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://avatars.githubusercontent.com/u/82119489?v=4?s=400" alt="" width="100" class="imgluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Joshua Crane</h5><span class="small text-uppercase text-muted">Front End - UI-UX</span>
          <ul class="columns">
            <li class="column"><a href="https://github.com/Jdogcrane" class="social-link"><i class="fa fa-github"></i></a></li>
            <li class="column"><a href="mailto:Jdogcrane@gmail.com" class="social-link"><i class="fa fa-envelope"></i></a></li>
            <li class="column"><a href="https://www.linkedin.com/in/joshua-crane-911532210/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
       

      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://avatars.githubusercontent.com/u/83303497?v=4?s=400" alt="" width="100" class="imgluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Alan Gaudet</h5><span class="small text-uppercase text-muted">Back End - MongoDB</span>
          <ul class="columns">
            <li class="column"><a href="https://github.com/amgaudet" class="social-link"><i class="fa fa-github"></i></a></li>
            <li class="column"><a href="mailto:alanmgaudet@gmail.com" class="social-link"><i class="fa fa-envelope"></i></a></li>
            <li class="column"><a href="https://www.linkedin.com/in/alan-gaudet-256a53210" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
       

      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://avatars.githubusercontent.com/u/54995873?v=4?s=400" alt="" width="100" class="imgluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Ryan Paynter</h5><span class="small text-uppercase text-muted">Back End - New Tech</span>
          <ul class="columns">
            <li class="column"><a href="https://github.com/ryanpaynt" class="social-link"><i class="fa fa-github"></i></a></li>
            <li class="column"><a href="mailto:ryanpaynt@outlook.com" class="social-link"><i class="fa fa-envelope"></i></a></li>
            <li class="column"><a href="https://www.linkedin.com/in/ryan-paynter-2ba594191/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
       

    </div>
  </div>

        )
};

        export default About;