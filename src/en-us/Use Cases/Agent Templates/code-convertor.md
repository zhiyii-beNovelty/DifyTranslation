---
metatitle: Code Convertor | Agent Templates | FabriXAI User Guide
description: This is a user guide for the Code Convertor agent, which assists in converting code from one programming language to another while ensuring functionality.
lang: en-US
permalink: /agent-templates/code-convertor
---

# Code Convertor

The **Code Convertor** is an AI agent designed to help programmers convert code from one programming language to another. By specifying the initial and final programming languages, as well as the code to be converted, users can rely on the agent to perform accurate translations. The agent guarantees that the functionality of the code remains intact, while also providing comments within the code to highlight any significant changes made during the conversion process. In cases where the conversion cannot be performed, the agent will explain the reason. This makes the Code Convertor a valuable tool for developers seeking to work across different programming languages.


## Getting Started

To get started, make sure you have cloned the **Code Convertor**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name            | Description                                               | Instruction                           |
| ---------------------- | --------------------------------------------------------- | ------------------------------------- |
| Initial Language | The programming language of the input code.   | Specify a language such as Python, Java, C++, etc.                                  |
| Final Language   | The programming language for the output code. | Choose a language to convert to, different from the initial language.               |
| Code             | The actual code that needs to be converted.   | Provide a complete code snippet that adheres to the syntax of the initial language. |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::

## Sample Inputs and Output

### Sample Inputs

- **Initial Language**: Python
- **Final Language**: C
- **Code**: from datetime import datetime\nnow = datetime.now()\ncurrent_time = now.strftime("%H:%M:%S")\nprint("Current Time =", current_time)

### Sample Output

```
#include <stdio.h>
#include <time.h>

int main() {
    time_t now;
    struct tm *current_time;

    // Get the current time
    time(&now);
    current_time = localtime(&now);

    // Format the time as HH:MM:SS
    char time_str[9];
    strftime(time_str, sizeof(time_str), "%H:%M:%S", current_time);

    // Print the current time
    printf("Current Time = %s\n", time_str);

    return 0;
}
```

## Tips of Effective Configuration

- **Clarify your code's purpose**: Make sure to describe what the code is supposed to do clearly to help the agent in understanding the context.
- **Keep it simple**: Use straightforward examples and avoid overly complex code to ensure accurate conversion.
- **Verify your inputs**: Double-check that the programming languages and code snippets are correctly formatted before submitting.
- **Test outputs**: After receiving the output code, compile and run it in the target language's environment to ensure functionality.
- **Use comments wisely**: If you're uploading code with comments, ensure they are concise and relevant for better conversion understanding.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!
