// [요약]
// - 폼 입력값을 한 곳에서 관리하는 커스텀 훅

import { useState } from "react"; // React 상태 훅

export const useForm = (initialValues) => {
  // values: 현재 입력값 객체, setValues: 값을 바꾸는 함수
  const [values, setValues] = useState(initialValues); // 입력값 상태

  const onChange = (e) => {
    // e.target: 이벤트가 발생한 input/textarea
    const { name, value } = e.target; // input의 name/value 읽기
    // 기존 값(prev)에 현재 입력값만 덮어쓰기
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValues(initialValues); // 초기 상태로 되돌림
  };

  // 외부에서 사용할 값/함수 반환
  return { values, onChange, reset };
};
