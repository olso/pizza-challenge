import cardValidator from "card-validator";
import { object, string, InferType } from "yup";

export type TFormValues = InferType<ReturnType<typeof makeValidationSchema>>;

export const INITIAL_VALUES: TFormValues = {
  name: "",
  address: "",
  phone: "",
  cardNumber: "",
  cardExpiration: "",
  cardCvv: "",
};

const wish = "(wish card-validator would give a reason)";

export const makeValidateCardNumber = () =>
  string().test("default", `Invalid ${wish}`, function (value) {
    const { isValid } = cardValidator.number(value);
    return isValid;
  });

export const makeValidateCardExpiration = () =>
  string().test("default", `Invalid ${wish}`, function (value) {
    const { isValid } = cardValidator.expirationDate(value);
    return isValid;
  });

export const makeValidateCardCvv = () =>
  string().test("default", `Invalid ${wish}`, function (value) {
    const { isValid } = cardValidator.cvv(value);
    return isValid;
  });

export function makeValidationSchema() {
  return object({
    name: string().label("Name").required().max(128),
    address: string().label("Address").required().max(128),
    phone: string().label("Phone").required().max(128),
    cardNumber: makeValidateCardNumber()
      .label("Card number")
      .required()
      .max(128),
    cardExpiration: makeValidateCardExpiration()
      .label("Card expiration")
      .required()
      .max(128),
    cardCvv: makeValidateCardCvv().label("Card CVV").required().max(128),
  }).required();
}
