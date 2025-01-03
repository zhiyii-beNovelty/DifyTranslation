---
metatitle: Prompt Enhancer | Agent Templates | FabriXAI User Guide
description: This is a user guide for the Prompt Enhancer, an AI assistant designed to refine and improve your prompts for LLMs.
lang: en-US
permalink: /agent-templates/prompt-enhancer
---

# Prompt Enhancer

The **Prompt Enhancer** is an AI assistant specialized in prompt engineering for large language models (LLMs). It allows users to input initial prompts or review comments, which the agent then refines based on context and clarity. The output includes a polished version of the prompt, an explanation of the adjustments made, and suggestions for further enhancements. This tool is particularly useful for users looking to improve the effectiveness and precision of their prompts, ensuring better interactions with AI models.

## Getting Started

To get started, make sure you have cloned the **Prompt Enhancer**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

No input fields are required for these AI agents.

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

```
Help me generate a reply email to my client who is complaining about our services.
```

### Sample Output

````
Refined Prompt:
Generate a reply email to [{} client name] regarding their complaint about [{} service issue] (e.g. delayed delivery, poor customer support, billing error).

Explanation of Refinement:
The original prompt is clear but lacks specificity. By adding the brackets and examples, we provide more context and make it easier for the AI to generate a relevant and empathetic response.

Suggestions for Further Refinement:

Consider adding more details about the client's previous interactions or communication history to help tailor the response.
You may also want to specify the tone of the email (e.g. apologetic, solution-focused, neutral) to ensure the AI generates a response that aligns with your desired approach.
Example with additional refinement:
Generate a reply email to [{} client name] regarding their complaint about [{} service issue] (e.g. delayed delivery, poor customer support, billing error), with a tone of [{} tone] (e.g. apologetic, solution-focused, neutral).

Reply Email:
Subject: Re: [{} service issue] - Apology and Solution

Dear [{} client name],

I am writing to apologize for the [{} service issue] you experienced with our [{} service]. We understand the inconvenience this has caused and want to assure you that we are taking immediate action to resolve the issue.

[{} Briefly describe the actions being taken to resolve the issue]

We value your business and appreciate your feedback. If you have any further concerns or questions, please do not hesitate to reach out to us.

Thank you for your patience and understanding.

Best regards,
[{} Your Name]

Explanation of Optimizations:
The reply email aims to:

Acknowledge the client's complaint and apologize for the issue
Describe the actions being taken to resolve the issue
Show appreciation for the client's feedback and business
Provide a clear point of contact for further communication
This response aims to address the client's concerns, demonstrate a commitment to resolving the issue, and maintain a positive relationship.
````


## Tips for Effective Configuration

- **Be Specific**: Clearly define your prompt context to guide the agent effectively.
- **Iterate**: Don’t hesitate to refine your prompt multiple times for optimal results.
- **Use Examples**: Provide examples of what you expect to help the agent understand your needs better.
- **Test Variations**: Experiment with different phrasings and structures to see which yields the best outputs.
- **Feedback Loop**: Utilize the suggestions for further refinement to continuously improve your prompts.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!