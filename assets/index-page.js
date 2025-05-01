function getInRange(min, max) {
  const delta = max - min;

  return min + Math.random() * delta;
}

function getRandomInt(min, max) {
  return Math.floor(getInRange(min, max))
}

function getRandomElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)]
}

const SYLLABLE_OCCURRENCE_INTERVAL_MIN = 666
const SYLLABLE_OCCURRENCE_INTERVAL_MAX = 1260
const SYLLABLE_LENGTH_INTERVAL_MIN = 12
const SYLLABLE_LENGTH_INTERVAL_MAX = 7 * 12

const REBUKES = [
  "יִגְעַר יְהוָה בְּךָ הַשָּׂטָן", // "May the LORD rebuke you, Satan."
  "בְּשֵׁם יְהוָה אֱלֹהֵי יִשְׂרָאֵל", // "In the name of the LORD, God of Israel."
  "אַל תִּירָא מִפַּחַד לָיְלָה", // "Do not fear the terror of the night."
  "שְׁוָה יְהוָה לְנֶגְדִּי תָמִיד", // "I have set the LORD always before me."
  "אָנָּא בְּכֹחַ גְּדֻלַּת יְמִינְךָ תַּתִּיר צְרוּרָה", // "Please, with the strength of Your right hand, untie the bundled one (i.e., release the bound soul)."
  "לֹא-יִצְלַח כָּל-כְּלִי יוּצַר עָלַיִךְ", // "No weapon formed against you shall succeed."
  "ה' יִלָּחֵם לָכֶם וְאַתֶּם תַּחֲרִשׁוּן", // "The LORD will fight for you, and you shall remain silent."
  "סוּר מֵרָע וַעֲשֵׂה-טוֹב", // "Turn away from evil and do good."
  "כַּאֲשֶׁר אָמַר יְהוָה – כֵּן יִהְיֶה", // "As the LORD has said – so shall it be."
]


document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.querySelector('#crosses');
  const rebukeElement = document.querySelector('#rebuke');

  if (!imageElement) return;

  function toggleImage() {
    const originalSrc = 'assets/crosses.png';
    const glitchSrc = 'assets/crosses-glitch.png';

    setTimeout(() => {
      imageElement.src = glitchSrc;
      rebukeElement.innerText = getRandomElement(REBUKES)

      setTimeout(() => {
        imageElement.src = originalSrc;
        rebukeElement.innerText = ''

        toggleImage()
      }, getInRange(SYLLABLE_LENGTH_INTERVAL_MIN, SYLLABLE_LENGTH_INTERVAL_MAX));
    }, getInRange(SYLLABLE_OCCURRENCE_INTERVAL_MIN, SYLLABLE_OCCURRENCE_INTERVAL_MAX));
  }

  toggleImage();
});