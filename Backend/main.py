from flask import Flask, jsonify, request
from qa import qa_func
from sentiment import sentiment_func
from generateQuestion import genQueFunc
from summary import summary_func

app = Flask(__name__)

@app.route('/qna', methods=['POST'])
def qa_handle():
    data = request.get_json()
    res = qa_func(data['question'],data['context'])
    return jsonify(res)

@app.route('/sentiment', methods=['POST'])
def sentiment_handle():
    data = request.get_json()
    res = sentiment_func(data['text'])
    return jsonify(res)

@app.route('/generatequestion', methods=['POST'])
def genque_handle():
    data = request.get_json()
    res = genQueFunc(data['sentence'])
    return jsonify(res)

@app.route('/summary', methods=['POST'])
def summary_handle():
    data = request.get_json()
    res = summary_func(data['document'])
    return jsonify(res)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
