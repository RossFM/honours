import React from 'react';
import { render } from 'react-dom';

const SpecialButton = ({ children, color }) => (
  <button style={{color}}>{children}</button>
);

const htmlFromCMS = `
<!DOCTYPE html>
<!-- saved from url=(0030)https://hpc2.soc.napier.ac.uk/ -->
<html lang="en-us"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="http://gmpg.org/xfn/11" rel="profile">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  

  <!-- Enable responsiveness on mobile devices-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>
    
      HPC2 · Ready To Compute
    
  </title>


    <main class="container">
      <header>
</header>
<div class="content">
  <h1>This is HPC2</h1>
<p>HPC2 is made up of 40 nodes. <br>
  The head node is at <a>146.176.166.48</a> or <a>hpc2.soc.napier.ac.uk</a>. Use ssh 4000XXXX@&gt;hpc2.soc.napier.ac.uk to get in</p>
<ul>
    <li>Connected by a gigabit switch. With a 10Gb uplink to the headnode</li>
    <li>All nodes are firewalled behind the headnode, can access inter/intra-net</li>
    <li>All nodes Run Ubuntu 18.04</li>
    <li>Job scheduling is done via SLURM</li>
  </ul>
<p>Nodes are split into partitions based on hardware capability.</p>
<table>
    <tbody><tr><th></th><th>hpc2_main</th><th>hpc2_oldNodes</th><th>Junker</th></tr>
    <tr><th>Nodes:</th><th>23</th><th>16</th><th>6</th></tr>
    <tr><th>CPU:</th><th>2x Xeon E5-2640v3 2.60GHz 8C/16T</th><th>2x Xeon E5520 2.26 GHz 4C/8T </th><th>i7-870 @3Ghz 4C/8T</th></tr>
    <tr><th>Ram:</th><th>64gb 2133Mhz</th><th>16gb 1066MHZ</th><th>8gb 1333MHz</th></tr>
    <tr><th>Storage:</th><th>2TB+ HDD</th><th>240gb SSD</th><th>320GB HDD</th></tr>
  </tbody></table>

<p>For more info, email s.serrels@napier.ac.uk </p>



</div>

    </main>

    <!-- Optional footer content -->

  

</body></html>
`;

const App = () => (
  <div dangerouslySetInnerHTML={{__html: htmlFromCMS}}>
  </div>
);


export default function O_Home(){
    return(
         <App/>
    )
}