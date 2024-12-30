---
metatitle: 垃圾郵件檢測器 | 代理模板 | FabriXAI 用戶指南
description: 這是配置和使用「垃圾郵件檢測器」理以有效識別垃圾郵件的用戶指南。
lang: zh-HK
permalink: /agent-templates/spam-detector
---

# 垃圾郵件檢測器 (Spam Detector)

**垃圾郵件檢測器**旨在幫助用戶判斷電子郵件或短信是否為垃圾郵件。通過分析消息的各個方面，包括未經請求的內容、可疑鏈接、個人信息請求、急迫的語言和語法錯誤，垃圾郵件檢測器提供了「垃圾郵件」或「非垃圾郵件」的明確判斷。此外，它還提供了簡短的解釋，說明決策背後的原因，幫助用戶理解影響評估的因素。該工具利用定義的指導方針和置信度評級來提高其垃圾郵件檢測的準確性。


## 快速開始  

開始使用前，請確保已經複製**垃圾郵件檢測器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Mail or Text Message | 輸入您想要評估的電子郵件或文本消息。 | 包括消息的完整文本，保持適當的格式設定。以清晰和相關為目標。 |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Mail or Text Message**: Hi, Thanks for working with us. Your bill for $373.75 was due on 28 Aug 2016. If you've already paid it, please ignore this email and sorry for bothering you. If you've not paid it, please do so as soon as possible. To view your bill visit [link] you've got any questions, or want to arrange alternative payment don't hesitate to get in touch. Thanks NJW Limited

### 輸出範例

```
**Verdict:** Not Spam

**Explanation:**

* The email is not unsolicited, as it appears to be a notification about a bill that was due on a specific date.
* There are no suspicious links, but the link provided is likely a legitimate link to view the bill.
* The email does not request any personal information.
* There is a sense of urgency, but it is not threatening. The language is polite and encourages the recipient to take action if they have not paid the bill.
* There are no excessive grammar and spelling errors.

**Confidence Level:** 5

I am very confident in this verdict because the email appears to be a legitimate notification from a company (NJW Limited) about a bill that was due. The language is professional and polite, and the request to view the bill is reasonable. The only potential red flag is the sense of urgency, but it is not aggressive or threatening. Overall, the email seems to be a genuine attempt to notify the recipient about a bill, rather than a spam message.
```


## 有效配置的提示

- **提供清晰的上下文**：確保您的輸入清晰且沒有歧義，以幫助代理進行準確的評估。
- **使用相關樣本**：使用不同類型的消息測試該代理，以評估其能力並相應調整配置。
- **定期更新知識**：保持上傳的文檔最新，以確保代理擁有最佳的評估上下文。
- **監控性能**：檢查輸出中的信心級別，以評估可靠性並進行必要的調整。
- **嘗試不同的模型**：嘗試各種 AI 模型，以確定哪種對您的需求提供最佳結果。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！

