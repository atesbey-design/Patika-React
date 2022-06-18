//then ifadeleri kullanılırken yapılır



//arrow func tanımladım
const getComments = (number) => {
    //then ifade oluşturmak için promise classınından obje ürettim. 2 tane özellik alıyor başarılı için resolve,başarısız için reject.
    return new Promise((resolve, reject) => {
        if (number === 1) {
            resolve("Görev başarılı asker");

        }

        reject("deneme");
    })
}

//getcommetse talep gönder eğer başarılı ise data değişkeni için datayı yazdır. değilse hatayı göster
getComments(1).then(
    (data) => console.log(data)
).catch((e) => console.log(e))