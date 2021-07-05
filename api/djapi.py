import time
from flask import Flask
app = Flask(__name__)

#basic starter page for testing react connection
@app.route("/time")
def get_current_time():
    return {'time': time.time()}