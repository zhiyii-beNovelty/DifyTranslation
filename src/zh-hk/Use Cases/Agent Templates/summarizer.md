---
metatitle: 總結工具 | 代理模板 | FabriXAI 用戶指南
description: 本指南介紹如何有效配置和使用「總結工具」。
lang: zh-HK
permalink: /agent-templates/summarizer
---

# 總結工具 (Summarizer)

**總結工具**旨在將冗長的文本濃縮為簡潔的摘要，同時保留原始材料的核心意義和上下文。用戶可以指定寫作語氣，設立字數限制，並提供反饋，以進一步完善摘要。這種靈活性使得摘要能夠滿足特定需求，無論是用於休閒閱讀還是正式分析。您可以根據自己的喜好自定義輸出風格，這使它成為有效處理大量信息的寶貴工具。


## 快速開始  

開始使用前，請確保已經複製**總結工具**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Text to be summarized         | 您希望摘要的原始文本。                             | 提供明確和連貫的段落以便進行摘要。                    |
| Writing tone of the summary   | 摘要的期望語氣（例如，休閒、正式）。                 | 指定適合您觀眾的語氣。                              |
| Word Limit                    | 摘要的最大字數。                                   | 設定字數限制在50到100字之間。                       |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Writing tone**: Casual
- **Word limit**: 80
- **Text**: The rapid advancement of artificial intelligence (AI) technology in recent years has brought both exciting opportunities and significant challenges. On one hand, AI has enabled breakthroughs in fields like healthcare, transportation, and scientific research, augmenting and empowering human capabilities in remarkable ways. Automated systems powered by AI are increasing efficiency, unlocking new insights, and even saving lives. However, the rise of AI also raises important ethical and societal questions. As AI systems become more sophisticated and autonomous, there are growing concerns about issues like algorithmic bias, privacy, job displacement, and the existential risks of advanced AI. Thoughtful governance and careful development of AI will be critical to ensuring these technologies are deployed responsibly and equitably to benefit humanity as a whole. Overall, the transformative potential of AI is both tantalizing and fraught, requiring a delicate balance between innovation and prudent consideration of the technology's wide-ranging impacts.

### 輸出範例

```
AI's fast progress is super exciting but also comes with some big challenges. It's revolutionizing healthcare, transportation, and research by making systems smarter and more efficient. However, with these advancements come concerns like bias, privacy issues, job loss, and even existential risks. To really benefit from AI, we'll need smart rules and careful development to balance innovation with the tech's broad impacts. Overall, AI's potential is amazing but needs to be handled thoughtfully.
```

## 有效配置的提示

- **明確定義參數**：有效指定寫作語氣和字數限制，以確保您的摘要符合預期。
- **使用簡明的文本**：原始文本越清晰簡潔，摘要的質量就越好。
- **完善您的輸入**：如果輸出不是您預期的，請調整寫作語氣或簡化所提供的文本以提高清晰度。
- **測試多種語氣**：嘗試不同的寫作語氣，以找到最適合您的觀眾需求的風格。
- **查看反饋**：使用代理的反饋機制，根據之前的輸出進一步完善您的摘要。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！

