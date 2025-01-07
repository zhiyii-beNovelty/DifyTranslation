---
metatitle: Code Konvertor | Agenten Vorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Code Konvertor Agenten, der beim Konvertieren von Code von einer Programmiersprache in eine andere hilft und dabei die Funktionalität gewährleistet.
lang: de
permalink: /agent-templates/code-convertor
---

# Code-Konverter

Der **Code-Konverter** ist ein KI-Agent, der entwickelt wurde, um Programmierern dabei zu unterstützen, Code von einer Programmiersprache in eine andere zu übertragen. Benutzer müssen lediglich die Quellsprache, die Zielsprache sowie den zu konvertierenden Code angeben. Anschließend führt der Agent präzise Übersetzungen durch und stellt sicher, dass die Funktionalität des Codes erhalten bleibt. Darüber hinaus fügt er Kommentare ein, um wesentliche Änderungen während des Konvertierungsprozesses hervorzuheben. Kann die Konvertierung nicht durchgeführt werden, erklärt der Agent den Grund. Dadurch ist der Code-Konverter ein wertvolles Werkzeug für Entwickler, die mit verschiedenen Programmiersprachen arbeiten FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Code Konvertor Agenten, der beim Konvertieren von Code von einer Programmiersprache in eine andere hilft und dabei die Funktionalität gewährleistet.
lang: de
permalink: /agent-templates/code-convertor
---

# Code-Konverter

Der **Code-Konverter** ist ein KI-Agent, der entwickelt wurde, um Programmierern dabei zu unterstützen, Code von einer Programmiersprache in eine andere zu übertragen. Benutzer müssen lediglich die Quellsprache, die Zielsprache sowie den zu konvertierenden Code angeben. Anschließend führt der Agent präzise Übersetzungen durch und stellt sicher, dass die Funktionalität des Codes erhalten bleibt. Darüber hinaus fügt er Kommentare ein, um wesentliche Änderungen während des Konvertierungsprozesses hervorzuheben. Kann die Konvertierung nicht durchgeführt werden, erklärt der Agent den Grund. Dadurch ist der Code-Konverter ein wertvolles Werkzeug für Entwickler, die mit verschiedenen Programmiersprachen arbeiten möchten.

## Erste Schritte

Um zu beginnen, stellen Sie sicher, dass Sie den **Code-Konverter** geklont haben. Folgen Sie [Aus Vorlagen erstellen](/de/create-from-templates/), um Ihren KI-Agenten zu klonen und zu konfigurieren.

## Anleitungen zur Konfiguration

### Benutzereingaben

| Label-Name        | Beschreibung                                        | Anweisungen                                                                                     |
| ----------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Quellsprache      | Die Programmiersprache des Eingabecodes.            | Geben Sie eine Sprache wie Python, Java, C++, usw. an.                                          |
| Zielsprache       | Die Programmiersprache des Ausgabecodes.             | Wählen Sie eine Sprache zur Konvertierung, die sich von der Quellsprache unterscheidet.        |
| Code              | Der tatsächliche Code, der konvertiert werden muss. | Stellen Sie ein vollständiges Code-Snippet bereit, das der Syntax der Quellsprache entspricht. |

### Wissen

Sie können `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten einen auf Ihre spezifischen Anforderungen zugeschnittenen Kontext bereitzustellen.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Falls nötig, passen Sie Ihre Eingabeaufforderungen an, um spezifische Ergebnisse zu erhalten.

::: Tipp
Für detailliertere Anweisungen zur Konfiguration eines KI-Agenten, siehe [KI-Agent konfigurieren](/de/configuer-ai-agent/)
:::

## Beispiel-Eingaben und Beispiel-Ausgaben

### Beispiel-Eingaben

- **Ausgangssprache**: Python
- **Endsprache**: C
- **Code**: from datetime import datetime\nnow = datetime.now()\ncurrent_time = now.strftime("%H:%M:%S")\nprint("Aktuelle Zeit =", current_time)

### Beispielausgabe

```
#include <stdio.h>
#include <time.h>

int main() {
    time_t now;
    struct tm *current_time;

    // Aktuelle Zeit abrufen
    time(&now);
    current_time = localtime(&now);

    // Zeit im Format HH:MM:SS formatieren
    char time_str[9];
    strftime(time_str, sizeof(time_str), "%H:%M:%S", current_time);

    // Aktuelle Zeit ausgeben
    printf("Aktuelle Zeit = %s\n", time_str);

    return 0;
}
```

## Tipps zur effektiven Konfiguration

- **Klären Sie den Zweck Ihres Codes**: Beschreiben Sie klar, was der Code bewirken soll, um dem Agenten das Verständnis des Kontexts zu erleichtern.
- **Halten Sie es einfach**: Verwenden Sie unkomplizierte Beispiele und vermeiden Sie zu komplexem Code, um eine präzise Konvertierung sicherzustellen.
- **Überprüfen Sie Ihre Eingaben**: Stellen Sie sicher, dass die Programmiersprachen und Code-Snippets korrekt formatiert sind, bevor Sie sie einreichen.
- **Testen Sie die Ausgaben**: Kompilieren und führen Sie den Ausgabecode in der Umgebung der Zielsprache aus, um die Funktionalität zu überprüfen.
- **Setzen Sie Kommentare gezielt ein**: Wenn Sie Code mit Kommentaren hochladen, sollten diese prägnant und relevant sein, um das Verständnis der Konvertierung zu verbessern.

## Verwandte Artikel
