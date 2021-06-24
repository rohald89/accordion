import styled from 'styled-components';
import {faq} from './data';

const Container = styled.div`
  display: flex;
`;

function App() {
  console.log(faq);
  return (
    <div className="App">
      <Container>
          <img src="./images/illustration-woman-online-desktop.svg" alt="" />
          <div className="faq-wrapper">
            <h1>FAQ</h1>
            <section className="questions">
              {faq.map( (q, i) => {
                return (<details className="faq" key={i}>
                  <summary className="question">{q.question}</summary>
                  <p>{q.answer}</p>
                </details>)
              })}
              
            </section>
          </div>
      </Container>
    
    </div>
  );
}

export default App;
