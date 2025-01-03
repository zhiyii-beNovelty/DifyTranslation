---
metatitle: Customer Inquiry Prioritizing Agent | Agent Templates | FabriXAI User Guide
description: This is a user guide for the Customer Inquiry Prioritizing Agent to classify customer inquiries based on urgency.
lang: en-US
permalink: /agent-templates/customer-inquiry-prioritizing-agent
---

# Customer Inquiry Prioritizing Agent

The **Customer Inquiry Prioritizing Agent** is designed to analyze customer inquiries and classify them into one of five urgency levels: Urgent, High, Medium, Low, or General. By evaluating the urgency, severity, and potential for further issues in each inquiry, the agent assists businesses in effectively prioritizing customer support requests. This ensures that critical issues are addressed promptly, enhancing customer satisfaction and operational efficiency.


## Getting Started

To get started, make sure you have cloned the **Customer Inquiry Prioritizing Agent**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name            | Description                                               | Instruction                           |
| ---------------------- | --------------------------------------------------------- | ------------------------------------- |
| Customer Inquiry | The customer inquiry text to be classified. | Input should be a clear and concise description of the inquiry, ideally limited to 200 words. Focus on including key issues, concerns, or requests. |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Customer Inquiry**: I'm trying to complete an urgent order for a client, but I'm unable to log in to my account on your e-commerce platform. I've been locked out and can't access my order management tools. This is preventing me from fulfilling a time-sensitive order for a major client. I need this resolved immediately as it's causing significant disruption to my business operations.

### Sample output

```
Urgent

The customer is unable to log in to their account, which is preventing them from fulfilling a time-sensitive order for a major client. This is causing significant disruption to their business operations and requires immediate attention to resolve. The customer's business is severely impacted, and the issue needs to be addressed quickly to prevent further consequences.
```


## Tips of Effective Configuration

- **Be Specific**: Providing detailed inquiries helps the agent analyze them more accurately for urgency classification.
- **Limit Length**: Aim to keep inquiries concise; a length limit of 200 words generally improves response accuracy.
- **Use Clear Language**: Avoid jargon and ambiguous terms for better understanding of the inquiry by the agent.
- **Test Variants**: Try different versions of similar inquiries to see how the agent classifies them, optimizing your inputs eventually.
- **Regular Updates**: Keep the knowledge base updated to ensure the agent responds with the most relevant information.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!