// Fonction pour calculer la probabilité
function calculateProbability(n, k) {
    const combinations = factorial(n) / (factorial(k) * factorial(n - k));
    return 1 / combinations;
}

// Fonction pour calculer la factorielle d'un nombre
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Fonction pour gérer le formulaire et afficher la probabilité
document.getElementById('lottoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupérer les valeurs de l'utilisateur
    const n = parseInt(document.getElementById('totalNumbers').value);
    const k = parseInt(document.getElementById('numbersToPick').value);

    // Vérification si les valeurs sont valides
    if (isNaN(n) || isNaN(k) || k <= 0 || n <= 0 || k > n) {
        document.getElementById('result').innerHTML = "<p style='color: red;'>Veuillez entrer des valeurs valides (n > 0, k ≤ n).</p>";
        return;
    }

    // Calcul de la probabilité
    const probability = calculateProbability(n, k);

    // Affichage du résultat
    document.getElementById('result').innerHTML = `<p>La probabilité de tirer une combinaison exacte dans un loto ${k}/${n} est : ${probability.toFixed(10)}</p>`;
});

