---
metatitle: SEO元標籤生成器 | 代理模板 | FabriXAI 用戶指南
description: 這是一份關於「SEO元標籤生成器」的用戶指南，這是一個旨在根據提供的提綱和引言創建優化的SEO元標籤的工具。
lang: zh-HK
permalink: /agent-templates/seo-meta-tags-generator
---

# SEO元標籤生成器 (SEO Meta Tags Generator)

**SEO元標籤生成器**是一個專門的AI代理，旨在幫助內容創作者優化其博客文章以符合搜索引擎。通過提供提綱和引言，連同一張特色圖片，該代理生成一個結構化的JSON對象，包含關鍵的SEO元標籤，包括標題、描述和各種Open Graph及Twitter卡元素，所有這些都是為了增強在線可見性。這一精簡的過程使博客作者能夠專注於內容質量，同時確保遵循SEO最佳實踐。


## 快速開始  

開始使用前，請確保已經複製**SEO元標籤生成器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Blog Outline      | 博客文章的結構                     | 提供反映您文章主要主題和子主題的詳細提綱。                     |
| Blog Introduction | 博客文章的引言段落                | 撰寫一段簡潔的段落（2-3 句話）總結文章的主要主題。            |
| Image URL         | 特色圖片的 URL                    | 輸入您希望用作視覺表示的圖片的直接 URL 連結。                   |
| Writing Tone      | 標題和描述所需的語氣              | 指定一種語氣，如“激動人心”、“信息豐富”或“友善”；如果需要，請具體說明。 |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Blog Outline**: Blog Title: How to Talk to AI: Advanced Prompt Engineering Techniques, Sections:1. Shot-based prompting, 2. Chain-of-Thought Prompting, 3. ReAct Prompting, 4. Meta Prompting
- **Blog Introduction**: Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses.
- **Image URL**: https://cdn.prod.website-files.com/...Prompt%20Engineering%20Techniques%20FAI.png
- **Writing tone**: Informative

### 輸出範例

```
{
  "title": "Unlock Advanced Prompt Engineering Techniques for AI Interactions",
  "keywords": ["prompt engineering", "AI interactions", "advanced techniques", "shot-based prompting", "chain-of-thought prompting", "ReAct prompting", "meta prompting"],
  "description": "Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses.",
  "author": "",
  "og:url": "",
  "og:type": "article",
  "og:image": "https://cdn.prod.website-files.com/66c435ec15ed715aec9ee3fe/67289cdbea239be84a463779_Prompt%20Engineering%20Techniques%20FAI.png",
  "og:title": "Unlock Advanced Prompt Engineering Techniques for AI Interactions",
  "og:site_name": "",
  "og:description": "Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses.",
  "twitter:card": "summary_large_image",
  "twitter:image": "https://cdn.prod.website-files.com/66c435ec15ed715aec9ee3fe/67289cdbea239be84a463779_Prompt%20Engineering%20Techniques%20FAI.png",
  "twitter:title": "Unlock Advanced Prompt Engineering Techniques for AI Interactions",
  "twitter:creator": "",
  "twitter:description": "Discover the key techniques of prompt engineering to enhance your interactions with AI. Learn how to craft effective prompts for clear and relevant responses."
}
```

## 有效配置的提示

- **具體化提綱**：更詳細的提綱能獲得更好的結果，因為代理可以清楚地理解您的內容結構。
- **使用清晰的引言**：精確的引言有助於 AI 把握您的博客文章的主要思想，從而生成更相關的 meta 標籤。
- **檢查語氣**：確保指定的語氣與您的內容目標一致，以保持聲音和品牌的一致性。
- **驗證圖片 URL**：始終檢查特色圖片的 URL，以確認其正確連結，確保可以被支持 OG 標籤的平台抓取。
- **迭代輸入**：不要猶豫改進輸入並重新運行代理，以獲得最佳的結果。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！