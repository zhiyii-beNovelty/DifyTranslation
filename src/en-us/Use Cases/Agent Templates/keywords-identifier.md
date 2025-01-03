---
metatitle: Keywords Identifier | Agent Templates | FabriXAI User Guide
description: This is a user guide for the Keywords Identifier, designed to extract key themes and topics from a given piece of text.
lang: en-US
permalink: /agent-templates/keywords-identifier
---

# Keywords Identifier

The **Keywords Identifier** is an intelligent agent designed to extract key themes and topics from a given piece of text. By analyzing the content, it identifies and ranks the most relevant keywords or tags that encapsulate the core ideas and subjects discussed. This tool is particularly useful for content creators, researchers, and digital marketers who need to quickly distill information from large volumes of text. It ensures that the extracted keywords are concise and accurately reflective of the text's content, providing a ranked list based on their importance.


## Getting Started

To get started, make sure you have cloned the **Keywords Identifier**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name            | Description                                               | Instruction                           |
| ---------------------- | --------------------------------------------------------- | ------------------------------------- |
| Text                   | The content from which you want to extract keywords.        | Provide a clear piece of text for analysis.                |
| Number of Keywords     | The maximum number of keywords or tags you want to extract. | Specify a number to limit the results (e.g., 5, 10, etc.). |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Text**: Social media marketing is essential for businesses today. It helps brands connect with their audience, increase visibility, and drive engagement. By leveraging platforms like Facebook, Instagram, and Twitter, companies can create targeted campaigns that resonate with their customers.
- **Number of Keywords**: 5

### Sample Output

```
Based on the text, I have extracted the top 5 keywords/tags that capture the main topics and themes. Here they are:

1. **Social Media Marketing**: This is the primary topic of the text, and it's the most relevant keyword/tag.
2. **Branding**: The text mentions connecting with the audience, increasing visibility, and driving engagement, all of which are related to building a brand.
3. **Digital Marketing**: This keyword/tag captures the online aspect of marketing, which is a key theme in the text.
4. **Targeted Campaigns**: The text highlights the importance of creating campaigns that resonate with customers, which implies a focus on targeted marketing.
5. **Online Presence**: This keyword/tag reflects the idea that businesses need to establish an online presence to connect with their audience and achieve their marketing goals.

These keywords/tags capture the essence of the text and provide a concise summary of the main topics and themes.
```

## Tips of Effective Configuration

- **Provide Clear Text**: Ensure the text you provide is well-structured and relevant to the keywords you wish to extract for better results.
- **Limit Keyword Count**: Specify a reasonable number of keywords to avoid overwhelming outputs and focus on the most significant themes.
- **Use Relevant Context**: If possible, upload supporting documents that provide context to enhance the accuracy of keyword extraction.
- **Test with Various Texts**: Experiment with different styles and topics of text to see how the agent performs across diverse content.
- **Review Output Regularly**: Regularly assess the extracted keywords for relevance and accuracy, and adjust the input text or settings as needed.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!
