console.log("It's Working!");


function write(){
    // console.log("Inside the write function");
    AOS.init();

var username = document.getElementById('name').value;
// console.log(username);

var input2 = document.getElementById('input2').value;
// console.log(input2);

var input3 = document.getElementById('input3').value;
// console.log(input3);

var input4 = document.getElementById('input4').value;
// console.log(input4);

var input5 = document.getElementById('input5').value;
// console.log(input5);

var input6 = document.getElementById('input6').value;
// console.log(input6);

var input7 = document.getElementById('input7').value;
// console.log(input7);

var input8 = document.getElementById('input8').value;
// console.log(input8);

var input9 = document.getElementById('input9').value;
// console.log(input9);

// var input10 = document.getElementById('input10').value;
// console.log(input10);

var input11 = document.getElementById('input11').value;
// console.log(input11);

var input12 = document.getElementById('input12').value;
// console.log(input12);


//if-else statement for bg-image in dropdown menu list//
var imagePath; 
if(input10.value==="coffee"){
    imagePath="url(images/coffee.jpeg)";
}else if(input10.value==="tea"){
    imagePath="url(images/tea.jpeg)";
}else if(input10.value==="cocoa"){
    imagePath="url(images/cocoa.jpeg)";
}else if(input10.value==="milk"){
    imagePath="url(images/milk.jpeg)";
}

document.getElementById('sideStory').innerHTML = '<div class="row text-dark" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2000"><div id="myBack" class="col-sm-6 mx-auto py-5 mb-5"></div><div class="col-sm-6 mx-auto p-5 mb-5 bg-white text-left" id="story-output"><h3>Congratulations '+username+'!, you completed the story! </h3><p class="text-justify">As I experienced the first '+input2+' snowflake gently fell from the sky in Lethbridge last week, the world around me turned into a '+input3+' winter wonderland. I remember the day when I woke up to a world transformed by the soft, '+input4+' snow covered everything in a pristine '+input5+', creating a dazzling landscape. I rushed outside, bundled up in layers of warm clothing, and as I opened the doors outside, I felt the cold in the air as it embraced me. I couldn&#39;t resist the temptation to make a snow '+input6+' right away, laying down in the snow in our front yard, moving my arms and legs to create a beautiful, angelic impression on the ground and feeling the powdered snow on my back and watching my sculpture take shape was an incredible experience.  I also '+input7+' in the fresh snow, watching and leaving behind my firm footprints. The breeze of the wind blowing in my face was '+input8+' and '+input9+'. As my cheeks and nose flushed from the cold, I went back inside our house and sipped hot '+input10.value+' in our living room. I am truly grateful for the first snowfall experience of the season, and it was a day I would cherish. After the experience, I suddenly felt a quick feeling of being a '+input11+' again and '+input12+' my childhood days. It is a reminder of the beauty and joy that winter&#39;s first snow can bring to our lives.</p><a href="index.html" class="btn btn-primary btn-block mt-3" role="button">Back to Start</a></div></div>';

document.getElementById('myBack').style.backgroundImage=imagePath;

}






// document.getElementById('output').innerHTML = '<div class="row"><div id="myBack" class="col-sm-8 mx-auto bg-secondary p-5 rounded text-white my-5"><h2> '+username+' will go here!</h2><p>'+input2+' ipsum dolor sit, amet consectetur adipisicing elit. In laborum recusandae dolorem, reprehenderit omnis officia hic rem odit amet vel?</p></div></div>';
