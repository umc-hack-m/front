import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Categories from "../../components/layouts/Button";
import FooterLaw from "../../components/layouts/Footer";

const MainContainer = styled.div`
  display: flex;
  margin-bottom: 10%;
`;

const TextContainer = styled.div`
  width: 55%;
  position: relative;
  left: 10%;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  color: white;
  background-color: #ff60d2;
  border: none;
  width: 45%;
  height: 50px;
  font-size: 1.2rem;
`;

const Laweasy = styled.div`
  background-color: #d8d8d8;
  display: flex;
  justify-content: center; /* Center align the content horizontally */
  align-items: center; /* Center align the content vertically */
  margin-top: 5%;
  height: 200px;
`;

const MainPage = () => {
  return (
    <div>
      <MainContainer>
        <TextContainer>
          <h1>Introducing LAWEASY</h1>
          <p>
            가장 가까운 전문가부터, 사건 분야별 전문가까지 LAWEASY와 함께 어려운
            법률분쟁도 쉽게 해결해보세요 간편한 상담, 명쾌한 해결 법률분쟁의 첫
            단추 LAWEASY와 함께해요 어려운 법률분쟁도 쉽게 상담 받고, 나와
            비슷한 문제에 대한 답변도 얻고, 검증된 전문가와 함께하는 LAWEASY
            지금 바로 시작해보세요
          </p>
          <Link to="/listWrite">
            <Button>Try Laweasy</Button>
          </Link>
        </TextContainer>
        <Categories></Categories>
      </MainContainer>
      {/*     
    <FooterLaw></FooterLaw> */}

      {/* try 버튼  */}
      {/* 카테고리 */}
    </div>
  );
};

export default MainPage;
