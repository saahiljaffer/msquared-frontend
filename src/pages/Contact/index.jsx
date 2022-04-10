import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { S1, S2 } from "../../components/Fonts";
import Button from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import useStore from "../../store";
import { useGetPotentialParties } from "../../api";
import NavBar from "../../components/NavBar";
import LoadingIndicator from "../../components/LoadingIndicator";
import Alert from "../../components/Alert";

const Title = styled(S1)`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: fill-available;
  height: 2rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.foreground.tertiary};
  font-size: ${(props) => props.theme.fonts.s2.size};
  color: ${(props) => props.theme.colors.foreground.default};
  font-weight: ${(props) => props.theme.fonts.s2.weight};
  font-family: "Niveau Grotesk";
  padding-left: 10px;
  border: none;
  border-radius: 0.25rem;
`;

const StyledTextArea = styled.textarea`
  width: fill-available;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.foreground.tertiary};
  font-size: ${(props) => props.theme.fonts.s2.size};
  color: ${(props) => props.theme.colors.foreground.default};
  font-weight: ${(props) => props.theme.fonts.s2.weight};
  font-family: "Niveau Grotesk";
  padding: 10px;
  border: none;
  border-radius: 0.25rem;
`;

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled(S2)`
  margin-bottom: 0.5rem;
`;

const StyledAlert = styled(Alert)`
  margin-bottom: 1rem;
`;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const name = useStore((state) => state.name);
  const { data, isLoading } = useGetPotentialParties(name);

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit((values) => {
          // TODO: wire this up
          // eslint-disable-next-line no-console
          console.log(values);
        })}
      >
        <Title>Questions</Title>

        <Container>
          <Label>
            Please enter your name
            <StyledInput
              name="name"
              {...register("name", { required: "This is required." })}
            />
          </Label>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <Alert variant="error">{message}</Alert>}
          />
        </Container>
        <Container>
          <Label>
            Please enter your message
            <StyledTextArea
              rows="4"
              name="comments"
              {...register("comments", { required: "This is required." })}
            />
          </Label>
          <ErrorMessage
            errors={errors}
            name="comments"
            render={({ message }) => <Alert variant="error">{message}</Alert>}
          />
        </Container>

        {data && data.length === 0 && (
          <StyledAlert variant="error">
            The name you entered could not be found on the guest list.
          </StyledAlert>
        )}

        <ButtonGroup center>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <LoadingIndicator />}
            {!isLoading && "Submit"}
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
}

export default Login;
