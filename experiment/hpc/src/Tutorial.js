import React from 'react';
import { render } from 'react-dom';

const SpecialButton = ({ children, color }) => (
  <button style={{color}}>{children}</button>
);

const htmlFromCMS = `
<!DOCTYPE html>
<!-- saved from url=(0043)https://hpc2.soc.napier.ac.uk/tutorial.html -->
<html lang="en-us"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="http://gmpg.org/xfn/11" rel="profile">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  

  <!-- Enable responsiveness on mobile devices-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>
    
      Tutorial · HPC2
    
  </title>

  


  <!-- CSS -->
  <link rel="stylesheet" href="./Tutorial · HPC2_files/main.css">
  

<link rel="stylesheet" href="./Tutorial · HPC2_files/css">

  <!-- Icons -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://hpc2.soc.napier.ac.uk/favicon.png">
<link rel="shortcut icon" href="https://hpc2.soc.napier.ac.uk/favicon.ico">

  <!-- RSS -->
  <link rel="alternate" type="application/rss+xml" title="RSS" href="https://hpc2.soc.napier.ac.uk/feed.xml">

  <!-- Additional head bits without overriding original head -->
</head>


  <body class="page">

    <main class="container">
      <header>
  <h1 class="page-title">Tutorial</h1>
</header>
<div class="content">
  <h1 id="using-hpc2-with-slurm">Using HPC2 with Slurm</h1>

<p>HPC2 uses a new job scheduler: <a href="https://slurm.schedmd.com/">Slurm</a>.  Slurm is the current standard used in the majority of HPC systems and therefore there is quite a bit of information out there on how to use it.  The aim of this tutorial is to get you started on HPC2 but please ask for help if you are unsure.</p>

<h2 id="logging-in">Logging In</h2>

<p>HPC2 links to the University’s LDAP server, so you can use your standard username and password.  Login is via <code class="highlighter-rouge">ssh</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>ssh &lt;user&gt;@hpc2.soc.napier.ac.uk
</code></pre></div></div>

<p>This will log you into the head node HPC2.  This is the only node you should ever have to touch.  <em>Logging in is slow, and sometimes job starting is slow</em>.  This is because the University’s LDAP server has a lot of data and querying it takes a bit of time.  It has no effect on job performance though.</p>

<h2 id="hpc2-info">HPC2 Info</h2>

<p>There is a <a href="https://hpc2.soc.napier.ac.uk/">website</a> for showing the current state of HPC2.  This will be developed over time to allow users to see what the cluster is up to.  It pulls live data from the system so it is an accurate record of current node health, etc.</p>

<p>When logged into HPC2 you can get the cluster information by running <code class="highlighter-rouge">sinfo</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> sinfo
PARTITION  AVAIL  TIMELIMIT  NODES  STATE NODELIST
hpc2_main<span class="k">*</span>    up 1-02:00:00      3  down<span class="k">*</span> node[19-21]
hpc2_main<span class="k">*</span>    up 1-02:00:00     16  alloc node[1,3-8,10-18]
</code></pre></div></div>

<p>HPC2 has a basic setup.  All resources are grouped together so <code class="highlighter-rouge">sinfo</code> will only return nodes that are up, down, or allocated.</p>

<p>Finally you can see the current list of queued jobs using <code class="highlighter-rouge">squeue</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> squeue
            JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST<span class="o">(</span>REASON<span class="o">)</span>
               181 hpc2_main my.scrip kchalmer PD       0:00      4 <span class="o">(</span>Resources<span class="o">)</span>
               182 hpc2_main my.scrip kchalmer PD       0:00      4 <span class="o">(</span>Priority<span class="o">)</span>
               177 hpc2_main my.scrip kchalmer  R       2:54      4 node[10-13]
               178 hpc2_main my.scrip kchalmer  R       2:34      4 node[14-17]
               179 hpc2_main my.scrip kchalmer  R       2:27      4 node[1,7-8,18]
               180 hpc2_main my.scrip kchalmer  R       0:12      4 node[3-6]
</code></pre></div></div>

<p>This lists the Job ID, where the job is running, the name of the running job, the user, state, job time, and the nodes used.  Job ID is allocated on job creation.  Name is typically the script name executed.  Username allows us to see who is running a job.  Status should hopefully be either R (running) or PD (pending).  Time is useful for job management.  Finally the node list is the node names being used which is also useful for debugging.</p>

<h2 id="storage">Storage</h2>

<p>One of the big concerns raised about HPC1 was the lack of storage and the effect of the <strong>I</strong> drive on failing jobs.  We have overcome this, partially, using some Network File Storage local to HPC2.  This is located in <code class="highlighter-rouge">/share</code> on all nodes.  The head node hosts this location, but we do have a communication bottleneck due to the slow 1 Gbit/s connection in HPC2.</p>

<p>This means HPC2 has approximately 500GB of shared storage for all users.  For results data, store it in <code class="highlighter-rouge">/share</code>.  Good practice is to create a folder for yourself and particular result sets you want to retrieve.  For example:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/share/kchalmers/my.job
</code></pre></div></div>

<p>This will eliminate clashes with other users results.  Storage on individual nodes should be seen as scratch space.  <em>We will be using accounting mechanisms to delete old files so ensure you extract what you need when finished.</em></p>

<p>You can extract your files from HPC2 in a number of ways:</p>
<ul>
  <li><code class="highlighter-rouge">sftp</code> on the command line.  <code class="highlighter-rouge">sftp &lt;user&gt;@hpc2.soc.napier.ac.uk</code></li>
  <li><code class="highlighter-rouge">sftp</code> in your file manager (if it supports it).  <code class="highlighter-rouge">sftp://hpc2.soc.napier.ac.uk</code>.</li>
  <li><code class="highlighter-rouge">sshfs</code> to mount the drive.  See <a href="https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh">here</a> for instructions.</li>
</ul>

<p>In future we will look into high-performance file systems and off-loading results storage into an IS cloud area.  This should provide (near) infinite storage.</p>

<h2 id="running-jobs">Running Jobs</h2>

<p>This is a walkthrough tutorial on the different methods to run jobs via Slurm.  Google is your friend here, and we can kill problem jobs if needed so feel free to experiment.</p>

<h3 id="single-job-running">Single Job Running</h3>

<p>The simplest way to run a job is to use <code class="highlighter-rouge">srun</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> srun <span class="nt">-n</span> 10 <span class="nb">hostname
</span>node3
node3
node3
node3
node3
node3
node3
node3
node3
node3
</code></pre></div></div>

<p>This command ran <code class="highlighter-rouge">hostname</code> 10 times (<code class="highlighter-rouge">-n 10</code>).  Note that it did not use multiple nodes.  To do this, we also need the <code class="highlighter-rouge">-N</code> switch:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> srun <span class="nt">-n</span> 10 <span class="nt">-N</span> 10 <span class="nb">hostname
</span>node11
node18
node16
node14
node15
node1
node17
node13
node12
node10
</code></pre></div></div>

<p>Specifying a node count is good, but be cautious.  <em>If everyone tries to claim all the nodes then we will have a problem</em>.  Each node has 2 CPUs with 8 cores, so in theory 16 parallel tasks can be executed per node.  However, because of hyperthreading a node reports 32 tasks which it will try to execute but will only be slightly faster compard to 2*16 tasks.</p>

<p>Slurm will allocate more nodes to meet task demands.  For example running:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> srun <span class="nt">-n</span> 100 <span class="nb">hostname</span>
</code></pre></div></div>

<p>Will run across four nodes as 100 divided by 32 is 3.125 so is rounded up to 4.  <code class="highlighter-rouge">srun</code> is better abled to make this decision for you.  If you try and hard code incorrect configurations you will get an error:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> srun <span class="nt">-n</span> 100 <span class="nt">-N</span> 2 <span class="nb">hostname
</span>srun: error: Unable to allocate resources: Requested node configuration is not available
srun: Force Terminated job 193
</code></pre></div></div>

<p>This is because 100 tasks cannot be allocated across two nodes: 64 &lt; 100.</p>

<p>That is the basics of srun and you can find more by a simple Google search.  <code class="highlighter-rouge">srun</code> is a blocking command so you have to wait for it to finish.  Using it is simple for one-off tasks but this has limitations.  The workflow would be:</p>

<ol>
  <li>Create working folder on <code class="highlighter-rouge">/share</code>.</li>
  <li>Copy necessary data and code into <code class="highlighter-rouge">/share</code>.</li>
  <li>Call <code class="highlighter-rouge">srun</code> with necessary parameters and remember to store results in <code class="highlighter-rouge">/share</code>.</li>
  <li>Wait for job to complete.</li>
  <li>Copy results back from <code class="highlighter-rouge">/share</code> to local machine.</li>
  <li>Delete files from <code class="highlighter-rouge">/share</code>.</li>
</ol>

<p>The problem with this approach is the I/O hit from all nodes reading from <code class="highlighter-rouge">/share</code>.  It creates a bottleneck due to the 1 Gbit/s network which will mean you spend time reading and writing to a networked hard drive.  You can minimise this by:</p>

<ul>
  <li>On application launch copy the necessary files to a local node scratch space.</li>
  <li>Storing temporary results into a local scratch space.</li>
  <li>Only copying final results to <code class="highlighter-rouge">/share</code> at the end of your application.</li>
</ul>

<p>This is not ideal, but <code class="highlighter-rouge">srun</code> is the simplest method of just running a job and waiting for the result.  Better methods are interactive job running, and preferably batch job running.</p>

<h3 id="interactive-job-running">Interactive Job Running</h3>

<p>Interactive jobs are ones where you get a job ID and can send Slurm commands as part of a single job.  To initiate interactive mode use <code class="highlighter-rouge">salloc</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> salloc
salloc: Granted job allocation 196
</code></pre></div></div>

<p>You can now run commands as before:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> srun <span class="nt">-n</span> 10 <span class="nb">hostname
</span>node1
node1
node1
node1
node1
node1
node1
node1
node1
node1
</code></pre></div></div>

<p>To exit the interactive mode type exit:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> <span class="nb">exit
exit
</span>salloc: Relinquishing job allocation 196
</code></pre></div></div>

<p><code class="highlighter-rouge">salloc</code> will only allocate you one node by default.  You can select multiple nodes by using the <code class="highlighter-rouge">-N</code> flag when calling <code class="highlighter-rouge">salloc</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> salloc <span class="nt">-N</span> 10
salloc: Granted job allocation 197
<span class="nv">$&gt;</span> srun <span class="nt">-n</span> 10 <span class="nb">hostname
</span>node11
node16
node1
node14
node13
node12
node17
node18
node10
node15
</code></pre></div></div>

<p>When you call <code class="highlighter-rouge">salloc</code> you claim the resources.  It can be useful if you know noone is using HPC2 or you only want to claim a single node.  Remember a single node has 16 cores so it is still a sizable chunk of processing power.  The advantage of interactive mode is that you can use the <code class="highlighter-rouge">sbcast</code> command to copy files:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> sbcast my.file &lt;path&gt;
</code></pre></div></div>

<p>Path must exist on the nodes you are copying to.  Nodes in HPC2 do not contain user home folders but a <code class="highlighter-rouge">/tmp</code> folder has been setup instead.  Again, do good practice to avoid conflicts between users:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> srun <span class="nb">mkdir</span> /tmp/kchalmers
<span class="nv">$&gt;</span> srun <span class="nb">mkdir</span> /tmp/kchalmers/my.work
<span class="nv">$&gt;</span> sbcast my.file /tmp/kchalmers/my.work/my.file
</code></pre></div></div>

<p>You can now run from the local <code class="highlighter-rouge">/tmp</code> folder.  Using <code class="highlighter-rouge">sbcast</code> means you can avoid doing the work in your own applications.  <code class="highlighter-rouge">sbcast</code> only works within a job so you must be in interactive mode or submit a batch job.</p>

<p>With interactive mode use the following workflow:</p>

<ol>
  <li>Call <code class="highlighter-rouge">salloc</code> (with optional nodes).</li>
  <li>Use <code class="highlighter-rouge">srun</code> to create working folders on each node.</li>
  <li>Use <code class="highlighter-rouge">sbcast</code> to copy the necessary data and executables to each node.</li>
  <li>Call <code class="highlighter-rouge">srun</code> (perhaps multiple times).</li>
  <li>Exit <code class="highlighter-rouge">salloc</code></li>
  <li>Copy results back.</li>
</ol>

<p>The same best practices should be undertaken in interactive mode as in single run mode.  Again, this is to ensure no conflicts.</p>

<p><em>Avoid using interactive mode if you can.</em>  It can be useful to test your runs but you are effectively claiming resources and locking them down even if you are not doing any work.  This can impact other HPC2 users.  The recommended mechanism is to use batch jobs or job arrays.</p>

<h3 id="batch-job-running">Batch Job Running</h3>

<p>Batch jobs allow you to queue up work and leave HPC2 unattended.  They follow much of the ideas from interactive jobs but you now provide a script to run.  This is similar to running a shell script.  Indeed, a batch script is a shell script to all intents and purposes.</p>

<p>First you will need to create a script (say called <code class="highlighter-rouge">my.job</code>):</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#!/bin/sh</span>
<span class="c">#SBATCH --output=/share/kchalmers/my.job/output.txt</span>
srun <span class="nb">rm</span> <span class="nt">-rf</span> /tmp/kchalmers
srun <span class="nb">mkdir</span> /tmp/kchalmers
srun <span class="nb">mkdir</span> /tmp/kchalmers/my.job
sbcast /share/my.data /tmp/kchalmers/my.job/my.job
srun <span class="nb">hostname
</span>srun <span class="nb">sleep </span>60
</code></pre></div></div>

<p>Line 2 is an output redirection.  This means any console output from your application will be sent to this file.  The directory must exist or the job will fail.</p>

<p>Line 3 cleans the previous working directory.  This is just to avoid conflicts.  Lines 4 and 5 creates my working directory.</p>

<p>Line 6 performs the broadcast.  Note that the source location is in share.  This is required as a batch job does not run within the head node.  This means you have to copy from a known location across HPC2.</p>

<p>Lines 7 and 8 are our actual work.  At the end we sleep for 60 seconds just to simulate the job doing some work.</p>

<p>To run a batch job we use <code class="highlighter-rouge">sbatch</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> sbatch my.job
Submitted batch job 204
</code></pre></div></div>

<p>You can now check the job status with <code class="highlighter-rouge">squeue</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> squeue
JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST<span class="o">(</span>REASON<span class="o">)</span>
               204 hpc2_main   my.job kchalmer  R       0:34      1 node1
</code></pre></div></div>

<p>You can then check the output from the file:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> <span class="nb">cat</span> /share/kchalmers/my.job/output.txt 
node1
</code></pre></div></div>

<p>This is the simplest form of batch job running and it only has one task on one node.  We can set the number of tasks and nodes in two ways.  First by flags to sbatch:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> sbatch <span class="nt">-n</span> 10 <span class="nt">-N</span> 10 my.job
Submitted batch job 205
</code></pre></div></div>

<p>Or, preferably, you can set these parameters in the job script:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#!/bin/sh</span>
<span class="c">#SBATCH --output=/share/kchalmers/my.job/output.txt</span>
<span class="c">#SBATCH -n 10</span>
<span class="c">#SBATCH -N 10</span>
srun <span class="nb">rm</span> <span class="nt">-rf</span> /tmp/kchalmers
srun <span class="nb">mkdir</span> /tmp/kchalmers
srun <span class="nb">mkdir</span> /tmp/kchalmers/my.job
sbcast /share/my.data /tmp/kchalmers/my.job/my.job
srun <span class="nb">hostname
</span>srun <span class="nb">sleep </span>60
</code></pre></div></div>

<p>Batching also provides some useful placeholders and other parameters.  For example, you can set your file name based on your job:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#SBATCH --output=/share/kchalmers/my.job/output_%j.txt</span>
</code></pre></div></div>

<p>Other placeholders include:</p>
<ul>
  <li><code class="highlighter-rouge">%t</code> task ID.</li>
  <li><code class="highlighter-rouge">%N</code> node name.</li>
</ul>

<p>You can effectively get any information you want about the job and use it.</p>

<h3 id="job-arrays">Job Arrays</h3>

<p>Job Arrays extend the batch job idea by creating a job with a number of indexed tasks.  The simplest way to understand is an example batch script:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#!/bin/bash</span>
<span class="c">#SBATCH --output=/share/40001067/my.job.%a</span>
<span class="c">#SBATCH --array=0-15</span>
<span class="c">#SBATCH -n 1</span>

<span class="nb">hostname 
echo</span> <span class="nv">$SLURM_ARRAY_TASK_ID</span>
<span class="nb">sleep </span>60
</code></pre></div></div>

<p>Calling <code class="highlighter-rouge">sbatch</code> on this job will you a list of jobs with underscores:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST<span class="o">(</span>REASON<span class="o">)</span>
             472_0 hpc2_main my.array 40001067  R       0:02      1 node1
             472_1 hpc2_main my.array 40001067  R       0:02      1 node3
             472_2 hpc2_main my.array 40001067  R       0:02      1 node4
             472_3 hpc2_main my.array 40001067  R       0:02      1 node5
             472_4 hpc2_main my.array 40001067  R       0:02      1 node6
             472_5 hpc2_main my.array 40001067  R       0:02      1 node7
             472_6 hpc2_main my.array 40001067  R       0:02      1 node8
             472_7 hpc2_main my.array 40001067  R       0:02      1 node10
             472_8 hpc2_main my.array 40001067  R       0:02      1 node11
             472_9 hpc2_main my.array 40001067  R       0:02      1 node12
            472_10 hpc2_main my.array 40001067  R       0:02      1 node13
            472_11 hpc2_main my.array 40001067  R       0:02      1 node14
            472_12 hpc2_main my.array 40001067  R       0:02      1 node15
            472_13 hpc2_main my.array 40001067  R       0:02      1 node16
            472_14 hpc2_main my.array 40001067  R       0:02      1 node17
            472_15 hpc2_main my.array 40001067  R       0:02      1 node18
</code></pre></div></div>

<p>The scheduler will use as many nodes as it can get and are needed.  Note, however, that a node is not a single core - it is 2 processors with 8 cores each.  We can have a better job script that uses the 16 cores on a node by using <code class="highlighter-rouge">srun</code>:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#!/bin/bash</span>
<span class="c">#SBATCH --output=/share/40001067/my.job.%a</span>
<span class="c">#SBATCH --array=0-15</span>
<span class="c">#SBATCH -n 1</span>

srun <span class="nt">-n</span> 16 <span class="nb">hostname 
</span>srun <span class="nt">-n</span> 16 <span class="nb">echo</span> <span class="nv">$SLURM_ARRAY_TASK_ID</span>
<span class="nb">sleep </span>60
</code></pre></div></div>

<h2 id="other-useful-commands">Other Useful Commands</h2>

<h3 id="getting-more-data-on-a-job">Getting More Data on a Job</h3>

<p>The <code class="highlighter-rouge">sstat</code> command provides more information on a job (<code class="highlighter-rouge">-j 206</code> refers to job 206):</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> sstat <span class="nt">-j</span> 206
JobID  MaxVMSize  MaxVMSizeNode  MaxVMSizeTask  AveVMSize     MaxRSS MaxRSSNode MaxRSSTask     AveRSS MaxPages MaxPagesNode   MaxPagesTask   AvePages     MinCPU MinCPUNode MinCPUTask     AveCPU   NTasks AveCPUFreq ReqCPUFreqMin ReqCPUFreqMax ReqCPUFreqGov ConsumedEnergy  MaxDiskRead MaxDiskReadNode MaxDiskReadTask  AveDiskRead MaxDiskWrite MaxDiskWriteNode MaxDiskWriteTask AveDiskWrite 
<span class="nt">------------</span> <span class="nt">----------</span> <span class="nt">--------------</span> <span class="nt">--------------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">--------</span> <span class="nt">------------</span> <span class="nt">--------------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">----------</span> <span class="nt">--------</span> <span class="nt">----------</span> <span class="nt">-------------</span> <span class="nt">-------------</span> <span class="nt">-------------</span> <span class="nt">--------------</span> <span class="nt">------------</span> <span class="nt">---------------</span> <span class="nt">---------------</span> <span class="nt">------------</span> <span class="nt">------------</span> <span class="nt">----------------</span> <span class="nt">----------------</span> <span class="nt">------------</span> 
206.4           265748K          node1              0      4532K       880K     node10          1    775.60K        0        node1              0          0  00:00.000      node1          0  00:00.000       10      1.20M       Unknown       Unknown       Unknown              0            0           node1               0            0            0            node1                0            0
</code></pre></div></div>

<p>You can select the columns to view to make it easier to see:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> sstat <span class="nt">--format</span><span class="o">=</span>JobID,AveCPU <span class="nt">-j</span> 209
       JobID     AveCPU 
<span class="nt">------------</span> <span class="nt">----------</span> 
209.4         00:00.000
</code></pre></div></div>

<p>209.4 refers to the job ID (209) and the zero-indexed step ID.  In <code class="highlighter-rouge">my.job</code> that is the final <code class="highlighter-rouge">srun</code> command.  This allows some information on where a job is in its execution.</p>

<h3 id="cancelling-a-job">Cancelling a Job</h3>

<p>It may be a case that you want to cancel a job that you have submitted or are running.  This can be done with the <code class="highlighter-rouge">scancel</code> command:</p>

<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nv">$&gt;</span> scancel 210
</code></pre></div></div>

<p>This will cancel job 210.  It is that simple.</p>

</div>

    </main>

    <!-- Optional footer content -->

  

</body></html>`;

const App = () => (
  <div dangerouslySetInnerHTML={{__html: htmlFromCMS}}>
  </div>
);


export default function Tutorial(){
    return(
         <App/>
    )
}