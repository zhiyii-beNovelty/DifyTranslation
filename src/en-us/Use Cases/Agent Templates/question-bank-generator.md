---
metatitle: Question Bank Generator | Agent Templates | FabriXAI User Guide
description: This is a user guide for configuring and using the Question Bank Generator agent to create customized multiple-choice questions.
lang: en-US
permalink: /agent-templates/question-bank-generator
---

# Question Bank Generator

The **Question Bank Generator** is an intelligent agent designed to create multiple-choice questions based on specific topics derived from provided web content. The agent assesses the user's understanding by forming questions that span various difficulty levels, from easy to difficult, ensuring an inclusive evaluation of the key concepts. With the ability to generate both single-correct and multiple-correct answer options, this tool tailors assessments for educational purposes effectively. It's ideal for educators, students, and anyone looking to reinforce knowledge comprehensively.


## Getting Started

To get started, make sure you have cloned the **Question Bank Generator**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name            | Description                                               | Instruction                           |
| ---------------------- | --------------------------------------------------------- | ------------------------------------- |
| Topic               | The specific subject for generating the questions  | Specify the topic clearly; ensure its relevance to the target audience.                     |
| Webpage URL (Concept Source) | The link to the webpage containing information or references for generating questions | Provide a valid URL that contains comprehensive content on the chosen topic.                |
| Number of Questions | The total number of questions to be generated      | Input a number representing how many questions you wish to create (e.g., between 1 and 10). |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Topic**: Python
- **Webpage URL (Concept Source)**: "https://www.guru99.com/python-tutorials.html"
- **Number of Questions**: 3

### Sample output

```
Question 1:
What is the primary focus of ISO 27001?
A) Managing financial records
B) Managing information security
C) Managing customer relationships
D) Managing human resources
Correct answer: B

Question 2:
Which of the following is considered a tangible asset?
A) Reputation
B) Law compliance
C) Laptop
D) Intellectual property
Correct answer: C

Question 3:
When teleworking, which of the following actions is NOT recommended?
A) Using authorized devices
B) Using public shared devices
C) Being careful of unauthorized access
D) Working from home
Correct answer: B
```

## Tips of Effective Configuration

- **Clarify your topic**: Ensure the topic is specific and well-defined to produce relevant questions.
- **Use reliable sources**: Provide URLs that lead to reputable and comprehensive information to enhance question quality.
- **Specify question quantity**: Indicate an appropriate number of questions to maintain focus and detail in assessments.
- **Review outputs**: Check the generated questions for clarity and relevance to further refine your educational tools.
- **Experiment with inputs**: Adjust the topic and number of questions based on feedback and outcomes for the best results.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!
