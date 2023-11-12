# Formation aux tests Angular

Ceci est un condensé de la formation aux tests angular suivie les 30 et 31 octobre 2023


## Jasmine / Karma

Jasmine est le framework de test par défaut d'angular. Associé à Karma (test runner), il permet d'exécuter des tests unitaires depuis un (vrai) navigateur.
Cependant, ce combo est en perte de vitesse et Karma est aujourd'hui déprécié.

Voir le [comparatif des utilisations](https://npmtrends.com/jasmine-core-vs-jest-vs-mocha-vs-vitest)

Des alternatives à Jasmine sont toutefois disponibles :
- [jest](https://jestjs.io/fr/) (le plus populaire)
- [vitest](https://vitest.dev/) (très récent)
- [Mocha](https://mochajs.org/)

A la différence de Jasmine/Karma, jest se suffit à lui-même et exécute tous ses test avec node, le navigateur est donc cette fois-ci simulé et non réellement lancé.


## Protractor

Protractor est un framework de tests fonctionnels. Le but ici est de simuler dans un navigateur l'utilisation de l'application comme un vrai utilisateur pourrait le faire (navigation dans l'application, clique sur les éléments de la page, etc).

Ce dernier est ajourd'hui obsolète, nous utiliserons plutôt Cypress.

Autres alternatives à Protractor :
- [NightWatch](https://nightwatchjs.org/)
- [Puppeteer](https://pptr.dev/) (limité à chrome)
- [Playwright](https://playwright.dev/) (par les anciens devs de Puppeteer)
- [CodeceptJS](https://codecept.io/)

Voir le [comparatif des utilisations](https://npmtrends.com/cypress-vs-nightwatch-vs-playwright-vs-protractor-vs-puppeteer)


## Cypress

Cypress permet de faire des tests fonctionnels, ils s'agît d'une alternative à protractor, aujourd'hui obsolète.

Documentation : [https://docs.cypress.io](https://docs.cypress.io)

### Installation

``npm install --save-dev cypress``

-----

## Lancement des tests unitaires

``ng test``

### Exécuter les tests unitaires uniquement sur un it() ou un describe() particulier

Pour n'exécuter que les tests d'un describe() ou d'un it() particulier, il est possible d'ajouter un `f` devant.

Attention à bien l'enlever ensuite.

-----

## lancement des tests end to end

La commande `ng e2e` permet de faire la configuration de l'environnement des tests end to end de manière interactive.

Deux commandes sont ensuite disponible pour Cypress
- ``npm run cypress:open`` pour ouvrir Cypress (tout est faisable depuis une interface ensuite)
- ``npm run cypress:run`` pour lancer les tests dans la console

Note : pour utiliser Cypress, l'application doit d'abord être lancée.