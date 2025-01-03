---
metatitle: 程式碼轉換器 | 代理模板 | FabriXAI 用戶指南  
description: 這是一份「程式碼轉換器」的用戶指南，該代理可協助將程式碼從一種程式語言轉換為另一種語言，同時確保功能完整性。
lang: zh-HK
permalink: /agent-templates/code-convertor
---

# 程式碼轉換器（Code Convertor）

**程式碼轉換器**是一個AI代理，專為幫助程式設計師將程式碼從一種程式語言轉換為另一種而設計。通過指定初始程式語言和目標程式語言，以及需要轉換的程式碼，使用者可以依靠該代理進行準確的轉換。代理保證程式碼功能保持完整，同時在轉換過程中於程式碼中添加註解以突出任何重要的更改。如果轉換無法完成，代理將解釋原因。這使得程式碼轉換器成為開發者在不同程式語言間工作的寶貴工具。


## 快速開始  

開始使用前，請確保已經複製**程式碼轉換器**範本。請參考 [從模板創建](/zh-hk/create-from-templates/) 進行複製與配置。 



## 配置指南  

### 使用者輸入

| 標籤名稱               | 描述                                                     | 使用指引                                   |  
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |  
| Initial Language | 輸入程式碼的程式語言。                                    | 指定一種語言，例如 Python、Java、C++ 等。 |
| Final Language   | 輸出程式碼的程式語言。                                    | 選擇一種與初始語言不同的語言進行轉換。   |
| Code             | 需要轉換的實際程式碼。                                    | 提供符合初始語言語法的完整程式碼片段。   |

### 知識  

您可以上傳 `.pdf` 或 `.txt` 文件，為代理提供符合您需求的客製化內容。  

### AI模型  

預設模型為 *Llama 3.1 8B Instruct*，但您也可以探索其他支持的AI模型。如有需要，調整提示內容以獲得更具針對性的輸出。  

::: tip  
有關配置AI代理的詳細說明，請參考 [配置AI代理](/zh-hk/configure-ai-agent/) 。
:::  


## 輸入與輸出範例

### 輸入範例

- **Initial Language**: Python
- **Final Language**: C
- **Code**: from datetime import datetime\nnow = datetime.now()\ncurrent_time = now.strftime("%H:%M:%S")\nprint("Current Time =", current_time)

### 輸出範例

```
#include <stdio.h>
#include <time.h>

int main() {
    time_t now;
    struct tm *current_time;

    // Get the current time
    time(&now);
    current_time = localtime(&now);

    // Format the time as HH:MM:SS
    char time_str[9];
    strftime(time_str, sizeof(time_str), "%H:%M:%S", current_time);

    // Print the current time
    printf("Current Time = %s\n", time_str);

    return 0;
}
```

## 有效配置的提示

- **明確程式碼的目的**：確保清楚描述程式碼的用途，幫助代理理解上下文。
- **保持簡單**：使用簡單的範例，避免過於複雜的程式碼，以確保轉換準確。
- **檢查您的輸入**：在提交之前，仔細檢查程式語言和程式碼片段是否格式正確。
- **測試輸出**：收到輸出程式碼後，在目標語言的環境中編譯並運行，以確保功能正常。
- **明智地使用註解**：如果您上傳的程式碼中帶有註解，請確保註解簡潔且相關，以便更好地進行轉換。


## 相關文章

繼續探索我們的 [代理模板庫](/zh-hk/agent-templates/)，發現更多AI代理的實用範例！
