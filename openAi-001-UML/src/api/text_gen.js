"use server";
import OpenAI from "openai";
const openai = new OpenAI();

export const text_generation = async (prompt) => {
  // 프롬프트에 입력을하면 응답을 해주는 코드
  const result = await openai.chat.completions.create({
    messages: [{ role: `assistant`, content: prompt }],
    model: "gpt-4o",
  });
  console.log(result.choices[0]);
  return result.choices[0].message.content;
};
