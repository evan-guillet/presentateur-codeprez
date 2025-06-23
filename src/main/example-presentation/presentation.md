# Sommaire

 1. Lorem Ipsum
 1. Une image
 1. Du code
 1. Du code extrait d'un fichier
 1. Une commande à exécuter
 1. Conclusion

---

# 1. Lorem Ipsum

Toute bonne présentation d'exemple commence par du
 - Lorem
 - Ipsum
 - Dolor


---

# 2. Une image

J'espère que votre application supporte l'ajout d'image et qu'elles ne dépasseront pas du cadre! 😉

![Une image](./assets/image.jpg)

---

# 3. Du Code

Ceci est du code JS. Bénéficie-t-il de la coloration syntaxique ? Dépasse-t-il de la vue  ou est-il *scrollable* ?

```js
import readline from "readline";
const rl = readline.createInterface({ input : process.stdin, output : process.stdout});

export default (question) => {
    return new Promise ((res,rej) => {
        rl.question(question + "\n>",(answer) => {
            res(answer);
            rl.close()
        }, (error) => {
            rej(error);
            rl.close()
        });
    })
};
```

---

# 4. Du code extrait d'un fichier

**Si vous avez bien analysé le fichier**, un bloc de code devrait s'afficher ici, plutôt qu'un lien, et seulement la fonction `greet` devrait s'afficher.:

[Code](./assets/index.js#3-6)

---

# 5. Une commande à exécuter

Ceci devrait afficher une ligne pour la commande ainsi qu'un bouton pour l'exécuter et un bloc pour en voir le résulat

```bash
node index.js
```

---

Normalement, `Doing stuff...` s'est affiché, puis `Hello World!` une seconde plus tard dans lle bloc.

---

# Conclusion

Si tout s'est bien passé, bravo!

![gif](https://media.giphy.com/media/ZdUnQS4AXEl1AERdil/giphy.gif)

---

# Merci d'avoir suivi cette présentation enrichissante !

## Des questions ?