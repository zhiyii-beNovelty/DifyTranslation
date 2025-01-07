---
metatitle: Prompt Enhancer | Agent Templates | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Prompt Enhancer, einen KI-Assistenten, der entwickelt wurde, um Ihre Eingabeaufforderungen für LLMs zu verfeinern und zu verbessern.
lang: de-DE
permalink: /agent-templates/prompt-enhancer
---

# Prompt Enhancer

Der **Prompt Enhancer** ist ein KI-Assistent, der sich auf Prompt-Engineering für große Sprachmodelle (LLMs) spezialisiert hat. Er ermöglicht es Benutzern, Eingabeaufforderungen oder Feedback-Kommentare einzugeben, die das System dann basierend auf Kontext und Klarheit verfeinert. Die Ausgabe umfasst eine überarbeitete Version der Eingabe, eine Erklärung der vorgenommenen Anpassungen und Vorschläge für weitere Verbesserungen. Dieses Tool ist besonders nützlich für Benutzer, die die Effektivität und Präzision ihrer Eingabeaufforderungen verbessern möchten, um bessere Interaktionen mit KI-Modellen zu FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Prompt Enhancer, einen KI-Assistenten, der entwickelt wurde, um Ihre Eingabeaufforderungen für LLMs zu verfeinern und zu verbessern.
lang: de
permalink: /agent-templates/prompt-enhancer
---

# Prompt Enhancer

Der **Prompt Enhancer** ist ein KI-Assistent, der sich auf Prompt-Engineering für große Sprachmodelle (LLMs) spezialisiert hat. Er ermöglicht es Benutzern, Eingabeaufforderungen oder Feedback-Kommentare einzugeben, die das System dann basierend auf Kontext und Klarheit verfeinert. Die Ausgabe umfasst eine überarbeitete Version der Eingabe, eine Erklärung der vorgenommenen Anpassungen und Vorschläge für weitere Verbesserungen. Dieses Tool ist besonders nützlich für Benutzer, die die Effektivität und Präzision ihrer Eingabeaufforderungen verbessern möchten, um bessere Interaktionen mit KI-Modellen zu gewährleisten.

# Erste Schritte

Um zu beginnen, vergewissern Sie sich, dass Sie den **Prompt Enhancer** geklont haben. Verwenden Sie [Erstellen aus Vorlagen](/de/create-from-templates/), um Ihren KI-Agent zu klonen und zu konfigurieren.

# Konfigurationsanweisungen

## Benutzer-Eingaben

Diese KI-Agenten benötigen keine Eingabefelder.

## Wissen

Sie können „.pdf“- oder „.txt“-Dateien hochladen, um dem Agenten einen maßgeschneiderten Kontext bereitzustellen, der Ihren spezifischen Anforderungen entspricht.

## KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Bei Bedarf können Sie Ihre Eingabeaufforderungen verfeinern, um maßgeschneiderte Ausgaben zu erhalten.

::: tip
Für detailliertere Anleitungen zur Konfiguration eines KI-Agenten, siehe bitte [KI-Agent konfigurieren](/en-us/configure-ai-agent/)
:::

# Beispiel-Eingaben und Ausgaben

## Beispielhafte Eingaben

```
Hilf mir dabei, eine Antwortmail an meinen Kunden zu erstellen, der sich über unsere Dienstleistungen beschwert hat.
```

## Beispielausgabe

````
Verfeinerter Prompt:
Generiere eine Antwort-E-Mail an [{} Kundenname] bezüglich ihrer Beschwerde über [{} Serviceproblem] (z.B. verzögerte Lieferung, schlechter Kundensupport, Abrechnungsfehler).

Erklärung der Verfeinerung:
Die ursprüngliche Aufforderung ist klar, aber es fehlt an Spezifität. Durch das Hinzufügen der Klammern und Beispiele bieten wir mehr Kontext und erleichtern es der KI, eine relevante und einfühlsame Antwort zu generieren.

Vorschläge zur weiteren Verfeinerung:

- Erwägen Sie, mehr Details über die bisherigen Interaktionen des Kunden oder die Kommunikationshistorie hinzuzufügen, um die Antwort anzupassen.
- Sie könnten auch den Ton der E-Mail angeben (z.B. entschuldigend, lösungsorientiert, neutral), um sicherzustellen, dass die KI eine Antwort generiert, die Ihrem gewünschten Ansatz entspricht.

Beispiel mit zusätzlicher Verfeinerung:
Generiere eine Antwort-E-Mail an [{} Kundenname] bezüglich ihrer Beschwerde über [{} Serviceproblem] (z.B. verzögerte Lieferung, schlechter Kundensupport, Abrechnungsfehler), mit einem Ton von [{} Ton] (z.B. entschuldigend, lösungsorientiert, neutral).

Antwort-E-Mail:
Betreff: AW: [{} Serviceproblem] - Entschuldigung und Lösung

Sehr geehrte Frau/Herr [{} Kundenname],

Ich schreibe, um mich für das [{} Serviceproblem] zu entschuldigen, das Sie mit unserem [{} Service] erlebt haben. Wir verstehen die dadurch entstandenen Unannehmlichkeiten und möchten Ihnen versichern, dass wir sofort Maßnahmen ergreifen, um das Problem zu beheben.

[{} Maßnahmen zur Lösung des Problems]

Wir schätzen Ihr Geschäft und Ihr Feedback. Wenn Sie weitere Bedenken oder Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.

Vielen Dank für Ihre Geduld und Ihr Verständnis.

Mit freundlichen Grüßen,
[{} Ihr Name]

Erklärung der Optimierungen:
Die Antwort-E-Mail zielt darauf ab:

- Die Beschwerde des Kunden anzuerkennen und sich für das Problem zu entschuldigen
- Die Maßnahmen zur Lösung des Problems zu beschreiben
- Die Wertschätzung für das Feedback und das Geschäft des Kunden zu zeigen
- Einen klaren Ansprechpartner für weitere Kommunikation bereitzustellen

Diese Antwort zielt darauf ab, die Bedenken des Kunden anzusprechen, das Engagement zur Lösung des Problems zu demonstrieren und eine positive Beziehung aufrechtzuerhalten.
````

# Tipps für eine effektive Konfiguration

- **Seien Sie konkret**: Definieren Sie klar den Kontext Ihrer Anweisung, um den Agenten effektiv zu steuern.
- **Iterieren**: Zögern Sie nicht, Ihren Prompt mehrfach zu verfeinern, um optimale Ergebnisse zu erzielen.
- **Verwenden Sie Beispiele**: Geben Sie Beispiele für das, was Sie erwarten, um dem Agenten zu helfen, Ihre Bedürfnisse besser zu verstehen.
- **Testen Sie Variationen**: Experimentieren Sie mit unterschiedlichen Formulierungen und Strukturen, um zu sehen, welche die besten Ausgaben liefern.
- **Feedback**: Nutzen Sie die Vorschläge zur weiteren Verfeinerung, um Ihre Prompts kontinuierlich zu verbessern.

# Verwandte Artikel
