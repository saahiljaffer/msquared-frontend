import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { B1 } from "../../components/Fonts/Fonts";
import Button, { STYLES as ButtonStyles } from "../../components/Button";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const RadioContainer = styled.div`
  margin-bottom: 0.5rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const Label = styled(B1)`
  margin-bottom: 0.5rem;
`;

const RadioLabel = styled(B1)`
  color: ${(props) => props.theme.colors.foreground.tertiary};
`;

const InputContainer = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  min-height: 2rem;
  padding-left: 2.5rem;
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

  :checked ~ ${Label} {
    color: ${(props) => props.theme.colors.foreground.secondary};
  }
`;

function SingleGuestForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Label>Will you be joining us for the nikkah</Label>
        <RadioContainer>
          <InputContainer>
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
              Yes
            </RadioLabel>
          </InputContainer>
        </RadioContainer>
        <RadioContainer>
          <InputContainer>
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
              No
            </RadioLabel>
          </InputContainer>
        </RadioContainer>
      </Container>
      <Container>
        <Label>Will you be joining us for the reception</Label>
        <RadioContainer>
          <InputContainer>
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
              Yes
            </RadioLabel>
          </InputContainer>
        </RadioContainer>
        <RadioContainer>
          <InputContainer>
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
              No
            </RadioLabel>
          </InputContainer>
        </RadioContainer>
      </Container>

      {errors.exampleRequired && <span>This field is required</span>}

      <Button buttonStyle={ButtonStyles.OUTLINE} type="submit">
        Next
      </Button>
    </form>
  );
}

SingleGuestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SingleGuestForm;
