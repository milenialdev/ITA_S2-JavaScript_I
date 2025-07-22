# 🧠 ITA_S2-JavaScript_I

Repositori del **Sprint 2 de JavaScript** del curs de desenvolupament Front-End a **IT Academy**.

Aquest repositori conté:

- 🧪 Un conjunt complet d’exercicis pràctics sobre funcions modernes de JavaScript.
- 🛒 L’estructura inicial per a una demo funcional d’una aplicació e-commerce (encara no implementada).

---

## 📁 Estructura del repositori


```
ITA_S2-JavaScript_I/
├── exercicis-js/                      # Exercicis dividits per tema
│   ├── exercici-1.1-arrow-functions/
│   │   ├── index.js
│   │   └── ejercicio1.html
│   ├── exercici-1.2-operador-ternari/
│   │   ├── index.js
│   │   └── ejercicio2.html
│   ├── exercici-1.3-callbacks/
│   │   ├── index.js
│   │   └── ejercicio3.html
│   ├── exercici-1.4-rest-spread-operators/
│   │   ├── index.js
│   │   └── ejercicio4.html
│   ├── exercici-1.5-array-transformations/
│   │   ├── index.js
│   │   └── ejercicio5.html
│   ├── exercici-1.6-array-loops/
│   │   ├── index.js
│   │   └── ejercicio6.html
│   ├── exercici-1.7-promises-async-await/
│   │   ├── index.js
│   │   └── ejercicio7.html
│   ├── index.html
│   └── style.css                      # Full d'estils reutilitzable per a tots els exercicis
│
├── ecommerce-demo/                    # Carpeta buida (es prepararà més endavant)
│   └── .gitkeep
│
├── .gitignore
└── README.md
```

---


## ✅ Exercicis JavaScript inclosos

Dins de la carpeta `exercicis-js/` trobaràs:

- Una subcarpeta per a cada exercici, amb el seu propi `index.js` i un fitxer HTML per visualitzar-lo (`ejercicioX.html`).
- Un fitxer `style.css` comú i reutilitzable per a tots els exercicis.

**Detall de la part d'exercicis-js:**

```
exercicis-js/
├── exercici-1.1-arrow-functions/
│   ├── index.js
│   └── ejercicio1.html
├── exercici-1.2-operador-ternari/
│   ├── index.js
│   └── ejercicio2.html
├── exercici-1.3-callbacks/
│   ├── index.js
│   └── ejercicio3.html
├── exercici-1.4-rest-spread-operators/
│   ├── index.js
│   └── ejercicio4.html
├── exercici-1.5-array-transformations/
│   ├── index.js
│   └── ejercicio5.html
├── exercici-1.6-array-loops/
│   ├── index.js
│   └── ejercicio6.html
├── exercici-1.7-promises-async-await/
│   ├── index.js
│   └── ejercicio7.html
└── style.css
```

---

## 🛠️ Tecnologies

- JavaScript ES6+
- HTML5 (en la demo)
- CSS3 (en la demo)
- Eines suggerides: `live-server`, `eslint`, `npm`

---

## 🔜 E-commerce Demo

La carpeta `ecommerce-demo/` està preparada per implementar una botiga online amb:

- Gestió del carret de compra
- Aplicació de promocions
- Validació de formulari de checkout
- Maquetació bàsica

Aquesta part s'implementarà a partir del **Dia 5 del Sprint**.

---


---

## 🌳 Estratègia de branques

El flux de treball amb branques per a aquest repositori és el següent:

- **e-commerce**: branca de desenvolupament actiu de la web d'e-commerce. Aquí es realitza tot el treball i proves de noves funcionalitats relacionades amb la botiga online.
- **develop**: branca d'integració estable. Quan una versió de la web d'e-commerce és estable, es fusiona aquí des de `e-commerce`.
- **main**: branca principal. Només rep versions finals i totalment validades, prèviament integrades a `develop`.

El flux habitual és:

1. Es treballa i es fan commits a `e-commerce`.
2. Quan la versió és estable, es fa merge a `develop`.
3. Quan la versió és definitiva, es fa merge a `main`.

---

## 👤 Autor

**Carlos / milenialdev**  
[github.com/milenialdev](https://github.com/milenialdev)
