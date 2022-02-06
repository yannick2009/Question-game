const question = document.querySelector(".quest");
const btn = document.querySelector(".btn");

var arr = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
var questArr = [
  "Quel est le plus beau cadeau que tu ais jamais reçue ?",
  "Quel(le) est ton film/ta musique préféré(e) ?",
  "14 février assuré oubien ton ticket de Zakoua est prêt ?",
  "Tu as tapé combien de fois poto ?",
  "De quoi es-tu le plus fière ?",
  "Quelle est la chose la plus belle que DIEU ait fait pour toi ?",
  "Quel est ton passage biblique préféré ?",
  "Quelle est ta plus grande peur ?",
  "Quelle est la plus grosse bétise que tu aies faite ?",
  "Qu’est-ce que tu as toujours voulu faire mais n’as jamais osée ?",
  "Quel est le pire surnom que l’on t’ait donné ?",
  "Quelle est la plus grosse honte de ta vie ?",
  "Comment réagirais-tu si ton enfant t’annonce qu’il est homosexuel ?",
  "Combien aimerais-tu avoir d’enfants ?",
  "T'as déjà menti en disant je t'aime ?",
  "Lequel de vos amis êtes-vous le plus fier? Pourquoi ?",
  "Pourquoi tes anciennes relations n’ont-elles pas fonctionnées ?",
  "Quel est votre athlète le plus admiré de tous les temps ?",
  "Croyez vous au coup de foudre ?",
  "As tu déjà passé une nuit au poste de police ?",
  "Quel est ton plus gros chagrin d’amour ?",
  " Quelle serait une journée «parfaite» pour vous?",
  "Décris-toi en tant que futur papa/maman",
  "Quel est ton pire défaut ?",
  "Quelle application utilisez-vous le plus sur votre téléphone ?",
  "Si on vous dit de quitter votre pays et d’en choisir un autre, dans quels trois pays choisirez-vous ?",
  "Que signifie pour toi l’amitié ?",
  " Si vous deviez choisir un repas pour le reste de votre vie, lequel choisiriez-vous?",
  "tu as fais tapé poto à combien de personnes ?",
  " Qu’est-ce qui vous passionne le plus?",
  "Selon vous, quels sont les trois mots qui décrivent le mieux qui vous êtes ?",
  "Quel est votre plus grand regret dans la vie jusqu’à présent ?",
  "Quel est le meilleur conseil que vous ayez jamais reçu ?",
  "As-tu déjà été infidèle ?",
];

btn.addEventListener("click", () => {
  if (questArr.length != 0) {
    setTimeout(() => {
      let x = Math.floor(Math.random() * questArr.length);
      console.log(x, questArr[x]);
      question.textContent = questArr[x];
      questArr.splice(x, 1);
    }, 1000);
  } else {
    question.textContent = "FIN DU GAME";
    btn.style.display = "none";
  }
});
