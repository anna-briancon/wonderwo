# wonderwo

## 1. Cloner le repo et installer

```bash
git clone <repo-url>
cd wonder-wo
npm install
```


## 2. Configurer son .env

Créer un fichier .env avec `DATABASE_URL`.
```bash
DATABASE_URL="mysql://root:@localhost:3306/wonderwo?socket=/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock"
```
ou 
```bash
DATABASE_URL="mysql://root:@localhost:3306/wonderwo
```

## 3. Créer la base de données vide

Aller dans phpMyAdmin → créer une DB wonderwo

## 4. Lancer Prisma pour migrer et créer les tables

```bash
npx prisma migrate dev --name init
```

## 5. Générer Prisma au cas où

```bash
npx prisma generate
```


## 6. Lancer l’app

```bash
npm run dev
```
Puis aller sur :

```bash
http://localhost:3000
```