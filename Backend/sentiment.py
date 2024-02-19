
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import joblib

myModel = joblib.load('sentiment_analysis.joblib')


def preprocess(text):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(text)
    filtered_words = [word.lower() for word in words if word.isalpha() and word.lower() not in stop_words]
    return ' '.join(filtered_words)


def sentiment_func(text):
    new_text = text
    preprocessed_text = preprocess(new_text)
    prediction = myModel.predict([preprocessed_text])[0]

    emotions = {0: 'sad', 1: 'happy', 2: 'confused'}
    predicted_emotion = emotions[prediction]
    return predicted_emotion
    # print(f"Predicted Emotion: {predicted_emotion}")