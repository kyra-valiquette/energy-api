# Energy API

API backend développée avec **NestJS** pour le cours de collection de données.

## Contexte
Ce projet met en place une architecture propre et modulaire en but de laboratoire pour un cours de la technique de l'informatique.

## Prérequis
Assurez-vous d'avoir installé sur votre machine :
- **Node.js**
- **npm**

## Installation
Clonez le projet et installez les dépendances :
```bash
npm install

## 📐 Conventions de l'API

L'API respecte les choix architecturaux et de nommage suivants :
- **Préfixe des routes :** `/api`
- **Version de l'API :** `v1` (ex: `/api/v1/...`)
- **Ressources :** Noms anglais au pluriel (ex: `buildings`)
- **Chemins URL :** `kebab-case` (ex: `/energy-consumptions`)
- **Objets JSON (payloads) :** `camelCase` pour les propriétés (ex: `yearBuilt`, `buildingName`)
- **Formats de date :** Norme ISO 8601 en UTC (ex: `2026-09-01T14:26:01Z`)
- **Format d'échange :** JSON (JavaScript Object Notation) comme format principal pour les requêtes et les réponses