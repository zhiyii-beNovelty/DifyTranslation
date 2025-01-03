---
metatitle: 改寫代理 | 代理模板 | FabriXAI 用戶指南
description: 這是針對「改寫代理」的用戶指南，旨在協助用戶以特定語氣改寫文本，同時保持核心含義。
lang: zh-HK
permalink: /agent-templates/paraphrasing-agent
---

# 改寫代理 (Paraphrasing Agent)

**改寫代理**是一種先進的AI工具，專門用於轉變文本，同時保持其原始意義。這個代理旨在專業寫作，可以讓用戶指定想要傳達的語氣，例如充滿活力、正式或有說服力。通過專注於所期望的風格，該代理以獨特而準確的方式重新措辭內容，確保清晰度和讀者的參與。不論您是為行銷內容進行精緻調整、編寫社交媒體消息，還是單純想要提升可讀性，轉述代理為您的所有轉述需求提供無縫的解決方案。


## 快速開始  

開始使用前，請確保已經複製**改寫代理**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Writing Tone               | 您希望使用的具體語氣             | 請指定單一語氣，例如「充滿活力」、「正式」或「有說服力」。              |
| The text to be Paraphrased | 需要轉述的原始文本               | 輸入您希望轉述的完整文本。                         |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Writing Tone**: Energetic
- **The text to be Paraphrased**: The CV/Resume Analyzer is an advanced tool designed to evaluate and grade job applicants’ resumes based on specific job requirements. It meticulously examines various aspects of the CV, including relevant work experience, technical/functional skills, educational background, and soft skills. The tool provides a detailed analysis and assigns grades on a scale of 1-10 for each criterion. Additionally, it offers an overall impression of the CV, highlighting strengths and areas for improvement. This comprehensive assessment helps recruiters and hiring managers make informed decisions by objectively comparing candidates’ qualifications against the job requirements.

### 輸出範例

```
Get Ready to Elevate Your Job Search with Our CV/Resume Analyzer!

Imagine having a superpower that helps you land your dream job by giving your resume a thorough makeover! Our cutting-edge CV/Resume Analyzer is here to revolutionize the way you approach job applications. This game-changing tool is designed to scrutinize every detail of your CV, from your impressive work experience to your technical skills, education, and even your soft skills. It's like having a personal career coach, but way more efficient!

Here's what you can expect from our CV/Resume Analyzer:

A detailed breakdown of your CV, highlighting what you're doing right and what you can improve on
A grade from 1-10 for each criterion, so you know exactly where you stand
An overall impression of your CV, complete with actionable advice to take your job search to the next level
By using our CV/Resume Analyzer, you'll be able to make a stronger impression on recruiters and hiring managers, and increase your chances of getting hired. It's time to take control of your job search and get the results you deserve!
```

## 有效配置的提示

- **明確語氣**：精確指定語氣，因為這會影響文本的轉述方式，確保與您的意圖相符。
- **保持輸入簡潔**：雖然該代理可以處理較長的文本，但較短的輸入（最多 300 字）可促進更清晰的重新措辭。
- **嘗試不同語氣**：不要猶豫，嘗試各種語氣，以查看哪種最適合您的文本背景。
- **檢查輸出**：在收到轉述文本後，與原始文本進行比較，以確保準確性和風格符合您的期待。
- **迭代**：如果輸出不符合您的要求，請修改您的輸入或語氣規範，然後再次運行代理以獲得改進的結果。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！
