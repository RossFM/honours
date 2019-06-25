import React from 'react';
import { render } from 'react-dom';

const SpecialButton = ({ children, color }) => (
  <button style={{color}}>{children}</button>
);

const htmlFromCMS = `
<!DOCTYPE html>
<!-- saved from url=(0040)https://hpc2.soc.napier.ac.uk/keras.html -->
<html lang="en-us"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="http://gmpg.org/xfn/11" rel="profile">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  

  <!-- Enable responsiveness on mobile devices-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
  

    <main class="container">
      <header>
  <h1 class="page-title">TensorFlow/Keras</h1>
</header>
<div class="content">
  <h1 id="using-tensorflow-with-python-using-keras">Using Tensorflow With Python using Keras.</h1>

<h2 id="standard-setup">Standard Setup</h2>
<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#install virtualenv if not already done so</span>
python3 <span class="nt">-m</span> pip <span class="nb">install</span> <span class="nt">--user</span> virtualenv
<span class="c">#Create a virtual Environment to keep things isolated</span>
python3 <span class="nt">-m</span> virtualenv tensorEnv
<span class="c">#get into the Venv</span>
<span class="nb">source </span>tensorEnv/bin/activate
<span class="c">#Install things</span>
pip3 <span class="nb">install </span>setuptools tensorflow
<span class="c">#Verify TF works, ignore CPU instructions warning. you should see something like: tf.Tensor(100.1, shape=(), dtype=float32)</span>
python3 <span class="nt">-c</span> <span class="s2">"import tensorflow as tf; tf.enable_eager_execution(); print(tf.reduce_sum(tf.random_normal([1000, 1000])))"</span>
<span class="c">#Get keras</span>
pip3 <span class="nb">install </span>keras
<span class="c">#Run a keras benchmark if you want:</span>
/share/kerasBenchmark/run.sh
<span class="c">#Mean Time per update: should be around: 1967.578 ms.</span>
<span class="c">#Get out of VeEnv</span>
deactivate
</code></pre></div></div>

<h2 id="i-need-a-specific-python-version">I need a specific python version</h2>
<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nb">mkdir </span>altpython <span class="o">&amp;&amp;</span> <span class="nb">cd </span>altpython
<span class="c"># download specific python version from python.org/downloads/</span>
wget https://www.python.org/ftp/python/3.5.5/Python-3.5.5.tgz
<span class="nb">tar</span> <span class="nt">-xvzf</span> Python<span class="k">*</span><span class="nt">-3</span>.5.5<span class="k">*</span>.tgz
<span class="nb">cd </span>Python<span class="k">*</span>
<span class="c"># Configure and build</span>
./configure <span class="nt">--with-zlib</span> <span class="nt">--prefix</span><span class="o">=</span><span class="nv">$PWD</span>
make <span class="nt">-j</span> 32
<span class="c"># test</span>
./python <span class="nt">--version</span>
<span class="c"># you can use the full path to run this version of python from any directory</span>
<span class="nb">cd</span> ~
~/altpython/Python-3.5.5/python <span class="nt">--version</span>
<span class="c"># Or you can change your envars sif you know how</span>
<span class="nb">export </span><span class="nv">PATH</span><span class="o">=</span>~/altpython/Python-3.5.5/:<span class="nv">$PATH</span>
<span class="c">#Pip exists here: Same goes above with envars.</span>
Python-3.5.5/bin/pip3
</code></pre></div></div>

<h2 id="tips">Tips</h2>
<p>If you have changed EnVars, or are not sure which python you are using, <code class="highlighter-rouge">which</code> command is helpful.</p>
<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>which python
which python3
which pip3
</code></pre></div></div>
<p>Need to know where pip put a package?</p>
<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pip3 show tensorflow
</code></pre></div></div>
<p>Or what’s installed generally?</p>
<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pip3 list
</code></pre></div></div>


</div>

    </main>

    <!-- Optional footer content -->

  

</body></html>
`;

const App = () => (
  <div dangerouslySetInnerHTML={{__html: htmlFromCMS}}>
  </div>
);


export default function O_Tensor(){
    return(
         <App/>
    )
}