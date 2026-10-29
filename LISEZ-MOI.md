# un-don.gouv (parodie) — mode d'emploi

Ouvrez `index.html` dans un navigateur : rien d'autre à installer.

## Où modifier quoi
| Je veux changer… | Fichier |
|---|---|
| Un titre, un texte, un bouton, une phrase de refus, le footer | `js/content.js` (bloc `CONTENT`) |
| Les fiches « C'est qui Erwan / Andréa ? » (rôle, texte, lien, « où le trouver », pôle) | `js/content.js` → `who` |
| Le logo Gouvernement barré d'une croix rouge (en-tête) | `img/gouvernement.svg` et `css/style.css` (`.gov`) |
| Les liens des cagnottes, les phrases d'accroche, les photos d'Erwan | `js/content.js` → `PEOPLE` |
| Les lots, les messages et les segments de la roue | `js/content.js` → `contest` |
| Les couleurs  | `css/style.css` |
| Le comportement (jeux, roue, fenêtres) | `js/app.js` |

## Photos (dossier `img/`)
Remplacez un fichier en gardant son nom, ou changez le chemin dans `content.js`.
`andrea.jpg` = photo de la fiche Andréa · `erwan-profil.jpg` = fiche Erwan · `erwan-1/2/3.jpg` = diaporama de la cagnotte.

## La roue
Segments : « Gagné », « Gagné », « Perdu ». Le segment marqué `lose: true` est toujours celui où elle s'arrête
(elle frôle un « Gagné » puis glisse sur « Perdu »). Le bouton « Retenter » relance uniquement la roue.
