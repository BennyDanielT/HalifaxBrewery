from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Benny Daniel",
        "about" :"Hello! I'm a Software Developer who wants to work for Google."
    }

    return response_body