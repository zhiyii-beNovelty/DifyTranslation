---
metatitle: AI程式碼導師 | 代理模板 | FabriXAI 用戶指南  
description: 本指南介紹「AI程式碼導師」的配置與使用方式，該代理專為程式碼解釋與學習而設計。  
lang: zh-HK  
permalink: /agent-templates/ai-code-tutor  
---

# AI程式碼導師 (AI Code Tutor)

**AI程式碼導師**是一個智能助手，專為幫助使用者理解程式碼而設計。透過分析使用者提供的程式碼片段，該代理會先提供程式碼的全面概述，然後逐步解釋每個部分的功能。此外，它還會建議相關的程式設計主題供進一步學習，幫助使用者建立更扎實的程式概念基礎。無論您是初學者還是希望提升技能的程式開發者，AI程式碼導師都能引領您深入了解程式語言和概念的細節。  


## 快速開始  

開始使用前，請確保已經複製**AI程式碼導師**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。  


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
The code block:

import time
t = time.localtime()
current_time = time.strftime("%H:%M:%S", t)
print(current_time)
```

### 輸出範例

```
Overview

This code block retrieves the current time and prints it in the format "HH:MM:SS". It uses the time module in Python to achieve this.

Step-by-Step Explanation

import time: This line imports the time module, which provides various time-related functions. By importing the module, we can use its functions in our code. Note: The backslash (\) at the end of the line is a line continuation character in Python, which allows us to break a long line into multiple lines for readability.
t = time.localtime(): This line retrieves the current time as a struct_time object, which is a tuple-like object containing the current time in a specific format. The localtime() function returns the local time, which is the time in the system's local time zone.
current_time = time.strftime("%H:%M:%S", t): This line formats the current time into a string in the format "HH:MM:SS". The strftime() function takes two arguments: a format string and a time object. The format string "%H:%M:%S" specifies the format of the output string:
%H: Hour (24-hour clock) as a zero-padded decimal number.
%M: Minute as a zero-padded decimal number.
%S: Second as a zero-padded decimal number.
print(current_time): This line prints the formatted current time to the console.
Related Topics

To deepen your understanding of this code, you may want to explore the following topics:

Time zones: The localtime() function returns the local time, but what if you want to work with time zones? You can use the timezone module to work with time zones.
Date and time formatting: The strftime() function is just one way to format dates and times. You can also use the datetime module to work with dates and times in a more object-oriented way.
Error handling: What if the time module is not available or the localtime() function fails? You can use try-except blocks to handle errors and exceptions.
String formatting: The strftime() function uses a format string to format the output string. You can also use the format() method or f-strings to format strings in Python.
Some recommended resources to learn more about these topics include:

The official Python documentation for the time module: https://docs.python.org/3/library/time.html
The official Python documentation for the datetime module: https://docs.python.org/3/library/datetime.html
W3Schools' Python tutorial on time and date: https://www.w3schools.com/python/python_datetime.asp
Real Python's tutorial on error handling: https://realpython.com/python-exceptions/
```

## 有效配置的提示

- **瞭解代理的用途**: 熟悉AI程式碼導師如何分析和解釋程式碼，以充分發揮其功能。
- **提供清晰的程式碼片段**: 確保您輸入的程式碼清晰且完整，以獲取最準確的解釋。
- **利用相關主題**: 注意建議的相關主題，增強對程式概念的理解，提升程式技能。
- **嘗試不同的程式碼範例**: 測試各種程式語言和結構，探索代理的多樣性與知識深度。
- **優化提示內容**: 如果解釋不夠詳細，嘗試提供更多上下文或對程式碼詢問具體問題。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！