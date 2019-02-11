import pyslurm
import json
import sys
import logging
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.DEBUG)
from flask import render_template


@app.route("/jobs.json")
def index():
    return json.dumps(pyslurm.job().get())


@app.route("/sam2.json")
def hello():
    json_string = pyslurm.job().get()
    data = {}
    data = {"user": "tse"}

    #json_string.update(data)
    data.update(json_string)

    return json.dumps(data)


@app.route("/run", methods=["GET", "POST"])
def form():
   
    language = request.args.get('language')
    return '''<h1>The language value is: {}</h1>'''.format(language)


  


    

