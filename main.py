from flask import Flask, render_template, Blueprint
from . import db
from flask_login import login_required, current_user
main = Blueprint('main', __name__)


@main.route("/")
def index():
    return render_template("index.html")


@main.route("/profile")
@login_required
def profile():
    return render_template("profile.html", name=current_user.name)


@main.route("/next")
def next():
    return render_template("next.html")

# if __name__ == "__main__":
#     main.run(debug=True)
