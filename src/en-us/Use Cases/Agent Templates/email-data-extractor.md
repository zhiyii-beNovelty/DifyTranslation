---
metatitle: Email Data Extractor | Agent Templates | FabriXAI User Guide
description: This is a user guide for the Email Data Extractor, a professional email analyzer for extracting relevant information from emails.
lang: en-US
permalink: /agent-templates/email-data-extractor
---

# Email Data Extractor

The **Email Data Extractor** is a specialized AI tool designed to analyze email content and extract relevant information based on specific data fields. Utilizing a structured JSON format, the agent processes email text to identify key elements like the sender’s name, subject, and contact number. In cases where a data field is not found, the extractor automatically assigns the value 'N/A'. This ensures a comprehensive output that caters to both structured and unstructured email content, making it ideal for business communication analysis and data management.


## Getting Started

To get started, make sure you have cloned the **Email Data Extractor**. Follow "[Clone from Template](/en-us/clone-from-template)" to clone and configure your AI agent.


## Configuration Instructions

### User Inputs

| Label Name            | Description                                               | Instruction                           |
| ---------------------- | --------------------------------------------------------- | ------------------------------------- |
| Data Fields  | A list of data fields you would like to extract data from the email  | Provide structured names of fields relevant to the email data                                            |
| Mail Content | The content of the email to be analyzed | Submit the complete email body, ensuring it is clear and concise; consider including headers if relevant |

### Knowledge

You can upload `.pdf` or `.txt` files to provide the agent with tailored context that meets your specific requirements.

### AI Models

The default model is *Llama 3.1 8B Instruct*, but you can explore other supported AI models as well. If needed, refine your prompts for more tailored outputs.

::: tip
For more detailed instructions on configuring an AI agent, please refer to [Configure AI Agent](/en-us/configuer-ai-agent/)
:::


## Sample Inputs and Output

### Sample Inputs

- **Data Fields**: Subject, Sender Name, Sender Role, Company Name, Phone Number
- **Mail Content**: Subject: Opportunity for Strategic Partnership. Dear Jane, I hope this email finds you well. My name is John Smith, and I am the Business Development Manager at Acme Software Solutions, a leading provider of enterprise-grade software products. I'm reaching out to you because I believe there could be a great opportunity for our companies to collaborate. Acme Software has developed a suite of powerful tools that help businesses like yours optimize operations, improve productivity, and drive growth. I would welcome the chance to discuss how we may be able to work together. Please let me know if you have any availability for a call this week at 555-1234567 to explore the possibilities. Thank you for your time, and I look forward to speaking with you soon. Best regards, John Smith, Business Development Manager, Acme Software Solutions.

### Sample output

```
{
  "Subject": "Opportunity for Strategic Partnership.",
  "Sender Name": "John Smith",
  "Sender Role": "Business Development Manager",
  "Company Name": "Acme Software Solutions",
  "Phone Number": "555-1234567"
}
```


## Tips of Effective Configuration

- **Define Clear Data Fields**: Clearly outline the data fields you need to extract to ensure accurate and relevant JSON output.
- **Use Concise Email Content**: Keep the email content focused and straightforward; lengthy or complex emails may lead to ambiguous data extraction.
- **Review Output Regularly**: Test your configurations regularly to ensure the output meets your expectations and adjust as necessary.
- **Adjust AI Model as Needed**: If the default model doesn't suit your needs, explore alternative models for potentially better performance.
- **Utilize Sample Inputs for Guidance**: Refer to the sample inputs provided to structure your email content effectively for optimal extraction results.


## Related Articles
Continue exploring our collection of [Agent Templates](/en-us/agent-templates/) to discover more AI agent ideas in action!

