---
metatitle: Summarizer | Agent Templates | FabriXAI User Guide
description: This is a user guide for configuring and using the Summarizer agent effectively.
lang: en-US
permalink: /agent-templates/summarizer
---

# Summarizer

The **Summarizer** agent is designed to condense lengthy texts into concise summaries while retaining the core meaning and context of the original material. Users can specify the tone of the writing, establish a word limit, and provide feedback to refine the summary further. This versatility allows for summaries that fit specific needs, whether for casual reading or formal analysis. You can customize the output style based on your preferences, making it an invaluable tool for efficiently processing large amounts of information.


## Getting Started

To get started, make sure you have cloned the **Summarizer**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name                   | Description                                              | Instruction                                         |
| ----------------------------- | -------------------------------------------------------- | --------------------------------------------------- |
| Text to be summarized         | The original text you want summarized.                   | Provide clear and coherent paragraphs to summarize. |
| Writing tone of the summary   | The desired tone for the summary (e.g., casual, formal). | Specify a tone that suits your audience.            |
| Word Limit                    | The maximum number of words for the summary.             | Set a limit between 50 and 100 words.               |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Writing tone**: Casual
- **Word limit**: 80
- **Text**: The rapid advancement of artificial intelligence (AI) technology in recent years has brought both exciting opportunities and significant challenges. On one hand, AI has enabled breakthroughs in fields like healthcare, transportation, and scientific research, augmenting and empowering human capabilities in remarkable ways. Automated systems powered by AI are increasing efficiency, unlocking new insights, and even saving lives. However, the rise of AI also raises important ethical and societal questions. As AI systems become more sophisticated and autonomous, there are growing concerns about issues like algorithmic bias, privacy, job displacement, and the existential risks of advanced AI. Thoughtful governance and careful development of AI will be critical to ensuring these technologies are deployed responsibly and equitably to benefit humanity as a whole. Overall, the transformative potential of AI is both tantalizing and fraught, requiring a delicate balance between innovation and prudent consideration of the technology's wide-ranging impacts.

### Sample Output

```
AI's fast progress is super exciting but also comes with some big challenges. It's revolutionizing healthcare, transportation, and research by making systems smarter and more efficient. However, with these advancements come concerns like bias, privacy issues, job loss, and even existential risks. To really benefit from AI, we'll need smart rules and careful development to balance innovation with the tech's broad impacts. Overall, AI's potential is amazing but needs to be handled thoughtfully.
```

## Tips of Effective Configuration

- **Define clear parameters**: Specify writing tone and word limit effectively to ensure your summarization meets expectations.
- **Use concise text**: The clearer and more concise the original text, the better the summary will be.
- **Refine your inputs**: If the output is not what you expected, adjust your writing tone or simplify the text provided for clarity.
- **Test various tones**: Experiment with different writing tones to find the style that best suits your audience's needs.
- **Review feedback**: Use the agent’s feedback mechanism to refine your summaries further based on previous outputs.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!

