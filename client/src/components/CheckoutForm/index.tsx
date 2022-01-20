import React from "react";
import { styled } from "@mui/material/styles";
import cardValidator from "card-validator";
import {
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  TextFieldProps,
} from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import { useUpdateEffect } from "react-use";
import NumberFormat from "react-number-format";

import type { Money } from "../../types/GeneratedGql";
import {
  INITIAL_VALUES,
  TFormValues,
  makeValidationSchema,
} from "./validation";
import { fromMoneyToText } from "../../utils/money";
import testIds from "../../consts/testIds";
import Translate from "../Translate";

const sharedTextFieldProps: Omit<
  TextFieldProps,
  "ref" | "value" | "defaultValue" | "placeholder" | "type"
> = {
  fullWidth: true,
  autoComplete: "off",
  autoCorrect: "off",
  autoFocus: false,
  required: true,
};

const validationSchema = makeValidationSchema();

const Pre = styled("pre")`
  margin: 0;
  padding: 0;
`;

type CheckoutFormProps = {
  totalPrice: Money;
  onSubmit(v: TFormValues): void;
};
export default function CheckoutForm({
  totalPrice,
  onSubmit,
}: CheckoutFormProps) {
  const cardNumberRef = React.useRef<HTMLInputElement>();
  const expirationRef = React.useRef<HTMLInputElement>();
  const cvvRef = React.useRef<HTMLInputElement>();
  const [cardIssuer, setCardIssuer] = React.useState("");

  const formik = useFormik<TFormValues>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit,
  });

  const {
    dirty,
    isSubmitting,
    isValid,
    isValidating,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  const { cardNumber, cardExpiration } = values;
  const canSubmit = isValid && !isValidating && !isSubmitting && dirty;

  useUpdateEffect(() => {
    const { card, isValid } = cardValidator.number(cardNumber);
    setCardIssuer(card?.niceType ?? "");
    if (isValid) {
      expirationRef.current?.focus();
    }
  }, [cardNumber]);

  useUpdateEffect(() => {
    const { isValid } = cardValidator.expirationDate(cardExpiration);
    if (isValid) {
      cvvRef.current?.focus();
    }
  }, [cardExpiration]);

  const buildFieldProps = React.useCallback(
    (fieldName: keyof TFormValues, label: string) => ({
      ...sharedTextFieldProps,
      name: fieldName,
      "data-testid": testIds.checkoutForm[fieldName],
      label: <Translate t={label} />,
      value: values[fieldName],
      onChange: handleChange,
      onBlur: handleBlur,
      ...(errors[fieldName] && touched[fieldName]
        ? {
            error: true,
            helperText: errors[fieldName],
          }
        : {}),
    }),
    [values, errors, touched, handleChange, handleBlur]
  );

  return (
    <FormikProvider value={formik}>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <Translate t="Personal" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField {...buildFieldProps("name", "Name")} />
          </Grid>
          <Grid item xs={12}>
            <TextField {...buildFieldProps("phone", "Phone")} />
          </Grid>
          <Grid item xs={12}>
            <TextField {...buildFieldProps("address", "Address")} />
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Typography variant="h5">
              <Translate t="Payment" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Pre>
              <code>
                4024 0071 4954 0634
                <br />
                02/23
                <br />
                606
              </code>
            </Pre>
          </Grid>
          <Grid item xs={12}>
            <NumberFormat
              {...buildFieldProps("cardNumber", "Card number")}
              inputRef={cardNumberRef}
              customInput={TextField}
              format="#### #### #### ####"
              placeholder="1234 1234 1234 1234"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">{cardIssuer}</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <NumberFormat
              {...buildFieldProps("cardExpiration", "Card expiration")}
              inputRef={expirationRef}
              customInput={TextField}
              format="## / ##"
              placeholder="MM / YY"
            />
          </Grid>
          <Grid item xs={6}>
            <NumberFormat
              {...buildFieldProps("cardCvv", "Card CVV")}
              inputRef={cvvRef}
              customInput={TextField}
              format="###"
              placeholder="123"
            />
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Button
              data-testid={testIds.checkoutForm.submit}
              disabled={!canSubmit}
              variant="contained"
              color="success"
              type="submit"
            >
              <Translate t="Pay" /> {fromMoneyToText(totalPrice)}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormikProvider>
  );
}
