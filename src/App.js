import styled from 'styled-components';
import {faq} from './data';

const Wrapper = styled.div`
  position: relative;
  width: 92.0rem;
  height: 50.9rem;
  .box {
    position:absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%,-30%);
    height: auto;
    width: auto;
    z-index: 10;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  border-radius: 2.3rem;
  background: url('../images/bg-pattern-desktop.svg'), #ffffff;
  background-position: -57.4rem 67%;
  background-repeat: no-repeat;
  overflow:hidden;

  .illustration-desktop {
    width: 47.2rem;
    height: 35.9rem;
    transform: translateX(-8.3rem);
  }
`;

const FaqWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8rem 12rem 10rem 0;

    & h1 {
      font-weight: bold;
      font-size: 3.2rem;
      line-height: 3.2rem;
      margin: 0 0 4.3rem;

      color: #1E1F36;
    }
`;

const Detail = styled.details`
  margin: 1.6rem 0;
  border-bottom: 1px solid #E8E8EA;
  
  &[open]{
    font-weight: bold;
    & summary:after {
      transform: rotate(180deg);
    }
    & p {
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-bottom: 1.6rem;
    }
  }
  
  

  & summary {
    position: relative;
    margin-bottom: 1.5rem;
    outline: none;
    list-style: none;
    color: var(--color-very-dark-greyish-blue);
    font-size: 1.4rem;
    cursor: pointer;

    &:after {
    content: url(./images/icon-arrow-down.svg);
    position: absolute;
    right: 1rem;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
}
`;

function App() {
  return (
    <Wrapper>
      <img className="box" src="./images/illustration-box-desktop.svg" alt="" />
      <Container>
          <img className="illustration-desktop" src="./images/illustration-woman-online-desktop.svg" alt="" />
          
          <FaqWrapper className="faq-wrapper">
            <h1>FAQ</h1>
            <section className="questions">
              {faq.map( (q, i) => {
                return (
                  <Detail className="faq" key={i}>
                    <summary className="question">{q.question}</summary>
                    <p>{q.answer}</p>
                  </Detail>
                )
              })}
              
            </section>
          </FaqWrapper>
      </Container>
    </Wrapper>
  );
}

export default App;
