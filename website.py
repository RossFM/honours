import pyslurm
import json
import sys
import logging
import requests
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.DEBUG)
from flask import render_template


@app.route("/jobs.json")
def index():
    return json.dumps(pyslurm.job().get())


@app.route("/sam.json")
def hello():
    r = requests.get('https://api.octopus.energy/v1/electricity-meter-points/1800022637626/meters/19P5002854/consumption/')
    return json.dumps(r)


@app.route("/run", methods=["GET", "POST"])
def form():
   
    language = request.args.get('language')
    return '''<h1>The language value is: {}</h1>'''.format(language)


  


    

