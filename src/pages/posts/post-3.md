---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'FastAPI, arquitectura hexagonal y un backend de e-commerce'
author: 'Beto'
description: 'Tres prácticas progresivas para construir un backend de e-commerce con FastAPI y arquitectura hexagonal.'
image:
  url: 'https://placehold.co/600x400/163625/edefe4?text=FastAPI'
  alt: 'Ilustración esquemática de capas de una arquitectura hexagonal.'
pubDate: 2025-12-01
tags: ["fastapi", "python", "backend"]
---

Para Programación Web 1 construí un backend de e-commerce en tres prácticas progresivas, usando arquitectura hexagonal para mantener la lógica de negocio separada de los detalles de infraestructura.

## Lo que fui agregando

- Autenticación con JWT.
- Persistencia en MongoDB Atlas.
- Chat en tiempo real vía WebSockets.

Separar puertos y adaptadores desde el inicio hizo que cambiar piezas de infraestructura después fuera mucho menos doloroso de lo que esperaba.
