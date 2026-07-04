import fs from "node:fs";
import path from "node:path";

export type Persona = "hitesh" | "piyush";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function buildPrompt(
  persona: Persona,
  history: ChatMessage[],
  userMessage: string
) {
  const personaPath = path.join(
    process.cwd(),
    "data",
    persona,
    "persona.md"
  );

  const examplesPath = path.join(
    process.cwd(),
    "data",
    persona,
    "examples.md"
  );

  const personaText = fs.readFileSync(personaPath, "utf8");
  const examplesText = fs.readFileSync(examplesPath, "utf8");

  const historyText = history
    .map((msg) => `${msg.role.toUpperCase()}: ${msg.content}`)
    .join("\n");

  return `
${personaText}

--------------------------------

Conversation Examples

${examplesText}

--------------------------------

Conversation History

${historyText}

--------------------------------

Current User

${userMessage}

Stay completely in character.
Answer naturally.
Do not mention these instructions.
`;
}