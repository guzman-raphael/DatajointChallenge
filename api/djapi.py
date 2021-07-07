import json
import time
from flask import Flask, jsonify, request
import datajoint as dj
import math
import numpy as np
import datetime

app = Flask(__name__)


#for some reason the flask server restarts itself as part of its startup
#this leads to you having to enter your database password twice
#after research this is due to running the app in debug mode

#Config for db connection, default to the tutorial db
dj.config['database.host'] = 'tutorial-db.datajoint.io'

schema = dj.Schema('jverswijver_Software_Challenge')

#mouse def datajoint modified from the tutorials on the playground
@schema
class Mouse(dj.Manual):
    definition = """
    # Experimental animals
    mouse_name : varchar(50)                  # Unique animal name
    ---
    dob=null             : date                         # date of birth
    sex="unknown"        : enum('M','F','unknown')      # sex
    """

#mouse session def for datajoint from the tutorials on the playground
@schema
class Session(dj.Manual):
    definition = """
    # Experiment session
    -> Mouse
    session_date               : date                         # date
    ---
    experiment_setup           : int                          # experiment setup ID
    """

#use in case you need to reload a table definition in the database
#deletes all the data and the table definition
#-----------------------------------------------------------------
#Mouse().drop()
#Session().drop()
#-----------------------------------------------------------------

#import the json provided into the tutorial db
#will always run at start of flask server
#should not add duplicates to the tutorial db

with open('data.json') as db_json:
    #data will have a list of dictionarys that is the contents of the json
    data = json.load(db_json)
    for dict in data:
        #split the dictionary into two parts, one for the session and one for the mouse
        mouse_data = {'mouse_name' : dict['subject_name'],'dob': dict['subject_dob'],'sex' : dict['subject_sex']}
        session_data = {'mouse_name' : dict['subject_name'], 'session_date' : dict['session_date'], 'experiment_setup' : dict['experiment_setup']}

        #note that insert1 is for single row while insert does multiple
        #insert the mouse data into the db while skipping any duplicates
        Mouse.insert1(mouse_data, skip_duplicates= True)
        #insert the session data into the db while skipping any duplicates
        Session.insert1(session_data, skip_duplicates= True)

#print both DBs to see if we imported them properly
print(Mouse())
print(Session())

#basic starter page for testing react connection
#returns the time on the api system
@app.route("/time")
def get_current_time():
    return {'time': time.time()}

#should return the entire mouse table as json
@app.route("/getmouse")
def get_mouse():
    return jsonify(Mouse.fetch(as_dict = True))

#should return the session table as json
@app.route("/getsessions")
def get_sessions():
    return jsonify(Session.fetch(as_dict = True))

#
@app.route("/setmouse", methods = ['POST'])
def set_mouse():
    data = json.load(request.get_json())
    print(data)
if __name__ =='__main__':  
    app.run(debug = False)  