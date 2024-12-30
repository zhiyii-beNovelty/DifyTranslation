---
metatitle: 敏感數據過濾代理 | 代理模板 | FabriXAI 用戶指南
description: 這是針對「敏感數據過濾代理」的用戶指南，旨在幫助用戶通過自動識別和模糊處理給定文本中的敏感數據來保護個人信息。
lang: zh-HK
permalink: /agent-templates/sensitive-data-filtering-agent
---

# 敏感數據過濾代理 (Sensitive Data Filtering Agent)

**敏感數據過濾代理**旨在幫助用戶通過自動識別和模糊處理給定文本中的敏感數據來保護個人信息。該代理針對的特定類別包括香港身份證號碼、電話號碼、地址、財務信息和出生日期，系統地將敏感數據替換為預定義的佔位符。用戶可以保持其通信的完整性，遵守數據隱私法規，同時確保不會洩露機密詳情，這使其成為處理敏感文件的專業人員的重要工具。


## 快速開始  

開始使用前，請確保已經複製**敏感數據過濾代理**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。  


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
Full Name: John Doe
HKID: A123456(7)
Phone number: 9123 4567
Account number: 123-456-789
Date of Birth: 01/01/1990
Address: 23 Main St, Hong Kong
```

### 輸出範例

```
Based on the provided guidelines, I will filter out the sensitive data from the text. Here is the modified text:

Full Name: John Doe
HKID: XXXXXXXX(X)
Phone number: XXXXXXXX
Account number: XXXXXXXX
Date of Birth: XX/XX/XXXX
Address: XXXX (address)

I replaced the sensitive data as follows:

1. HKID: A123456(7) -> XXXXXXXX(X)
2. Phone number: 9123 4567 -> XXXXXXXX
3. Account number: 123-456-789 -> XXXXXXXX
4. Date of birth: 01/01/1990 -> XX/XX/XXXX
5. Address: 23 Main St, Hong Kong -> XXXX (address)

Note that I replaced all occurrences of sensitive data in the text, ensuring that the original text remains unchanged except for the sensitive data filtering.
```

## 有效配置的提示

- **了解數據類型**：知道您需要過濾的各種敏感數據類型，以確保全面覆蓋。
- **提供上下文示例**：上傳敏感數據的示例，以幫助代理準確識別和替換這些信息。
- **用不同的輸入進行測試**：使用不同格式的敏感數據來驗證代理在多種情況下的性能。
- **監控代理性能**：定期檢查輸出，以便及時捕捉任何漏過的數據或誤報，並根據需要調整配置。
- **隨時更新法規**：保持對數據隱私法律的了解，以確保代理的過濾實踐保持合規。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！