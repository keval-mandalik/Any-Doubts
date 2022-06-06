import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  padding: 20px;
  color: grey;
  label{
      font-weight:700;
      color:grey;
  }
  input {
    font-size:large;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
    outline-style:none;
    background:#1C1D1F;
    color:#7589C0;
  }
  .error {
    color: red;
    margin-top:15px;
  }
`;