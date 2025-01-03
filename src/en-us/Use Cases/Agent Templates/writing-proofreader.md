---
metatitle: Writing Proofreader | Agent Templates | FabriXAI User Guide
description: This is a user guide for configuring and using the Writing Proofreader AI agent to polish a given text.
lang: en-US
permalink: /agent-templates/writing-proofreader
---

# Writing Proofreader

The **Writing Proofreader** AI agent is designed to provide professional-grade feedback on your written content. By evaluating grammar, structure, and content, it helps you refine your text to enhance clarity and engagement. Whether you're drafting a book review, an article, or any form of written expression, this agent offers detailed suggestions for improvement, making it an invaluable tool for writers at any level.


## Getting Started

To get started, make sure you have cloned the **Writing Proofreader**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name     | Description                                    | Instruction                                                         |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------------- |
| Target of the writing     | Specify the focus or goal of the text | Include a brief statement about the purpose of your writing (e.g., "A book review," "An article") |
| The text for proofreading | Input the text you want proofread     | Provide a detailed text for evaluation, ideally between 300-1000 words for comprehensive feedback |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Target of the writing**: A book review of the book Harry Potter and the Philosopher's Stone
- **The text for proofreading**: J.K. Rowling's Harry Potter and the Philosopher's Stone is a captivating debut that introduces readers to the wizarding world and the boy who would become one of literature's most iconic heroes. The story follows young Harry Potter, an ordinary boy who discovers on his eleventh birthday that he is in fact a wizard. Whisked away to Hogwarts School of Witchcraft and Wizardry, Harry embarks on an extraordinary journey, making new friends, learning magic, and uncovering the truth about his past. Rowling's world-building is nothing short of magical. From the bustling Diagon Alley to the enchanting Great Hall, every setting is brought to life with meticulous detail and a sense of wonder. The author seamlessly blends the mundane and the supernatural, creating a fantastical realm that feels both foreign and familiar.

### Sample Output

```
Feedback:
Grammar:
The grammar in the text is generally correct, with no glaring errors. However, there are a few areas where punctuation could be improved for better readability. For example, the sentence “The story follows young Harry Potter, an ordinary boy who discovers on his eleventh birthday that he is in fact a wizard” could benefit from a comma after “in fact.”

Structure:
The structure of the text is clear and logical. It begins with an introduction to the book and its significance, followed by a brief summary of the plot, and concludes with an analysis of the author’s world-building skills. However, the transitions between sentences and paragraphs could be smoother to enhance the flow of the review.

Content:
The content effectively meets the target of a book review. It provides an overview of the plot and highlights key elements such as world-building. However, it could benefit from a more critical analysis of the book’s strengths and weaknesses. For instance, mentioning character development, pacing, or thematic elements would provide a more comprehensive review.

Revised Text:
J.K. Rowling’s Harry Potter and the Philosopher’s Stone is a captivating debut that introduces readers to the wizarding world and the boy who would become one of literature’s most iconic heroes. The story follows young Harry Potter, an ordinary boy who discovers on his eleventh birthday that he is, in fact, a wizard. Whisked away to Hogwarts School of Witchcraft and Wizardry, Harry embarks on an extraordinary journey, making new friends, learning magic, and uncovering the truth about his past.

Rowling’s world-building is nothing short of magical. From the bustling Diagon Alley to the enchanting Great Hall, every setting is brought to life with meticulous detail and a sense of wonder. The author seamlessly blends the mundane and the supernatural, creating a fantastical realm that feels both foreign and familiar.

While the book excels in creating an immersive world, it also shines in character development. Harry, along with his friends Hermione Granger and Ron Weasley, evolves throughout the story, facing challenges that test their courage and friendship. The pacing is well-balanced, keeping readers engaged from start to finish. Additionally, the themes of bravery, friendship, and the battle between good and evil are woven seamlessly into the narrative, making it not just a children’s book but a story with universal appeal.

In conclusion, Harry Potter and the Philosopher’s Stone is a masterful introduction to a series that has captivated millions. Rowling’s ability to create a rich, immersive world and relatable characters makes this book a must-read for both young and adult readers.
```

## Tips of Effective Configuration

- **Be clear in your purpose**: Clearly define the target of your writing to guide the feedback appropriately.
- **Provide comprehensive text**: The more content you provide, the more detailed the feedback will be; aim for a length between 300-1000 words.
- **Use proper formatting**: Ensure your text maintains clear paragraphs and structure to allow for better analysis.
- **Iterate based on feedback**: Review the suggestions provided by the agent and refine your text, then run it through the agent again for further improvements.
- **Experiment with model options**: If you're not satisfied with the output, try different AI models to see which one aligns best with your writing style.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!
