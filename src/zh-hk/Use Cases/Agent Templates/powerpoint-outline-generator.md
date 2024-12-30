---
metatitle: PowerPoint大綱生成器 | 代理模板 | FabriXAI 用戶指南
description: 這是一份關於「PowerPoint 大綱生成器代理」的用戶指南，旨在高效創建針對特定主題的詳細的PowerPoint大綱。
lang: zh-HK
permalink: /agent-templates/powerpoint-outline-generator
---

# PowerPoint大綱生成器 (PowerPoint Outline Generator)

**PowerPoint大綱生成器**是一個強大的工具，旨在幫助用戶為演示文稿創建結構化的提綱。只需提供一個主題、一個簡要描述以及所需的幻燈片數量，該代理即可生成一個詳細的提綱，包括每張幻燈片的標題、要點內容和建議的視覺元素。這確保了用戶可以創建既具資訊性又具視覺吸引力的演示文稿。該生成器簡化了準備過程，使得以專業格式有效地傳達想法變得更加容易。


## 快速開始  

開始使用前，請確保已經複製**PowerPoint大綱生成器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 


## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Topic                    | 演示文稿提綱的主題。                      | 輸入一個清晰簡潔的主題；保持與演示目標相關。 |
| Description of the Topic | 可能增強提綱的主題額外詳細信息。 | 如有必要，提供簡短說明，最好是幾句話。       |
| Number of Slides         | 提綱中應包含的幻燈片總數。        | 輸入一個數字；確保至少包含1張標題幻燈片。          |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Topic**: Sustainable Urban Planning
- **Description of the Topic**: None
- **Number of Slides**: 5

### 輸出範例

```
**Slide 1: Title Slide**

* **Slide Title:** "Sustainable Urban Planning: Building a Greener Future"
* **Content:**
	+ Brief introduction to the topic of sustainable urban planning
	+ Importance of sustainable urban planning in addressing environmental, social, and economic challenges
	+ Overview of the presentation's objectives
* **Visual Elements:**
	+ Image of a green cityscape or a sustainable urban development project
	+ Title font: bold and large, with a green or blue color scheme to convey a sense of sustainability

**Slide 2: Challenges of Urbanization**

* **Slide Title:** "The Challenges of Urbanization"
* **Content:**
	+ Rapid urbanization and its impact on the environment
	+ Overcrowding, traffic congestion, and air pollution
	+ Inequitable distribution of resources and services
	+ Climate change and its effects on urban areas
* **Visual Elements:**
	+ Infographic highlighting the statistics of urbanization and its challenges
	+ Image of a crowded city street or a polluted urban environment

**Slide 3: Principles of Sustainable Urban Planning**

* **Slide Title:** "Principles of Sustainable Urban Planning"
* **Content:**
	+ Equitable access to resources and services
	+ Environmental sustainability and climate resilience
	+ Social equity and community engagement
	+ Economic viability and innovation
* **Visual Elements:**
	+ Diagram illustrating the interconnectedness of the principles
	+ Image of a community garden or a green infrastructure project

**Slide 4: Strategies for Sustainable Urban Planning**

* **Slide Title:** "Strategies for Sustainable Urban Planning"
* **Content:**
	+ Mixed-use development and compact urban form
	+ Green infrastructure and urban forestry
	+ Public transportation and non-motorized transportation
	+ Waste reduction and recycling
* **Visual Elements:**
	+ Infographic highlighting the benefits of each strategy
	+ Image of a mixed-use development or a green infrastructure project

**Slide 5: Conclusion and Future Directions**

* **Slide Title:** "Conclusion and Future Directions"
* **Content:**
	+ Recap of the importance of sustainable urban planning
	+ Call to action for policymakers, urban planners, and citizens
	+ Future directions for sustainable urban planning and development
* **Visual Elements:**
	+ Image of a sustainable urban development project or a green cityscape
	+ Quote or a message from a thought leader in the field of sustainable urban planning
```


## 有效配置的提示

- **具體化**：清楚地定義主題以生成更具針對性的提綱。
- **使用描述欄**：提供額外背景可以幫助代理提供更好的針對性內容。
- **規劃幻燈片**：考慮每張幻燈片上想要的資訊量；根據需要調整數量。
- **檢查和修訂**：生成提綱後，檢查並根據需要進行調整以符合你的演示風格。
- **探索視覺建議**：考慮使用建議的視覺元素來增強參與感和理解度。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！