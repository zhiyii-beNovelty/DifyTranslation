---
metatitle: 問題庫生成器 | 代理模板 | FabriXAI 用戶指南
description: 這是一份用戶指南，介紹如何配置和使用「問題庫生成器」來創建自定義的多選題。
lang: zh-HK
permalink: /agent-templates/question-bank-generator
---

# 問題庫生成器 (Question Bank Generator)

**問題庫生成器**是一個智能代理，旨在根據從提供的網頁內容中提取的特定主題來創建多選題。該代理通過形成涵蓋各種難度級別的問題（從簡單到困難）來評估用戶的理解，確保對關鍵概念的全面評估。它能夠生成單一正確答案和多個正確答案選項，有效地為教育目的量身定制評估。這對於教育工作者、學生和任何希望全面加強知識的人來說都是理想的工具。


## 快速開始  

開始使用前，請確保已經複製**問題庫生成器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Topic               | 生成問題的具體主題                          | 清晰地指定主題；確保其與目標受眾的相關性。                           |
| Webpage URL (Concept Source) | 包含生成問題信息或參考的網頁鏈接          | 提供一個有效的 URL，其內容全面地涵蓋所選主題。                     |
| Number of Questions | 要生成的問題總數                            | 輸入一個數字，表示您希望創建多少問題（例如，1 到 10 之間）。      |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Topic**: Python
- **Webpage URL (Concept Source)**: "https://www.guru99.com/python-tutorials.html"
- **Number of Questions**: 3

### 輸出範例

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

## 有效配置的提示

- **明確您的主題**：確保主題具體且明確，以便生成相關問題。
- **使用可靠的來源**：提供能夠引導到可信且全面的信息的 URL，以提升問題的質量。
- **指定問題數量**：指明合適的問題數量，以保持評估的重點和細節。
- **審查輸出**：檢查生成的問題的清晰度和相關性，以進一步完善您的教育工具。
- **嘗試不同輸入**：根據反饋和結果調整主題和問題數量，以獲得最佳結果。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！