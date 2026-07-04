export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  persona: "hitesh" | "piyush";
  message: string;
  history: ChatMessage[];
}