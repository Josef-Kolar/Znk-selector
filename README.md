1) Popis projektu:
"Znk-selector" je web. stránka s HTML prvkem typu "select" a s jedním informačním řádkem v "boxíku".

2) Spuštění stránky:
"Znk-selector" funguje i po otevření souboru index.html v prohlížeči (lokálně, v počítači). K otevření stránky doporučuji použít web. prohlížeč "Chrome", neboť je nutné tento prohlížeč spustit s níže uvedeným parametrem (s jinými prohlížeči tato možnost testovaná nebyla):

"chrome.exe --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp"

!!! Bez použití výše uvedeného paramatru "Znk-selector" nefunguje !!!
---------------------------------------------------------------------------------------------------------------------------------------

"Znk-selector" vznikl za použití javascriptového frameworku Vue.js. Potřebná data jsou sbírána ze souboru typu "JSON". "Znk-selector" vybírá malé množství dat z velmi velkého souboru typu "JSON".
