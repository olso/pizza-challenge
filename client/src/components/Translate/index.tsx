import React from "react";

import { useIntl } from "../../contexts/IntlContext";

type Props = {
  t: string;
};
export default function Translate({ t }: Props) {
  const intl = useIntl();
  return <>{intl.t(t)}</>;
}
