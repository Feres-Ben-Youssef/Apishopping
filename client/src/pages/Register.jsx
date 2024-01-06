import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
`;

const RadioLabel = styled.label`
  margin-right: 20px;
`;

const Register = () => {
  // Generate arrays for years, months, and days
  const years = Array.from({ length: 100 }, (_, index) => `${new Date().getFullYear() - index}`);
  const months = Array.from({ length: 12 }, (_, index) => `${index + 1}`);
  const days = Array.from({ length: 31 }, (_, index) => `${index + 1}`);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />

          {/* Date of Birth */}
          <div>
            <label>Date of Birth:</label>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <Select name="year">
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
              <Select name="month">
                <option value="">Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {new Date(2000, parseInt(month, 10) - 1, 1).toLocaleString('en-US', { month: 'long' })}
                  </option>
                ))}
              </Select>
              <Select name="day">
                <option value="">Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {/* Gender Selection */}
          <RadioWrapper>
            <RadioLabel>
              <input type="radio" name="sex" value="male" />
              Male
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="sex" value="female" />
              Female
            </RadioLabel>
          </RadioWrapper>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Select = styled.select`
  flex: 1;
  min-width: 30%;
  margin-right: 10px;
  padding: 10px;
`;

export default Register;
