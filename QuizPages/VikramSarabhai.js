import React, { useState } from 'react';
import questions2 from '../Questions/questions2';
import { View, Text, TouchableOpacity } from 'react-native';

function VikramSarabhai({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionChange = (option) => {
    if (selectedOption !== 0) {
      // An option has already been selected
      return;
    }
    setSelectedOption(option);
    const correctAnswerIndex = questions2[currentQuestion].answer;
    const selectedOptionIndex = questions2[currentQuestion].options.indexOf(option);
    if (selectedOptionIndex !== -1 && selectedOptionIndex === correctAnswerIndex) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(0);
    setIsCorrect(false);
    if (currentQuestion < questions2.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(0);
    setShowAnswer(false);
    setIsCorrect(false);
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {showScore ? (
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Score</Text>
          <Text style={{ fontSize: 20 }}>
            You scored {score} out of {questions2.length}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#3498db',
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
            }}
            onPress={handleRestart}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#3498db',
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
            }}
            onPress={handleHome}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              Question {currentQuestion + 1}
            </Text>
            <Text style={{ fontSize: 20, marginVertical: 10, textAlign: 'justify', marginHorizontal: 10 }}>
              {questions2[currentQuestion].question}
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            {questions2[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: selectedOption === option ? '#3498db' : '#fff',
                  padding: 10,
                  borderRadius: 5,
                  marginVertical: 10,
                  borderWidth: 2,
                  borderColor:'transparent',
                  // Set border color based on selected option
                  border: selectedOption === option ? '2px solid #3498db' : '2px solid #000',
                  marginHorizontal: 10
                }}
                onPress={() => handleOptionChange(option)}
              >
                <Text
                  style={{
                    color: selectedOption === option ? '#fff' : '#000',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {showAnswer && (
            <View style={{ alignItems: 'center' }}>
              {isCorrect ? (
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 18 }}>Correct!</Text>
              ) : (
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>Incorrect!</Text>
              )}
              <Text style={{ fontSize: 16 }}>The correct answer is: {questions2[currentQuestion].options[questions2[currentQuestion].answer]}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#3498db',
                  padding: 10,
                  borderRadius: 5,
                  marginVertical: 10,
                }}
                onPress={handleNextQuestion}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Next Question</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );}    

  export default VikramSarabhai;