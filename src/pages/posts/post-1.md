---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Controles electrónicos de juez para karate'
pubDate: 2025-11-03
description: 'Diseñé e implementé un sistema de controles electrónicos para jueces en competencias de karate.'
author: 'Beto'
image:
  url: 'https://placehold.co/600x400/163625/edefe4?text=ESP32'
  alt: 'Ilustración de un microcontrolador ESP32 sobre un fondo verde tipo PCB.'
tags: ["embebidos", "esp32", "karate"]
---

Uno de mis proyectos favoritos hasta ahora: un sistema de controles electrónicos para que los jueces califiquen combates de karate en tiempo real, sin papel y sin discusiones sobre quién levantó la bandera primero.

## Lo que resolví

1. **Entrada de jueces**: botones dedicados por juez, con antirrebote (debounce) en firmware.
2. **Agregación de puntuación**: la lógica corre directo en el microcontrolador, sin depender de conexión a internet en el tatami.
3. **Visualización clara**: salida pensada para que el público entienda el resultado al instante.

## Próximos pasos

Quiero conectar este sistema con AxDeport para que los resultados de cada combate se registren automáticamente en la plataforma.
