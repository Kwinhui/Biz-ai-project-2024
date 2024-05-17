"use client";

import { useCallback } from "react";
import Mermaid from "../modules/Mermaid";

const ViewResultPage = ({ resultText }) => {
  // 문자열 결과를 보기좋게 편집하기
  const textToHtml = useCallback((text) => {
    // 엔터를 기준으로 문자열 분해하기
    const textList = text.split("\n");
    let flag = false;

    const result = textList.map((t) => {
      // trim() 앞뒤에 있는 빈칸 지워
      // startsWith() ``` 라는 문자열이 들어있으면
      if (!flag && t.trim().startsWith("```")) {
        flag = true;
        return `<pre class="mermaid_code">`;
      } else if (flag && t.trim().startsWith("```")) {
        flag = false;
        return "</pre>";
      } else if (flag) {
        return `${t}\n`;
      }
      return `${t}<br/>`;
    });
    // 분해된 문자열 다시 하나로 만들기
    return result.join("");
  });

  const getMermaid = useCallback((text) => {
    const textList = text.split("\n");
    let flag = false;
    const result = textList.map((t) => {
      if (t.trim().startsWith("```mermaid")) {
        flag = true;
        return "";
      } else if (flag && t.trim().startsWith("```")) {
        flag = false;
        return "\n\n";
      } else if (flag) {
        return `${t}\n`;
      } else {
        return "\n";
      }
    });
    return result.join("\n");
  });

  // 난 위험하더라도 html 코드를 작성할거야
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: textToHtml(resultText) }}></div>
      {resultText?.includes("```mermaid") && <Mermaid chart={getMermaid(resultText)} />}
    </>
  );
};

export default ViewResultPage;
