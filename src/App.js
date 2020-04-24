import React from 'react';
import Question from './components/Question';

function App() {
  return (
    <Question
      question='What letter starts the alphabet?' 
      answer='a'
      false1='b'
      false2='c'
      false3='d'
    />
  );
}

export default App;
