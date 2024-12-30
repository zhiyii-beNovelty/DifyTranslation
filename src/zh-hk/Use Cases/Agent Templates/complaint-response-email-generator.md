---
metatitle: 客訴回覆郵件生成器 | 代理模板 | FabriXAI 用戶指南  
description: 這是一份「客訴回覆郵件生成器」的用戶指南，旨在幫助公司撰寫禮貌且有效的客訴回覆郵件。
lang: zh-HK
permalink: /agent-templates/complaint-response-email-generator
---

# 客訴回覆郵件生成器 (Complaint Response Email Generator)

**客訴回覆郵件生成器**是一款AI工具，專為協助客服代表撰寫禮貌且資訊豐富的客訴回覆郵件而設計。通過利用客戶反饋和公司政策，該工具生成量身定制的回覆，不僅承認客戶的關注，還引導他們了解解決過程。其目標是創造積極的客戶體驗，同時確保遵守公司政策。此工具考慮所需的語氣和風格，確保所有溝通保持專業性和同理心。


## 快速開始  

開始使用前，請確保已經複製**客訴回覆郵件生成器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。  


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Inquiry     | 需要回覆的客戶投訴內容。                                      | 簡要描述問題；如有相關細節，請包含在內，但請保持簡潔，理想情況下控制在兩到三句話內。   |
| Policy      | 與客戶投訴相關的公司政策。                                    | 清楚總結公司的相關政策，涵蓋關鍵點但不含多餘細節。建議控制在一到兩句話內。                |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
::: 


## 輸入與輸出範例

### 輸入範例

- **Inquiry**: Dear Customer Service, I recently purchased a product from your company and it arrived with a defect. I would like to return the item and receive a full refund. The product is still in its original packaging and unused. Please advise on the next steps. Thank you, Temp
- **Policy**: The company's return policy states that customers can return products within 30 days of purchase for a full refund, as long as the item is in its original, unused condition and packaging.

### 輸出範例

```
Here's a draft of a polite and helpful customer reply email:

Subject: Re: Return Request for Defective Product

Dear Temp,

Thank you for reaching out to us about the issue with your recent purchase. We apologize for the inconvenience and appreciate you bringing this to our attention.

We understand that receiving a defective product can be frustrating, and we want to make things right. Our return policy states that we accept returns within 30 days of purchase for a full refund, as long as the item is in its original, unused condition and packaging. Since your product meets these criteria, we're happy to assist you with the return process.

To proceed, please follow these steps:

1. Please reply to this email with your order number, which can be found on your original receipt or in your order confirmation email.
2. We'll provide you with a Return Merchandise Authorization (RMA) number, which you'll need to include on the outside of the return package.
3. Carefully package the item in its original packaging, making sure it's in the same condition as when it was received.
4. Ship the item back to us at the address provided in the RMA email.
5. Once we receive the returned item, we'll process your refund within 3-5 business days.

If you have any questions or concerns during this process, please don't hesitate to reach out. We're here to help and want to ensure that you're completely satisfied with your experience.

Thank you for your patience and cooperation. We appreciate your business and look forward to resolving this issue for you.

Best regards,

[Your Name]
Customer Service Team

This response acknowledges the customer's issue, explains the company's policy, provides clear instructions, and offers additional assistance if needed. It maintains a friendly and helpful tone throughout, while also ensuring that the company's policies are adhered to.
```


## 有效配置的提示

- **保持清晰和簡潔**: 確保客戶投訴和公司政策表述清楚，以幫助工具生成準確的回覆。
- **明確定義語氣**: 準確指定語氣，有助於將回覆調整為符合公司溝通標準的風格。
- **提供具體指示**: 為每個欄位提供具體指導，有助於優化工具生成的回覆以更符合您的期望。
- **測試多種情境**: 嘗試不同的場景，查看工具如何適應各種問題，這有助於確保其在處理多樣化問題時的穩健性。
- **定期更新政策**: 持續更新公司政策內容以反映程序的任何變更，確保客戶查詢得到準確及時的回覆。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！
