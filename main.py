from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/css/<path:filename>')
def css_static(filename):
    return send_from_directory('css', filename)


@app.route('/js/<path:filename>')
def js_static(filename):
    return send_from_directory('js', filename)


@app.route('/assets/<path:filename>')
def assets_static(filename):
    return send_from_directory('assets', filename)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
