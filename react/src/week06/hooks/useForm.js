// [요약]
// - 폼 입력값을 한 곳에서 관리하는 커스텀 훅

import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function reset() {
    setValues(initialValues);
  }

  return { values, onChange, reset };
}
