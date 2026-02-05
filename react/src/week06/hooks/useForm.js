// [요약]
// - 폼 입력값을 한 곳에서 관리하는 커스텀 훅

import { useState } from "react"; // React 상태 훅

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues); // 입력값 상태

  const onChange = (e) => {
    const { name, value } = e.target; // input의 name/value 읽기
    // 기존 값을 유지하면서 해당 name만 교체
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValues(initialValues); // 초기 상태로 되돌림
  };

  return { values, onChange, reset }; // 외부에서 사용할 값/함수 반환
};
