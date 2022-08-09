const collect_ratings = () =>{
    const ratings = {
        count:0,
        sum:0,
        average:0
    }
    let rating = 0;
    var elements = document.querySelectorAll('.rating');
    elements.forEach((element)=>{
       rating = parseInt(element.id.replace('star','')); 
       ratings.count += parseInt(element.value)

       ratings.sum += rating*parseInt(element.value)

       if(ratings.count != 0){
        ratings.average = ratings.sum/ratings.count;
        ratings.average.toFixed(2);
       }
    })

}

const ratings = document.addEventListener('change',collect_ratings(), document.querySelector('.average').value = ratings.average);
