export function buildPrompt(
    persona: string,
    examples: string,
    history: string,
    userMessage: string
) {
    return `
${persona}

${examples}

Conversation History:
${history}

User:
${userMessage}

Assistant:
`;
}