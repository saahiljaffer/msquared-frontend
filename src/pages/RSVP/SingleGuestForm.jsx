/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-class-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/static-property-placement */
import React from "react";
import { Form, Field } from "react-final-form";
import RadioGroup from "../../components/Radio/RadioGroup";
import Button, { STYLES, TYPES } from "../../components/Button/Button";
import { ButtonGroup } from "../../components/ButtonGroup/ButtonGroup";
import { required } from "../../utils/validations";

function SingleGuestForm({ onSubmit, onCancel, cancelBtnLabel }) {
  return (
    <Form enableReinitialize onSubmit={onSubmit}>
      {({ invalid, form, submitting }) => (
        <form>
          <p>Will you be joining us for the Nikkah</p>
          <input type="radio" id="html" name="fav_language" value={true} />
          <label htmlFor="html">Yes</label>
          <input type="radio" id="css" name="fav_language" value={false} />
          <label htmlFor="css">No</label>
          <Field
            name="isAttendingReception"
            label="Will you be joining us for the after party?"
            options={[
              { label: "Let the good times roll!", value: "Yes" },
              { label: "Sorry, the show must go on without me", value: "No" },
            ]}
            validate={required}
            component={RadioGroup}
          />
          <ButtonGroup right>
            <Button
              buttonType={TYPES.OUTLINE}
              onClick={() => {
                onCancel();
                form.reset();
              }}
            >
              {cancelBtnLabel()}
            </Button>
            <Button
              buttonStyle={STYLES.PRIMARY}
              disabled={invalid || submitting}
              type="submit"
              onClick={() => {
                form.reset();
                // onSubmit();
              }}
            >
              Next
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default SingleGuestForm;
