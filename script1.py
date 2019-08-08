from flask import Flask, render_template

app=Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about/')
def about():
    return render_template("about.html")

@app.route('/snake/')
def snake():
    return render_template("snake.html")

@app.route('/dipole/')
def dipole():
    return render_template("dipole.html")

@app.route('/fieldsimulation/')
def fieldsimulation():
    return render_template("fieldsimulation.html")

if __name__=="__main__":
    app.run(debug=True)
