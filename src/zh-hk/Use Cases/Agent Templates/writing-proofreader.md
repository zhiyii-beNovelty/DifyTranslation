---
metatitle: 寫作校對工具 | 代理模板 | FabriXAI 用戶指南
description: 這是一個用戶指南，用於配置和使用「寫作校對工具」以潤色給定的文本。
lang: zh-HK
permalink: /agent-templates/writing-proofreader
---

# 寫作校對工具 (Writing Proofreader)

**寫作校對工具**旨在對您的書面內容提供專業級的反饋。通過評估語法、結構和內容，它幫助您改進文本，以增強清晰度和吸引力。無論您是在撰寫書評、文章還是任何形式的書面表達，這個代理都提供詳細的改進建議，成為任何級別作家的珍貴工具。


## 快速開始  

開始使用前，請確保已經複製**寫作校對工具**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Target of the writing     | 指定文本的焦點或目標                         | 包括一個簡短的聲明，說明您寫作的目的（例如，“書評”，“文章”）     |
| The text for proofreading | 輸入您想要校對的文本                       | 提供詳細的文本以便評估，理想上字數在 300-1000 字之間，以便獲得全面的反饋 |
### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Target of the writing**: A book review of the book Harry Potter and the Philosopher's Stone
- **The text for proofreading**: J.K. Rowling's Harry Potter and the Philosopher's Stone is a captivating debut that introduces readers to the wizarding world and the boy who would become one of literature's most iconic heroes. The story follows young Harry Potter, an ordinary boy who discovers on his eleventh birthday that he is in fact a wizard. Whisked away to Hogwarts School of Witchcraft and Wizardry, Harry embarks on an extraordinary journey, making new friends, learning magic, and uncovering the truth about his past. Rowling's world-building is nothing short of magical. From the bustling Diagon Alley to the enchanting Great Hall, every setting is brought to life with meticulous detail and a sense of wonder. The author seamlessly blends the mundane and the supernatural, creating a fantastical realm that feels both foreign and familiar.

### Sample Output

```
Feedback:
Grammar:
The grammar in the text is generally correct, with no glaring errors. However, there are a few areas where punctuation could be improved for better readability. For example, the sentence “The story follows young Harry Potter, an ordinary boy who discovers on his eleventh birthday that he is in fact a wizard” could benefit from a comma after “in fact.”

Structure:
The structure of the text is clear and logical. It begins with an introduction to the book and its significance, followed by a brief summary of the plot, and concludes with an analysis of the author’s world-building skills. However, the transitions between sentences and paragraphs could be smoother to enhance the flow of the review.

Content:
The content effectively meets the target of a book review. It provides an overview of the plot and highlights key elements such as world-building. However, it could benefit from a more critical analysis of the book’s strengths and weaknesses. For instance, mentioning character development, pacing, or thematic elements would provide a more comprehensive review.

Revised Text:
J.K. Rowling’s Harry Potter and the Philosopher’s Stone is a captivating debut that introduces readers to the wizarding world and the boy who would become one of literature’s most iconic heroes. The story follows young Harry Potter, an ordinary boy who discovers on his eleventh birthday that he is, in fact, a wizard. Whisked away to Hogwarts School of Witchcraft and Wizardry, Harry embarks on an extraordinary journey, making new friends, learning magic, and uncovering the truth about his past.

Rowling’s world-building is nothing short of magical. From the bustling Diagon Alley to the enchanting Great Hall, every setting is brought to life with meticulous detail and a sense of wonder. The author seamlessly blends the mundane and the supernatural, creating a fantastical realm that feels both foreign and familiar.

While the book excels in creating an immersive world, it also shines in character development. Harry, along with his friends Hermione Granger and Ron Weasley, evolves throughout the story, facing challenges that test their courage and friendship. The pacing is well-balanced, keeping readers engaged from start to finish. Additionally, the themes of bravery, friendship, and the battle between good and evil are woven seamlessly into the narrative, making it not just a children’s book but a story with universal appeal.

In conclusion, Harry Potter and the Philosopher’s Stone is a masterful introduction to a series that has captivated millions. Rowling’s ability to create a rich, immersive world and relatable characters makes this book a must-read for both young and adult readers.
```

## 有效配置的建議

- **明確您的目的**：清晰定義您寫作的目標，為反饋提供指導。
- **提供全面的文本**：您提供的內容越多，反饋將越詳細；目標字數在 300-1000 字之間。
- **使用適當的格式**：確保您的文本保持清晰的段落和結構，以便進行更好的分析。
- **根據反饋進行迭代**：檢查代理提供的建議，並細化您的文本，然後再次通過代理運行以獲得進一步改進。
- **嘗試不同的模型選項**：如果您對輸出不滿意，請嘗試不同的 AI 模型，以了解哪一種與您的寫作風格最相符。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！
