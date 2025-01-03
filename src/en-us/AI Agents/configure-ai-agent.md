---
metatitle: Configure AI Agent | FabriXAI User Guide
description: Learn how to configure AI agents on FabriXAI with this step-by-step guide.
lang: en-US
permalink: /configure-ai-agent
---

# Configure AI Agent

## Create Your Customized AI Agents in FabriXAI

AI agents in FabriXAI are designed to automate workflows and enhance specific use cases. With FabriXAI, you can deploy your AI agent in two formats, depending on the needs of your task:

- **Web App**: Ideal for tasks requiring a standalone application accessible via a browser, such as form submissions or document generation.
- **Chatbot**: Perfect for real-time conversational interactions, such as customer support or virtual assistants.

This guide will walk you through the steps and components necessary to create and configure your customized AI agent.


## Getting Started

The AI agent builder is organized into four essential blocks:

1. **[User Inputs](/en-us/configure-ai-agent/#user-inputs)**: Specify the data you want to collect from users.
2. **[Knowledge](/en-us/configure-ai-agent/#knowledge)**: Define the information your AI agent will use.
3. **[AI Model](/en-us/configure-ai-agent/#ai-model)**: Choose the model that will power your AI agent's responses.
4. **[Output](/en-us/configure-ai-agent/#output)**: Configure how your AI agent will present its results.

Let’s dive in and start building your AI agent!


## User Inputs

### A. Collect and Customize User Inputs for Your AI Agent

To effectively interact with AI agents, you must define specific inputs that users provide to trigger the AI agent's responses. Different types of inputs serve various purposes, such as:

- Typing instructions for blog creation.
- Entering the purpose for data analytics.
- Selecting different customer segments.

### B. Steps to Configure User Inputs:

1. Navigate to the **User Input** block in the AI agent builder.
2. Click **"Add Input."**
3. Select and fill in the desired **Input Type**, **Label Name**, **Variable Name**, and **Max Character Length**, and specify whether it is a **Required** field.
   > Note: Please refer to [Key Input Fields to Customize](/en-us/configure-ai-agent/#c-key-input-fields-to-customize) for detailed explanations of each input field.
4. Click **"Save"** to finalize the user input.
5. To add more user inputs, repeat from step 2.

### C. Key Input Fields to Customize:

1. **Input Type**: Specify the type of input (e.g., Text, Paragraph, Dropdown Selection).
2. **Label Name**: Add a clear label to guide users (e.g., "Enter Blog Instructions").
3. **Variable Name**: Define a short, identifiable name for programming (e.g., `blog_instruction`).
4. **Max Character Length**: Set the maximum allowed length for the input (e.g., 250 characters).
5. **Required**: Indicate whether the input is mandatory or optional.


## Knowledge

### A. Enhance LLMs with Your Own Context and Data

The Knowledge feature in FabriXAI allows you to enhance your AI Agent's knowledge base with your own context and data. This enables the agent to understand and respond to questions related to specific topics or domains not covered by its general training data.

### B. Steps to Integrate Knowledge  

1. Navigate to the **Knowledge** block in the AI agent builder.  
2. Click **"Add Knowledge"**.  
3. Select to add uploaded knowledge.  
   > Note: You must upload a knowledge set first to retrieve it here. For detailed instructions on creating knowledge sets, refer to the [Knowledge Guide](/en-us/knowledge).  
4. Click **"Save"** to finalize the addition of the selected knowledge to your AI agent.  
5. *(Optional)* If your AI Agent is configured as a **Web App**, click **"Select Query Variable"** and assign a user input variable (from the **User Inputs** block) to serve as the query for knowledge retrieval.




## AI Model

### A. Power Your AI Agents with LLMs

Large Language Models (LLMs) are the foundation of FabriXAI’s AI agents, enabling them to communicate through natural language interactions. These models process user inputs and generate responses based on a "Prompt" you provide.

### B. Steps to Configure the AI Model:

1. Navigate to the **AI Model** block in the AI agent builder. 
2. Click **"Edit"**.
3. Write a **Prompt** that provides instructions for your AI agent to follow.
   > Note: Please refer to [Notes on Writing Effective Prompts](/en-us/configure-ai-agent/#c-notes-on-writing-effective-prompts) for more explanations.
4. *(Optional)* If your AI agent is configured as a **Chatbot**, you can add a Greeting Message. This message will be sent to the user at the beginning of each conversation.
5. Select the desired **AI Model** that best suits your task.
   > Note: For the list of supported AI Model please refer to [What AI Models are Supported?](/en-us/what-ai-models-are-supported).  
6. *(Optional)* Open the **"Advanced"** accordion to further adjust the model’s parameters.
   > Note: Please refer to [Guidance on Setting Parameters for LLM](/en-us/configure-ai-agent/#d-guidance-on-setting-parameters-for-llm) for more explanations.
7. Click **"Save"** to finalize the AI Model configuration.

### C. Notes on Writing Effective Prompts

- Be specific about the task you want the AI agent to perform.
- Include examples to guide the model’s behavior.
- Use structured formats when appropriate (e.g., bullet points or numbered lists).

For more tips on crafting effective prompts, visit [FabriXAI's Prompt Engineering Blog](https://www.fabrixai.com/blog/category/prompt-engineering).

### D. Guidance on Setting Parameters for LLM
Setting parameters determines the style and tone of your AI agent's responses. We offer pre-set values for various response styles, and you can also customize the settings using the following options:

1. **Temperature**: Controls the randomness of the output. A lower value (e.g., 0.2) results in more focused and deterministic responses, while a higher value (e.g., 0.8) encourages creativity and diversity in the replies.
2. **Top P**: This parameter (also known as nucleus sampling) specifies the cumulative probability of token selection. Setting it to a value like 0.9 means the model will consider only the top 90% of the probability mass for generating the next token, allowing for more controlled randomness.
3. **Presence Penalty**: Adjusts the likelihood of the model introducing new topics. A positive value discourages repetition (e.g., 0.5), making it more likely to introduce new concepts, while a value closer to 0 allows for more repetition.
4. **Frequency Penalty**: Reduces the likelihood of the model repeating the same token based on its frequency in the text. A value of 0.5 will slightly penalize common tokens, promoting variety in the output.
5. **Max Tokens**: Specifies the maximum length of the generated response. Setting this value appropriately ensures that responses are concise and relevant to your needs. For example, a value of 150 or 300 tokens might work well depending on the context.


## Output

### A. Configure AI Agent Output Templates

The **Output** block determines how the AI agent presents its results to end users and integrates with your workflows. Outputs should be clear, user-friendly, and aligned with your goals. By default, the AI agent’s output template is set based on the AI model’s results, and no further configuration is needed for this part.


## Finalize Your AI Agent

After configuring all the settings, simply click **"Save"** in the top right corner to publish your AI agent. You can access the AI agent's app page by clicking the **"Open Icon ↗"** in the top right corner, or you can share it with others through the options in the left sidebar. 


## Related Articles
- [Use AI Agent](/en-us/use-ai-agent)
- [Share AI Agent](/en-us/share-ai-agent/)