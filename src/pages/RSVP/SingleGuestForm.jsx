import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { B1 } from "../../components/Fonts";
import Button, { STYLES as ButtonStyles } from "../../components/Button";

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const QuestionContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled(B1)`
  /* margin-bottom: 1rem; */
`;

const RadioLabel = styled.label`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 2rem;
  padding-left: 2.5rem;
  :last-child {
    margin-bottom: 0;
  }
  color: ${(props) => props.theme.colors.foreground.tertiary};
`;

const CheckboxContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.foreground.quintenary};
`;

const CheckMark = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  visibility: hidden;
  color: ${(props) => props.theme.colors.foreground.quintenary};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  :checked ~ ${CheckboxContainer} {
    background-color: ${(props) => props.theme.colors.foreground.tertiary};

    ${CheckMark} {
      visibility: visible;
    }
  }
`;

function SingleGuestForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  return (
    <Container
      onSubmit={handleSubmit((values) => {
        reset();
        onSubmit(values);
      })}
    >
      {/* TODO: improve error design or use alert */}
      {false && <Label>Please complete both fields</Label>}
      <QuestionContainer>
        <Label>Will you be joining us for the nikkah?</Label>

        <RadioLabel>
          <Input
            type="radio"
            name="is_attending"
            value
            {...register("is_attending", { required: true })}
          />
          <CheckboxContainer>
            <CheckMark icon="check" />
          </CheckboxContainer>
          <Label>Yes</Label>
        </RadioLabel>

        <RadioLabel>
          <Input
            type="radio"
            id="css"
            name="is_attending"
            value={false}
            {...register("is_attending", { required: true })}
          />
          <CheckboxContainer>
            <CheckMark icon="check" />
          </CheckboxContainer>
          <Label>No</Label>
        </RadioLabel>
      </QuestionContainer>

      <QuestionContainer>
        <Label>Will you be joining us for the reception?</Label>

        <RadioLabel>
          <Input
            type="radio"
            name="is_attending_reception"
            value
            {...register("is_attending_reception", { required: true })}
          />
          <CheckboxContainer>
            <CheckMark icon="check" />
          </CheckboxContainer>
          <Label>Yes</Label>
        </RadioLabel>

        <RadioLabel>
          <Input
            type="radio"
            id="css"
            name="is_attending_reception"
            value={false}
            {...register("is_attending_reception", { required: true })}
          />
          <CheckboxContainer>
            <CheckMark icon="check" />
          </CheckboxContainer>
          <Label>No</Label>
        </RadioLabel>
      </QuestionContainer>

      <Button buttonStyle={ButtonStyles.OUTLINE} type="submit">
        Next
      </Button>
    </Container>
  );
}

SingleGuestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SingleGuestForm;
