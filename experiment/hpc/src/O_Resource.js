import React from 'react';
import { render } from 'react-dom';

const SpecialButton = ({ children, color }) => (
  <button style={{color}}>{children}</button>
);

const htmlFromCMS = `
<!DOCTYPE html>
<!-- saved from url=(0044)https://hpc2.soc.napier.ac.uk/resources.html -->
<html lang="en-us"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="http://gmpg.org/xfn/11" rel="profile">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  

  <!-- Enable responsiveness on mobile devices-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  

    <main class="container">
      <header>
  <h1 class="page-title">Resources</h1>
</header>
<div class="content">
  <h2>HPC at EPCC</h2>
<p>Where to go if the computational resource provided by HPC2 is not sufficient?<br>
The Edinburgh Parallel Computing Centre (EPCC) is part of the University of Edinburgh and hosts the EPSRC funded HPC <a href="https://www.epcc.ed.ac.uk/facilities" target="_blank">clusters</a>.<br>
</p><ul>
    <li><a href="http://www.archer.ac.uk/" targer="_blank">ARCHER</a></li>
    <li><a href="http://www.cirrus.ac.uk/" targer="_blank">Cirrus</a></li>
    <li><a href="http://www.rdf.ac.uk/" targer="_blank">UK RDF</a>(Research Data Facility)</li>
    <!-- <li><a href="https://dirac.ac.uk/" targer="_blank">DIRAC</li> -->
    <li><a href="https://www.epcc.ed.ac.uk/facilities/demand-computing/gpu" targer="_blank">GPU</a></li>
</ul>
<br>
<h3>Training Materials</h3>
There are a lot of free online HPC training materials (including a 5 week online course, CUDA in an afternoon) 
<a href="https://www.epcc.ed.ac.uk/online-learning" targer="_blank">https://www.epcc.ed.ac.uk/online-learning</a>
The <a href="http://www.archer.ac.uk/training/online/driving_test.php" targer="_blank">ARCHER driving test</a> is a useful and mandatory training for everyone who wants to use ARCHER, or any HPC facility for that matter.
<br>
<h3>Access to HPC facilities</h3>
There are different access model for the EPCC facilities:
<ul>
    <li>The <a href="http://www.archer.ac.uk/training/online/driving_test.php" targer="_blank">ARCHER driving test</a></li>
    <li>Free access to Cirrus as a Scottish university:<br>
    As a scottish university we have free access to Cirrus see <a href="http://www.cirrus.ac.uk/access/scottish.html" targer="_blank">here</a> for more details and how to apply.</li>
    <li>ARCHER as part of EPSRC funded project. <br>
    If you work on a <a href="http://www.archer.ac.uk/access/#epsrc" targer="_blank">EPSRC</a> or <a href="http://www.archer.ac.uk/access/#nerc" targer="_blank">NERC</a> funded project and compute time at the EPCC has been part of the proposal, then you can most likely make use of ARCHER.</li>
    <li>Short trial access through Instant Access for
        <ul>
            <li><a href="http://www.archer.ac.uk/access/instant-access/" targer="_blank">ARCHER</a></li>
            <li><a href="http://www.cirrus.ac.uk/access/instant.html" targer="_blank">Cirrus</a></li>
        </ul>
    </li>
</ul>
<p></p>

</div>

    </main>

    <!-- Optional footer content -->

  

</body></html>
`;

const App = () => (
  <div dangerouslySetInnerHTML={{__html: htmlFromCMS}}>
  </div>
);


export default function O_Resource(){
    return(
         <App/>
    )
}