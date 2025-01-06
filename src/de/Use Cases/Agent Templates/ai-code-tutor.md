---
metatitle: AI-Code-Tutor | Agentenvorlagen | FabriXAI Benutzerleitfaden
description: Dies ist ein Benutzerleitfaden zur Konfiguration und Verwendung des AI-Code-Tutors, eines Agenten, der sich auf Programmiers-Erklärungen spezialisiert hat.
lang: de-DE
permalink: /agent-templates/ai-code-tutor
---

# AI Code Tutor

Der **AI Code Tutor** ist ein intelligenter Assistent, der entwickelt wurde, um Benutzern das Verständnis von Programmiercode zu erleichtern. Durch die Analyse der vom Benutzer bereitgestellten Codeausschnitte bietet der Agent einen umfassenden Überblick darüber, was der Programmiercode bewirkt. Anschließend folgt eine detaillierte, schrittweise Erklärung jeder einzelnen Komponente. Darüber hinaus werden verwandte Programmierthemen für weiterführendes Lernen vorgeschlagen, sodass die Benutzer eine stärkere Grundlage in Programmierkonzepten aufbauen können. Egal, ob Sie Anfänger sind oder Ihre Fähigkeiten verbessern möchten, der AI Code Tutor führt Sie durch die verschiedenen Aspekte von Programmiersprachen und -konzepten.


## Erste Schritte

Um zu beginnen, stellen Sie sicher, dass Sie den **AI Code Tutor** geklont haben. Folgen Sie [Aus Vorlagen erstellen](/en-us/create-from-templates/), um Ihren KI-Agenten zu klonen und zu konfigurieren.


## Konfigurationsanleitungen

### Nutzer-Eingaben

Diese KI-Agenten benötigen keine Eingabefelder.

### Wissen

Sie können `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten einen maßgeschneiderten Kontext bereitzustellen, der Ihren spezifischen Anforderungen entspricht.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Falls erforderlich, verfeinern Sie Ihre Eingabeaufforderungen für maßgeschneiderte Ausgaben.

::: tip
Für detailliertere Anweisungen zur Konfiguration eines KI-Agents, bitte beachten Sie [KI-Agent konfigurieren](/en-us/configure-ai-agent/)
:::


## Beispiel Eingaben und Ausgaben

### Beispielhafte Eingaben

```
Der Code-Block:

import time
t = time.localtime()
current_time = time.strftime("%H:%M:%S", t)
print(current_time)
```

### Beispielausgabe

```
Übersicht

Dieser Codeblock ruft die aktuelle Zeit ab und gibt sie im Format "HH:MM:SS" aus. Er verwendet das time-Modul in Python, um dies zu erreichen.

Schritt-für-Schritt-Erklärung

import time: Diese Zeile importiert das time-Modul, das verschiedene zeitbezogene Funktionen bereitstellt. Durch das Importieren des Moduls können wir seine Funktionen in unserem Code verwenden. Hinweis: Der Rückwärtsschrägstrich (\) am Ende der Zeile ist ein Zeilenfortsetzungszeichen in Python, das es uns ermöglicht, eine lange Zeile aus Gründen der Lesbarkeit in mehrere Zeilen aufzubrechen.
t = time.localtime(): Diese Zeile ruft die aktuelle Zeit als struct_time-Objekt ab, welches ein tupelähnliches Objekt ist, das die aktuelle Zeit in einem spezifischen Format enthält. Die localtime() Funktion gibt die lokale Zeit zurück, also die Zeit in der lokalen Zeitzone des Systems.
current_time = time.strftime("%H:%M:%S", t): Diese Zeile formatiert die aktuelle Zeit in eine Zeichenkette im Format "HH:MM:SS". Die strftime() Funktion nimmt zwei Argumente: eine Formatzeichenkette und ein Zeitobjekt. Die Formatzeichenkette "%H:%M:%S" bestimmt das Format der Ausgabezeichenkette:
%H: Stunde (24-Stunden-Format) als Dezimalzahl mit führenden Nullen.
%M: Minute als Dezimalzahl mit führenden Nullen.
%S: Sekunde als Dezimalzahl mit führenden Nullen.
print(current_time): Diese Zeile gibt die formatierte aktuelle Zeit in der Konsole aus.
Verwandte Themen

Um Ihr Verständnis dieses Codes zu vertiefen, möchten Sie möglicherweise die folgenden Themen erkunden:

Zeitzonen: Die localtime() Funktion gibt die lokale Zeit zurück, aber was, wenn Sie mit Zeitzonen arbeiten möchten? Sie können das timezone-Modul verwenden, um mit Zeitzonen zu arbeiten.
Datums- und Zeitformatierung: Die strftime() Funktion ist nur eine Möglichkeit, Daten und Zeiten zu formatieren. Sie können auch das datetime-Modul verwenden, um mit Daten und Zeiten auf eine objektorientiertere Weise zu arbeiten.
Fehlerbehandlung: Was, wenn das time-Modul nicht verfügbar ist oder die localtime() Funktion fehlschlägt? Sie können try-except-Blöcke verwenden, um Fehler und Ausnahmen zu handhaben.
Zeichenkettenformatierung: Die strftime() Funktion verwendet eine Formatzeichenkette, um die Ausgabezeichenkette zu formatieren. Sie können auch die format() Methode oder f-Strings verwenden, um Zeichenketten in Python zu formatieren.
Einige empfohlene Ressourcen, um mehr über diese Themen zu lernen, umfassen:

Die offizielle Python-Dokumentation für das time-Modul: https://docs.python.org/3/library/time.html
Die offizielle Python-Dokumentation für das datetime-Modul: https://docs.python.org/3/library/datetime.html
W3Schools' Python-Tutorial zu Zeit und Datum: https://www.w3schools.com/python/python_datetime.asp
Real Python's Tutorial zur Fehlerbehandlung: https://realpython.com/python-exceptions/
```

## Tipps zur effektiven Konfiguration

- **Verstehen Sie den Zweck des Agenten**: Machen Sie sich mit der Funktionsweise des KI-Code-Tutors vertraut, einschließlich wie er Code analysiert und erklärt, um seine Fähigkeiten optimal zu nutzen.
- **Stellen Sie klare Codeausschnitte bereit**: Achten Sie darauf, dass der von Ihnen eingegebene Code deutlich und vollständig ist, um präzise Erklärungen zu erhalten.
- **Nutzen Sie verwandte Themen**: Behalten Sie die vorgeschlagenen verwandten Themen im Auge, um Ihr Verständnis von Programmierkonzepten zu vertiefen und Ihre Programmierfähigkeiten zu verbessern.
- **Experimentieren Sie mit verschiedenen Codebeispielen**: Probieren Sie unterschiedliche Programmiersprachen und Strukturen aus, um die Vielseitigkeit und das Wissen des Agenten zu erkunden.
- **Verfeinern Sie Ihre Anfragen**: Wenn die Erklärungen nicht detailliert genug sind, versuchen Sie, mehr Kontext bereitzustellen oder spezifische Fragen zum Code zu stellen.


## Verwandte Artikel
Erkunden Sie weiter unsere Sammlung von [Agentenvorlagen](/en-us/agent-templates/), um weitere Ideen für den Einsatz von KI-Agenten zu entdecken!