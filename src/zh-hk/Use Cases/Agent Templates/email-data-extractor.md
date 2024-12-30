---
metatitle: 郵件資料提取器 | 代理模板 | FabriXAI 用戶指南
description: 這是一份「郵件資料提取器」的用戶指南，用於專業分析電子郵件並提取相關信息。
lang: zh-HK
permalink: /agent-templates/email-data-extractor
---

# 郵件資料提取器 (Email Data Extractor)

**郵件資料提取器**是一款專業的AI工具，專為分析電子郵件內容並根據特定數據字段提取相關信息而設計。該工具使用結構化的JSON格式處理郵件文本，識別出關鍵元素，例如發件人姓名、主題和聯繫電話等。當某個數據字段無法找到時，提取工具會自動分配值為"N/A"。此功能確保對結構化和非結構化電子郵件內容進行全面輸出，使其成為業務通信分析和數據管理的理想工具。


## 快速開始  

開始使用前，請確保已經複製**郵件資料提取器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Data Fields  | 您希望從電子郵件中提取數據的字段列表                     | 提供與電子郵件數據相關的結構化字段名稱                                |
| Mail Content | 需要分析的電子郵件內容                                  | 提交完整的郵件正文，確保內容清晰簡潔；如有需要，請包含郵件標頭部分。 |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Data Fields**: Subject, Sender Name, Sender Role, Company Name, Phone Number
- **Mail Content**: Subject: Opportunity for Strategic Partnership. Dear Jane, I hope this email finds you well. My name is John Smith, and I am the Business Development Manager at Acme Software Solutions, a leading provider of enterprise-grade software products. I'm reaching out to you because I believe there could be a great opportunity for our companies to collaborate. Acme Software has developed a suite of powerful tools that help businesses like yours optimize operations, improve productivity, and drive growth. I would welcome the chance to discuss how we may be able to work together. Please let me know if you have any availability for a call this week at 555-1234567 to explore the possibilities. Thank you for your time, and I look forward to speaking with you soon. Best regards, John Smith, Business Development Manager, Acme Software Solutions.

### 輸出範例

```
{
  "Subject": "Opportunity for Strategic Partnership.",
  "Sender Name": "John Smith",
  "Sender Role": "Business Development Manager",
  "Company Name": "Acme Software Solutions",
  "Phone Number": "555-1234567"
}
```


## 有效配置的提示

- **明確定義數據字段**: 清楚列出您需要提取的數據字段，以確保 JSON 輸出準確且相關。
- **使用簡潔的郵件內容**: 保持郵件內容簡單明了；過長或過於複雜的郵件可能會導致數據提取不清晰。
- **定期檢查輸出**: 定期測試您的配置，以確保輸出符合預期，並根據需要進行調整。
- **根據需要調整AI模型**: 如果默認模型不符合您的需求，可以探索其他模型，以獲得更好的性能。
- **使用範例輸入作為指導**: 參考提供的範例輸入，合理結構化您的郵件內容，以獲得最佳的提取效果。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！

