import pyslurm
import json
import sys
import logging
from flask import Flask, request
app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)
from flask import render_template

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/sam")
def hello():
    return json.dumps(pyslurm.job().get())

@app.route("/run", methods=["GET", "POST"])
def form():

   
    language = request.args.get('language')
    return '''<h1>The language value is: {}</h1>'''.format(language)


  


    

