---
metatitle: Spam Detector | Agent Templates | FabriXAI User Guide
description: This is a user guide for configuring and using the Spam Detector AI agent to identify spam messages efficiently.
lang: en-US
permalink: /agent-templates/spam-detector
---

# Spam Detector

The **Spam Detector** agent is designed to help users determine whether an email or text message is spam or not. By analyzing various aspects of the message, including unsolicited content, suspicious links, personal information requests, urgency language, and grammar errors, the Spam Detector provides a clear verdict of "Spam" or "Not Spam." Additionally, it offers a brief explanation of the reasoning behind the decision, helping users to understand the factors influencing the assessment. This tool utilizes defined guidelines and a confidence rating to enhance the accuracy of its spam detection.


## Getting Started

To get started, make sure you have cloned the **Spam Detector**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name          | Description                                         | Instruction                                                                                         |
| -------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Mail or Text Message | Input the email or text message you want to evaluate. | Include the full text of the message, maintaining proper formatting. Aim for clarity and relevance. |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Mail or Text Message**: Hi, Thanks for working with us. Your bill for $373.75 was due on 28 Aug 2016. If you've already paid it, please ignore this email and sorry for bothering you. If you've not paid it, please do so as soon as possible. To view your bill visit [link] you've got any questions, or want to arrange alternative payment don't hesitate to get in touch. Thanks NJW Limited

### Sample Output

```
**Verdict:** Not Spam

**Explanation:**

* The email is not unsolicited, as it appears to be a notification about a bill that was due on a specific date.
* There are no suspicious links, but the link provided is likely a legitimate link to view the bill.
* The email does not request any personal information.
* There is a sense of urgency, but it is not threatening. The language is polite and encourages the recipient to take action if they have not paid the bill.
* There are no excessive grammar and spelling errors.

**Confidence Level:** 5

I am very confident in this verdict because the email appears to be a legitimate notification from a company (NJW Limited) about a bill that was due. The language is professional and polite, and the request to view the bill is reasonable. The only potential red flag is the sense of urgency, but it is not aggressive or threatening. Overall, the email seems to be a genuine attempt to notify the recipient about a bill, rather than a spam message.
```


## Tips for Effective Configuration

- **Provide Clear Context**: Ensure your inputs are clear and free from ambiguity to help the agent make accurate evaluations.
- **Use Relevant Samples**: Test the agent with different types of messages to gauge its capability and adjust configuration accordingly.
- **Regularly Update Knowledge**: Keep your uploaded documents current to ensure the agent has the best context for evaluation.
- **Monitor Performance**: Review the confidence levels in the outputs to assess the reliability and make necessary adjustments.
- **Experiment with Different Models**: Try various AI models to determine which provides the best results for your needs.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!

