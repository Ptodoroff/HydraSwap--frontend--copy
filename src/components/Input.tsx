import styled from "styled-components";
import Image from "./Image";

interface DarkProps {
  darkMode: boolean;
  dark?: any;
}

const SelectedTokenInfo = styled.button<DarkProps>`
  height: 32px;
  width: 145px;
  border-radius: 12px;
  border: none;
  margin-bottom: 0px;
  font-size: 20px;
  display: flex;
  background-color: ${(props) => (props.darkMode ? "#212429" : "white")};
  color: ${(props) => (props.darkMode ? "white" : "black")};

  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    width: 22vw;
    height: 5vh;
    font-size: 12px;
  }
`;

const Max = styled.button<DarkProps>`
  width: 40px;
  height: 28px;
  background-color: ${(props) => (props.darkMode ? "#1d2e48" : "#e1f2ff")};
  border-radius: 8px;
  border: ${(props) => (props.darkMode ? `0.5px solid #026fc2` : `none`)};
  color: #026fc2;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  &:hover {
    border: 1px solid #026fc2;
    cursor: pointer;
    border-radius: 12px;
  }

  @media (max-width: 1000px) {
    width: 10vw;
    height: 3vh;
    font-size: 12px;
  }
`;

const TokenInput = styled.input<DarkProps>`
  display: flex;
  border: #212429;
  background-color: ${(props) => (props.darkMode ? "#212429" : "white")};
  width: 314px;
  height: 29px;
  outline: none;
  font-size: 25px;
  @media (max-width: 1000px) {
    width: 18vw;
    height: 4vh;
  }
`;

const InputCluster = styled.div<DarkProps>`
  width: 480px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 5px;
  @media (max-width: 1000px) {
    width: 10vw;
    height: 8vh;
  }
`;

export const ApproveandStake = styled.button<DarkProps>`
  width: 250px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57px;
  padding: 3px;
  background-color: ${(props) => (props.darkMode ? "#1d2e48" : "#e1f2ff")};
  border-radius: 20px;
  border: none  ;
  color: #026fc2;
  font-weight: 500;
  &:hover
    background-color: #d7edfe;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    width: 30vw;
    height: 5vh;
    border-radius:12px;
    font-size: 15px;
  }
`;
export const ButtonCluster = styled.div`
  width: 519px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  @media (max-width: 1000px) {
    width: 60vw;
    height: 5vh;
    justify-content: space-around;
    font-size: 12px;
  }
`;

const InfoPanel = styled.div<DarkProps>`
  width: 490px;
  padding: 15px;
  padding-bottom: 2px;
  padding-top: 5px;
  height: 80px;
  display: flex;
  margin-bottom: 5px;
  border: ${(props) =>
    props.darkMode ? `0.5px solid grey` : `1px solid #efefef`};
  border-radius: 25px;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  color: ${(props) => (props.darkMode ? "white" : "black")};

  @media (max-width: 1000px) {
    width: 50vw;
    height: 9vh;
    border-radius: 15px;
  }
`;

export default function Input({ dark, darkMode }: DarkProps) {
  return (
    <>
      <InfoPanel darkMode={darkMode}>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            fontWeight: 550,
            color: darkMode ? "white" : "black",
          }}
        >
          <div>Amount</div>
          <div>-</div>
        </span>
        <InputCluster darkMode={darkMode}>
          <TokenInput darkMode={darkMode}></TokenInput>
          <Max darkMode={darkMode}>
            <span>MAX</span>
          </Max>
          <SelectedTokenInfo darkMode={darkMode}>
            <Image
              className="coinLogo"
              darkMode={darkMode}
              src="./changex-logo-round.png"
              style={{ boxShadow: darkMode ? "none" : "3px 3px 5px #ccc" }}
            />
            CHANGE
          </SelectedTokenInfo>
        </InputCluster>
      </InfoPanel>
    </>
  );
}