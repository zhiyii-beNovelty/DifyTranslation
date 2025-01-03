---
metatitle: 提示增強器 | 代理模板 | FabriXAI 用戶指南  
description: 這是用於「提示增強器」的用戶指南，一個旨在完善和改進您的LLM提示的AI助手。
lang: zh-HK
permalink: /agent-templates/prompt-enhancer
---

# 提示增強器 (Prompt Enhancer)

**提示增強器**是一個專門從事大型語言模型 (LLMs) 提示工程的AI助手。它允許用戶輸入初始提示或審閱意見，然後根據上下文和清晰度對其進行完善。輸出包括提示的潤飾版本、所做調整的解釋以及進一步增強的建議。這個工具特別適合希望提高其提示的有效性和精確性的用戶，確保與AI模型的更好互動。

## 快速開始  

開始使用前，請確保已經複製**提示增強器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。  


## 配置指南  

### 使用者輸入  

此AI代理不需要額外的輸入欄位。  

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

```
Help me generate a reply email to my client who is complaining about our services.
```

### 輸出範例

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


## 有效配置的小提示

- **具體明確**: 清晰定義您的提示上下文，以有效指導代理。
- **迭代**: 不要猶豫多次完善您的提示以獲得最佳結果。
- **使用範例**: 提供您期望的範例，幫助代理更好地理解您的需求。
- **測試變體**: 嘗試不同的措辭和結構，以查看哪些能產生最佳輸出。
- **反饋循環**: 利用建議進行進一步完善，持續提高您的提示。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！