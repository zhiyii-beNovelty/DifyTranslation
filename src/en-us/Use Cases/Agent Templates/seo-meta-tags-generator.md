---
metatitle: SEO Meta Tags Generator | Agent Templates | FabriXAI User Guide
description: This is a user guide for the SEO Meta Tags Generator, a tool designed to create optimized SEO meta tags for blog posts based on provided outlines and introductions.
lang: en-US
permalink: /agent-templates/seo-meta-tags-generator
---

# SEO Meta Tags Generator

The **SEO Meta Tags Generator** is a specialized AI agent designed to help content creators optimize their blog posts for search engines. By providing an outline and introduction, along with a featured image, the agent generates a structured JSON object containing essential SEO meta tags. This includes the title, description, and various Open Graph and Twitter card elements, all tailored to enhance online visibility. This streamlined process enables bloggers to focus on content quality while ensuring compliance with SEO best practices.


## Getting Started

To get started, make sure you have cloned the **SEO Meta Tags Generator**. Follow [Create From Templates](/en-us/create-from-templates/) to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name       | Description                                    | Instruction                                                                                |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Blog Outline      | The structure of the blog post                 | Provide a detailed outline that reflects the main topics and subtopics of your post.       |
| Blog Introduction | An introductory paragraph for the blog post    | Write a concise paragraph (2-3 sentences) summarizing the main theme of the post.          |
| Image URL         | URL of the featured image                      | Enter a direct URL link to the image you want to use for visual representation.            |
| Writing Tone      | The desired tone for the title and description | Specify a tone such as 'exciting', 'informative', or 'friendly'; be descriptive if needed. |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Blog Outline**: Blog Title: How to Talk to AI: Advanced Prompt Engineering Techniques, Sections:1. Shot-based prompting, 2. Chain-of-Thought Prompting, 3. ReAct Prompting, 4. Meta Prompting
- **Blog Introduction**: Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses.
- **Image URL**: https://cdn.prod.website-files.com/...Prompt%20Engineering%20Techniques%20FAI.png
- **Writing tone**: Informative

### Sample Output

```
{
  "title": "Unlock Advanced Prompt Engineering Techniques for AI Interactions",
  "keywords": ["prompt engineering", "AI interactions", "advanced techniques", "shot-based prompting", "chain-of-thought prompting", "ReAct prompting", "meta prompting"],
  "description": "Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses.",
  "author": "",
  "og:url": "",
  "og:type": "article",
  "og:image": "https://cdn.prod.website-files.com/66c435ec15ed715aec9ee3fe/67289cdbea239be84a463779_Prompt%20Engineering%20Techniques%20FAI.png",
  "og:title": "Unlock Advanced Prompt Engineering Techniques for AI Interactions",
  "og:site_name": "",
  "og:description": "Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses.",
  "twitter:card": "summary_large_image",
  "twitter:image": "https://cdn.prod.website-files.com/66c435ec15ed715aec9ee3fe/67289cdbea239be84a463779_Prompt%20Engineering%20Techniques%20FAI.png",
  "twitter:title": "Unlock Advanced Prompt Engineering Techniques for AI Interactions",
  "twitter:creator": "",
  "twitter:description": "Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses."
}
```

## Tips of Effective Configuration

- **Be Specific with Outlines**: More detailed outlines yield better results as the agent can understand your content structure clearly.
- **Use Clear Introductions**: A precise introduction helps the AI grasp the main idea of your blog post, leading to more relevant meta tags.
- **Check the Tone**: Ensure that the tone specified aligns with your content’s goal to maintain consistency in voice and branding.
- **Validate Image URLs**: Always check the URL for the featured image to confirm it links correctly to ensure it can be fetched by platforms supporting OG tags.
- **Iterate on Inputs**: Don’t hesitate to refine inputs and re-run the agent to achieve the best possible outcome.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!
