import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: green;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-width: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal !!!!! Free shipping on Orders over 500 $...
    </Container>
  );
};

export default Announcement;
