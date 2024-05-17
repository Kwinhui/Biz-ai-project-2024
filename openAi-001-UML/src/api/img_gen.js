"use server";
import OpenAI from "openai";
const openai = new OpenAI();

const image_generation = async (prompt) => {
  const result = openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    // n:1 이미지 하나, size 속성은 없어짐
    n: 1,
    response_format: "b64_json",
  });
  // img를 base64로 받겠다
  return result.data[0].b64_json;
};

export default image_generation;
