---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Por qué le estoy entrando a Rust para sistemas embebidos'
author: 'Beto'
description: 'Mi razonamiento para estudiar Rust como parte de mi perfil híbrido hardware/software.'
image:
  url: 'https://placehold.co/600x400/163625/edefe4?text=Rust'
  alt: 'Ilustración esquemática de un chip con el engranaje de Rust.'
pubDate: 2025-12-15
tags: ["rust", "embebidos", "carrera"]
---

# Rust + Python + embebidos

Estoy apuntando a una especialización poco común: Python para prototipar rápido, Rust para firmware serio, y sistemas embebidos como terreno de juego.

## Por qué

Vengo de Arduino y ESP32 en C/C++. Rust me da las mismas garantías de bajo nivel, pero con un compilador que me detiene antes de que cometa errores de memoria clásicos en firmware.

## Siguientes pasos

Seguir el roadmap que ya traigo para Python, y empezar a portar alguno de mis proyectos con ESP32 a Rust usando `embassy` o `esp-hal`.
