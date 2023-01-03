# Brief-Credit-Maroc
npm
```bash
npm install
```

node
```bash
npm init
```
```bash
npm start
```

## Les outils et technologies utilisés :
 - [MongoDB](https://www.mongodb.com/home)
 - [Express](https://expressjs.com/)
 - [Reactjs](https://reactjs.org/)
  - [Nodejs](https://nodejs.org/en/download/)
 - [Tailwind](https://tailwindcss.com/)


## Référence API

#### register 

```http
  POST auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nom` | `string` | **Required**. 
| `prenom` | `string` | **Required**. 
| `email` | `string` | **Required**. 
| `password` | `string` | **Required**. 

```http
  POST auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. 
| `password` | `string` | **Required**. 


