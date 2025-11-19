import { GoogleGenAI, Content } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize client once at module level
// The API key must be obtained exclusively from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: "AIzaSyAZ8kMB__7VVHkCvqK3BW-yFtYLrRn-qLg" });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model', text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    // Convert internal history format to Gemini Content format
    const contents: Content[] = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add the new message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 2000,
      }
    });

    return response.text || "Xin lỗi, mình chưa hiểu rõ câu hỏi. Bạn có thể hỏi lại không?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hiện tại mình đang gặp chút sự cố kết nối (Network Error). Vui lòng thử lại sau nhé!";
  }
};