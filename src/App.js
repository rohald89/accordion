import styled from 'styled-components';
import {faq} from './data';


const Container = styled.div`
  display: flex;
  align-items: center;
  width: 920px;
  height: 509px;
  border-radius: 23px;
  overflow: hidden;
  background: url('../images/bg-pattern-desktop.svg'), #f2f2f2;
  background-position: -574px 67%;
  /* background-size: 964px 944px; */
  background-repeat: no-repeat;

  img {
    width: 472px;
    height: 359px;
    transform: translateX(-83px);
  }
`;

function App() {
  console.log(faq);
  return (
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
  );
}

export default App;
