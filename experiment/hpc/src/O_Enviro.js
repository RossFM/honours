import React from 'react';
import { render } from 'react-dom';

const SpecialButton = ({ children, color }) => (
  <button style={{color}}>{children}</button>
);

const htmlFromCMS = `
<!DOCTYPE html>
<!-- saved from url=(0046)https://hpc2.soc.napier.ac.uk/environment.html -->
<html lang="en-us"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="http://gmpg.org/xfn/11" rel="profile">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  

  <!-- Enable responsiveness on mobile devices-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>
    
      Environment · HPC2
    
  </title>

    <main class="container">
      <header>
  <h1 class="page-title">Environment</h1>
</header>
<div class="content">
  <p>The headnode and nodes are running Ubuntu:bionic.</p>

<p>Installed on the headnode is the following packages:</p>

<div class="highlighter-rouge"><div class="highlight"><pre class="highlight"><code>slurm-client 
default-jdk gradle 
libhwloc-dev 
nodejs libssl-dev python3-pip libffi-dev python-dev perl 
libopenmpi-dev libopenmpi2 openmpi-bin openmpi-common openmpi-doc 
git zip bzip2 nano wget openssh-server cmake build-essential 
autoconf automake autotools-dev libtool pkg-config 

</code></pre></div></div>
<p>Nodes have:</p>

<div class="highlighter-rouge"><div class="highlight"><pre class="highlight"><code>slurmd slurm-client 
default-jdk gradle 
libhwloc-dev 
nodejs libssl-dev python3-pip libffi-dev python-dev perl 
libopenmpi-dev libopenmpi2 openmpi-bin openmpi-common openmpi-doc 
git zip bzip2 nano wget openssh-server cmake build-essential
</code></pre></div></div>

<p>Reasonable requests to install sensible packages will be granted*</p>

<p>*This excludes specific versions of already installed software</p>

<hr>
<p>DNS is set so node1, node2,…. will resolve to the node ip. So you can do :</p>

<p><code class="highlighter-rouge">ssh node1</code></p>

<p>Nodes can access the internet.</p>

<p>They are firewalled with no pot forwarding so you can’t talk to a node without going through the headnode</p>

<hr>

<h2 id="nodes-will-delete-local-data-perodically-when">Nodes will delete local data perodically, when:</h2>
<ul>
  <li>No job is running and the data is older than a few days</li>
  <li>If there is not enough space for a job, old job data will be wiped.</li>
</ul>

<h3 id="local-storage">Local Storage</h3>
<ul>
  <li>Each node has a 2TB Disk. Your homedrive on the nodes is local to that node.</li>
  <li>Most nodes also have between 500GB/1TB space mounted at /scratch. It may be slightly faster than the local disk.
    <h3 id="share">/Share</h3>
  </li>
  <li>/share is hosted on headnode [for now], it is mounted on /share throughout the cluster.</li>
  <li>This does not auto-wipe, but we only have a 500Gb limit, so move data off promptly.</li>
</ul>


</div>

    </main>

    <!-- Optional footer content -->

  

</body></html>
`;

const App = () => (
  <div dangerouslySetInnerHTML={{__html: htmlFromCMS}}>
  </div>
);


export default function O_Enviro(){
    return(
         <App/>
    )
}