---
metatitle: 關鍵詞識別器 | 代理模板 | FabriXAI 用戶指南
description: 這是一份「關鍵詞識別器」的用戶指南，用於從給定文本中提取關鍵主題和話題。
lang: zh-HK
permalink: /agent-templates/keywords-identifier
---

# 關鍵詞識別器

**關鍵詞識別器**是一款智能代理，專為從給定文本中提取關鍵主題和話題而設計。通過分析內容，該工具識別並排序最相關的關鍵詞或標籤，這些關鍵詞概括了文本討論的核心思想和主題。此工具對於內容創作者、研究人員和數字營銷人員特別有用，他們需要快速從大量文本中提取信息。該工具確保提取的關鍵詞簡潔且準確地反映文本內容，並根據重要性提供排名列表。


## 快速開始  

開始使用前，請確保已經複製**關鍵詞識別器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。  


## 配置指南  

### 使用者輸入  

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Text                   | 您希望提取關鍵詞的內容                                      | 提供清晰的文本進行分析。                      |
| Number of Keywords     | 您希望提取的關鍵詞或標籤的最大數量                          | 指定一個數字以限制結果（例如 5、10 等）。            |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Text**: Social media marketing is essential for businesses today. It helps brands connect with their audience, increase visibility, and drive engagement. By leveraging platforms like Facebook, Instagram, and Twitter, companies can create targeted campaigns that resonate with their customers.
- **Number of Keywords**: 5

### 輸出範例

```
Based on the text, I have extracted the top 5 keywords/tags that capture the main topics and themes. Here they are:

1. **Social Media Marketing**: This is the primary topic of the text, and it's the most relevant keyword/tag.
2. **Branding**: The text mentions connecting with the audience, increasing visibility, and driving engagement, all of which are related to building a brand.
3. **Digital Marketing**: This keyword/tag captures the online aspect of marketing, which is a key theme in the text.
4. **Targeted Campaigns**: The text highlights the importance of creating campaigns that resonate with customers, which implies a focus on targeted marketing.
5. **Online Presence**: This keyword/tag reflects the idea that businesses need to establish an online presence to connect with their audience and achieve their marketing goals.

These keywords/tags capture the essence of the text and provide a concise summary of the main topics and themes.
```

## 有效配置的提示

- **提供清晰的文本**: 確保您提供的文本結構良好，並與您希望提取的關鍵詞相關，以獲得更好的結果。
- **限制關鍵詞數量**: 指定合理的關鍵詞數量，避免過多輸出，聚焦於最重要的主題。
- **使用相關上下文**: 如果可能，提供輔助文件以提供上下文信息，增強關鍵詞提取的準確性。
- **測試各種文本**: 嘗試不同風格和主題的文本，查看代理在多樣化內容中的表現。
- **定期審核輸出**: 定期評估提取的關鍵詞的相關性和準確性，並根據需要調整輸入文本或設置。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！
