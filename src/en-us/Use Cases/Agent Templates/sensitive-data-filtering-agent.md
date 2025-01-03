---
metatitle: Sensitive Data Filtering Agent | Agent Templates | FabriXAI User Guide
description: This is a user guide for the Sensitive Data Filtering Agent, designed to help users safeguard personal information by automatically identifying and obscuring sensitive data within a given text.
lang: en-US
permalink: /agent-templates/sensitive-data-filtering-agent
---

# Sensitive Data Filtering Agent

The **Sensitive Data Filtering Agent** is designed to help users safeguard personal information by automatically identifying and obscuring sensitive data within a given text. Targeting specific categories such as HKID numbers, phone numbers, addresses, financial information, and dates of birth, this agent systematically replaces sensitive data with predefined placeholders. Users can maintain the integrity of their communication and compliance with data privacy regulations while ensuring that confidential details are not leaked, making it an invaluable tool for professionals who handle sensitive documents.


## Getting Started

To get started, make sure you have cloned the **Sensitive Data Filtering Agent**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


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
Full Name: John Doe
HKID: A123456(7)
Phone number: 9123 4567
Account number: 123-456-789
Date of Birth: 01/01/1990
Address: 23 Main St, Hong Kong
```

### Sample Output

```
Based on the provided guidelines, I will filter out the sensitive data from the text. Here is the modified text:

Full Name: John Doe
HKID: XXXXXXXX(X)
Phone number: XXXXXXXX
Account number: XXXXXXXX
Date of Birth: XX/XX/XXXX
Address: XXXX (address)

I replaced the sensitive data as follows:

1. HKID: A123456(7) -> XXXXXXXX(X)
2. Phone number: 9123 4567 -> XXXXXXXX
3. Account number: 123-456-789 -> XXXXXXXX
4. Date of birth: 01/01/1990 -> XX/XX/XXXX
5. Address: 23 Main St, Hong Kong -> XXXX (address)

Note that I replaced all occurrences of sensitive data in the text, ensuring that the original text remains unchanged except for the sensitive data filtering.
```

## Tips of Effective Configuration

- **Understand Data Types**: Know the various types of sensitive data you need to filter to ensure comprehensive coverage.
- **Provide Contextual Examples**: Upload examples of sensitive data to help the agent accurately identify and replace this information.
- **Test with Diverse Inputs**: Use different formats of sensitive data to verify the agent's performance across multiple scenarios.
- **Monitor Agent Performance**: Regularly review outputs to catch any missed data or false positives and adjust configurations as necessary.
- **Stay Updated on Regulations**: Keep informed about data privacy laws to ensure the agent’s filtering practices remain compliant.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!