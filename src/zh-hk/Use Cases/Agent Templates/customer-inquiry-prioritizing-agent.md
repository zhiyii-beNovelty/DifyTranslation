---
metatitle: 客戶查詢優先排序代理 | 代理模板 | FabriXAI 用戶指南  
description: 這是一份「客戶查詢優先排序代理」的用戶指南，用於根據緊急程度對客戶查詢進行分類。
lang: zh-HK
permalink: /agent-templates/customer-inquiry-prioritizing-agent
---

# 客戶查詢優先排序代理 (Customer Inquiry Prioritizing Agent)

**客戶查詢優先排序代理**旨在分析客戶查詢並將其分類為五種緊急程度之一：緊急、高、中、低或一般。通過評估每個查詢的緊急性、嚴重性以及可能引發的進一步問題，該代理協助企業有效地優先處理客戶支持請求。這確保了關鍵問題能夠及時處理，從而提升客戶滿意度並提高運營效率。


## 快速開始  

開始使用前，請確保已經複製**客戶查詢優先排序代理**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。  


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Customer Inquiry | 需要分類的客戶查詢文本。 | 輸入內容應為清晰簡潔的查詢描述，建議控制在 200 字以內。重點包括關鍵問題、關注點或請求。 |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
::: 


## 輸入與輸出範例

### 輸入範例

- **Customer Inquiry**: I'm trying to complete an urgent order for a client, but I'm unable to log in to my account on your e-commerce platform. I've been locked out and can't access my order management tools. This is preventing me from fulfilling a time-sensitive order for a major client. I need this resolved immediately as it's causing significant disruption to my business operations.

### 輸出範例

```
Urgent

The customer is unable to log in to their account, which is preventing them from fulfilling a time-sensitive order for a major client. This is causing significant disruption to their business operations and requires immediate attention to resolve. The customer's business is severely impacted, and the issue needs to be addressed quickly to prevent further consequences.
```


## 有效配置的提示

- **具體明確**: 提供詳細的查詢有助於代理更準確地分析其緊急程度。
- **限制長度**: 力求保持查詢簡潔；200 字的長度限制通常可提高分類準確性。
- **使用清晰語言**: 避免使用術語或模糊詞彙，以便代理更好地理解查詢內容。
- **測試不同版本**: 嘗試類似查詢的不同版本，觀察代理的分類結果，最終優化您的輸入。
- **定期更新**: 持續更新知識庫，確保代理以最相關的資訊進行回應。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！