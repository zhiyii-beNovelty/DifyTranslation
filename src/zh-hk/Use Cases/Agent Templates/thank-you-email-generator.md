---
metatitle: 感謝郵件生成器 | 代理模板 | FabriXAI 用戶指南
description: 這是配置和使用「感謝郵件生成器」以創建個性化感謝郵件的用戶指南。
lang: zh-HK
permalink: /agent-templates/thank-you-email-generator
---

# 感謝郵件生成器 (Thank you email Generator)

**感謝郵件生成器**幫助您為最近購買的顧客創建個性化的感謝郵件。通過輸入相關的詳細信息，例如顧客的名稱、購買的產品和首選語氣，該代理生成一封熱情而真摯的郵件，表達感謝並突出產品優勢。生成的郵件將涵蓋所有必要元素，以提升顧客滿意度和參與感，使其成為希望與客戶保持良好關係的企業的理想工具。


# 快速開始  

開始使用前，請確保已經複製**感謝郵件生成器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Receiver's Name | 收到郵件的顧客姓名                           | 輸入顧客的全名（名和姓）。                                             |
| Product Name    | 購買的產品名稱                               | 清楚地指定產品的名稱，因為它將被突出顯示。                           |
| Writing Tone    | 郵件應當採用的語氣                           | 指出語氣，如「友好」、「專業」或「有幫助」。                           |
| Product Detail  | 有關產品及其優勢的關鍵細節                   | 提供產品特徵的簡短、清晰描述。                                       |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Receiver's Name**: Sarah Johnson
- **Product Name**: Smart LED Light Bulbs (Pack of 4)
- **Product Details**: These energy-efficient, Wi-Fi-enabled LED bulbs can be controlled remotely via a smartphone app, allowing you to adjust the brightness, color temperature, and scheduling to suit your preferences.
- **Writing Tone**: Helpful and Informative

### 輸出範例

```
Subject: Thank you for your recent purchase of Smart LED Light Bulbs!

Dear Sarah,

We wanted to take a moment to express our heartfelt gratitude for your recent purchase of our Smart LED Light Bulbs (Pack of 4). We're thrilled that you've chosen our product, and we're confident that you'll love the convenience and energy efficiency it brings to your home.

Our Smart LED Light Bulbs are designed to make your life easier, with features like remote control via smartphone app, adjustable brightness and color temperature, and scheduling capabilities. This means you can customize your lighting to suit your needs and preferences, all from the comfort of your own home.

If you have any questions or need further assistance with setting up or using your new bulbs, please don't hesitate to reach out. We're always here to help. Thank you again for your business, and we hope you enjoy your new Smart LED Light Bulbs!

Best regards,
[Your Name]
```


## 有效配置的提示

- **具體明確**：確保所有輸入的詳細信息都是具體而清晰的，以生成準確的郵件。
- **明智選擇語氣**：選擇正確的語氣能顯著影響顧客的感知；選擇符合您品牌聲音的語氣。
- **突出關鍵優勢**：專注於產品的獨特特徵和優勢，以強調其價值。
- **個性化**：始終使用顧客的姓名來建立更個人化的聯繫。
- **測試與完善**：通過不同的輸入進行實驗，觀察變化如何影響郵件輸出，以便持續改善互動。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！
