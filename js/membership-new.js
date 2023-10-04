var btnMore = document.getElementById('btn-more');
var txtMore = document.getElementById('text-more');
var nxtOne = document.getElementById('next-1');
var nxtTwo = document.getElementById('next-2');
var prevOne = document.getElementById('prev-1');
var prevTwo = document.getElementById('prev-2');
txtMore.classList.remove('visible');

let txtNextOne = '<div class="col-1">\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p17.jpg" alt="Amali" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Amandi Piumika</h3><br>\n' +
    '                        <ul><li>AGE : 29</li><br><li>SUBJECT : Information Technology</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.68</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p16.jpg" alt="Saman" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Rashmika Rajapaksha</h3><br>\n' +
    '                        <ul><li>AGE : 35 </li><br><li>SUBJECT : Business Studies</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.71</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p14.jpg" alt="Dilumi" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Kamal Rathnayaka</h3><br>\n' +
    '                        <ul><li>AGE : 51 </li><br><li>SUBJECT : Law </li></ul><br>\n' +
    '                        <ul><li>GPA : 3.69</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p15.jpg" alt="Sachin" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Eranda Perera</h3><br>\n' +
    '                        <ul><li>AGE : 32 </li><br><li>SUBJECT : Data science and Statistic</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.53</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p18.jpg" alt="Kasun" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Damayanthi Welgama</h3><br>\n' +
    '                        <ul><li>AGE : 38 </li><br><li>SUBJECT : General English</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.68</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class ="right">\n' +
    '                </div>'

let txtPrevOne = '<div class="col-1">\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p12.jpg" alt="Amali" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Amali Karunarathne</h3><br>\n' +
    '                        <ul><li>AGE : 44</li><br><li>SUBJECT : Information Technology</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.97</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p23.jpg" alt="Saman" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Saman Kumarasinghe</h3><br>\n' +
    '                        <ul><li>AGE : 27 </li><br><li>SUBJECT : Information Technology</li></ul><br>\n' +
    '                        <ul><li>GPA : 4.00</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/21.jpg" alt="Dilumi" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Dilumi Chathurangika</h3><br>\n' +
    '                        <ul><li>AGE : 31 </li><br><li>SUBJECT : Mathematic and Statistic</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.98</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p10.jpg" alt="Sachin" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Sachin Perera</h3><br>\n' +
    '                        <ul><li>AGE : 32 </li><br><li>SUBJECT : Information Technology</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.91</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="column">\n' +
    '                    <img src="../img/p4.jpg" alt="Kasun" width="250" height="200" border ="5px solid black">\n' +
    '                    <div class="container">\n' +
    '                        <h3>NAME : Kasun Perera</h3><br>\n' +
    '                        <ul><li>AGE : 38 </li><br><li>SUBJECT : General English</li></ul><br>\n' +
    '                        <ul><li>GPA : 3.95</li></ul><br>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                </div>'

btnMore.addEventListener('click', function(){
    txtMore.classList.toggle('visible-1');
    txtMore.classList.toggle('visible-2');
});

nxtOne.addEventListener('click', function(){
    document.getElementsByClassName('col-1')[0].innerHTML = txtNextOne;
    prevOne.classList.toggle('visible-1');
    prevOne.classList.toggle('visible-2');
    nxtOne.classList.toggle('visible-1');
    nxtOne.classList.toggle('visible-2');
});
prevOne.addEventListener('click', function(){
    document.getElementsByClassName('col-1')[0].innerHTML = txtPrevOne;
    prevOne.classList.toggle('visible-1');
    prevOne.classList.toggle('visible-2');
    nxtOne.classList.toggle('visible-1');
    nxtOne.classList.toggle('visible-2');
});
nxtTwo.addEventListener('click', function(){
    document.getElementsByClassName('col-1')[1].innerHTML = txtPrevOne;
    console.log(document.getElementsByClassName('col-1')[1])
    prevTwo.classList.toggle('visible-1');
    prevTwo.classList.toggle('visible-2');
    nxtTwo.classList.toggle('visible-1');
    nxtTwo.classList.toggle('visible-2');
});
prevTwo.addEventListener('click', function(){
    document.getElementsByClassName('col-1')[1].innerHTML = txtNextOne;
    prevTwo.classList.toggle('visible-1');
    prevTwo.classList.toggle('visible-2');
    nxtTwo.classList.toggle('visible-1');
    nxtTwo.classList.toggle('visible-2');
});
