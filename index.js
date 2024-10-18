// sayıların toplamını bulma (tek-cift)

function sayiTekCift() {
  let sayiAdedi = prompt("kac adet sayi girmek istediginizi yazin");
  let ciftToplam = 0; 
  let tekToplam = 0;  
  let sayilar = [];  

  for (let i = 0; i < sayiAdedi; i++) {
    let sayi = prompt((i + 1) + "sayi girin:");
    sayilar.push(sayi);  

    if (sayi % 2 === 0) {
      ciftToplam += sayi;
    } else {
      tekToplam += sayi;
    }
  }

  console.log("girilen sayi:", sayilar);
  console.log("cift sayilarin toplami:", ciftToplam);
  console.log("tek sayilarin toplami:", tekToplam);
}

sayiTekCift();


// Kullanıcıya kaç adet sayı girmek istediğini soralım.
// Vereceği cevaba göre kullanıcıdan sayıları alalım.
// Cevaplar sayilar dizisine eklensin.
// Kullanıcıdan alınan sayılar çift ise ayrı toplayıp cevabını yazdıralım, tek ise ayrı toplayıp cevabını yazdıralım.