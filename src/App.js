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
  background-repeat: no-repeat;

  img {
    width: 472px;
    height: 359px;
    transform: translateX(-83px);
  }
`;

const Detail = styled.details`
  margin: 16px 0;

  

  & summary {
    position: relative;
    margin-bottom: 1.5rem;
    padding-right: 4rem;
    outline: none;
    list-style: none;
    color: var(--color-very-dark-greyish-blue);
    font-size: 1.625rem;
    cursor: pointer;

    &:after {
    content: url(./images/icon-arrow-down.svg);
    position: absolute;
    right: 0;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
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
                return (<Detail className="faq" key={i}>
                  <summary className="question">{q.question}</summary>
                  <p>{q.answer}</p>
                </Detail>)
              })}
              
            </section>
          </div>
      </Container>
  );
}

export default App;
