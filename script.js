var feat = document.getElementsByClassName('feature')[0];
var tool = document.getElementsByClassName('tool')[0];
var arc = document.getElementsByClassName('archive')[0];
var about = document.getElementsByClassName('about')[0];
var proj = document.getElementsByClassName('project')[0];


function f() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var arc = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; arc.style.display = "none"; about.style.display = "none";
    feat.style.animation = "fade-in 1.2s ease-in"; feat.style.display = "inline";
}

function t() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var arc = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "grid"; feat.style.display = "none"; arc.style.display = "none";
    about.style.display = "none"; tool.style.animation = "fade-in 1.2s ease-in";
}

function a() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none";  about.style.display = "none";
    ar.style.display = "grid"; ar.style.animation = "fade-in 1.2s ease-in"; 
}

function ab() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "grid"; about.style.animation = "fade-in 1.2s ease-in"; 
}

function p() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "grid"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; proj.style.animation = "fade-in 1.2s ease-in"; 
}

function d() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "grid";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; disc.style.animation = "fade-in 1.2s ease-in"; 
}

function r() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "grid"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; rd.style.animation = "fade-in 1.2s ease-in"; 
}

/*

function template() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "";
    img1.src = ""; img2.src = ""; img3.src= ""; 
    paragraph.innerHTML = "";
    pc1.innerHTML = ""; pc2.innerHTML = "";
} */

function compost() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "COMPOST";
    img1.src = "img/compost/compost1.jpg"; img2.src = "img/compost/compost3.jpg"; img3.src= "img/compost/compost6.jpg"; 
    paragraph.innerHTML = "This is a small guide on how to build your own compost/worm box. It can be either stored outside on the balcony or in the garden, or indoors in your basement, hallway, or apartment. It’s easy to build, doesn’t smell and is a great way to create hummus for your plants from kitchen scraps. <ol><li><u><i>ingredients</i></u></li><br><li>three big plastic buckets (25l)</li><li>plant or garden dirt</li><li>old newspaper or carton</li><li>worms </li><li>food scraps</li><li>a drill</li></ol>optional: a plant for on top<br><br>Amazingly, you can order worms for composting online or find a local garden, friend, or someone on Facebook who can offer you some worms. The compost should be placed in the shadow and possibly inside during winter to avoid too hot or cold temperatures. <br><br><u><i>method</i></u><br><br>First, you want to drill some small holes, around 6mm, in one of the buckets. This way excess liquid can be retrieved into the first bucket. You can use this water as a natural plant fertilizer. Next, you drill some more holes (around 10mm) in the second of your three buckets so that the worms can easily travel between the second and third buckets.Then you place a small plant pot upside down in the first bucket with no holes. On it, you put your second bucket with the smaller holes.  After, you tear up the old newspaper into small pieces which adds carbon to your compost, soaks up excess moisture and helps the air to circulate. Then you put your plant dirt and worms into the bucket as well as some of your food scraps. On top, you place the last bucket with the bigger wholes. You follow the same procedure with tearing up newspaper and putting in plant dirt. You can plant something in this bucket or place a lid on it so that when the worms have processed the food scraps in the first bucket you can continue with the one on top. The idea is to exchange buckets as soon as the first one is turned into hummus. You can start with some food scraps in the beginning and keep on adding to the bucket with the worms. It is not a very fast process so it needs some patience as well as it is a small-scale compost so you might want to layer some buckets to keep on adding food scraps. <br><i>Et voilà, your selfmade compost!</i>";
    pc1.innerHTML = "&nbsp;&nbsp;vol 1."; pc2.innerHTML = "230512";
    
    document.getElementById('category-button')
        .addEventListener('click', function (event) {
            var feat = document.getElementsByClassName('feature')[0];
            var tool = document.getElementById('grid-tool');
            var arc = document.getElementsByClassName('archive')[0];
            var about = document.getElementsByClassName('about')[0];
            var proj = document.getElementsByClassName('project')[0];
            var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
            rd.style.display = "none"; disc.style.display = "none";
            proj.style.display = "none"; tool.style.display = "grid"; feat.style.display = "none"; arc.style.display = "none";
            about.style.display = "none"; tool.style.animation = "fade-in 1.2s ease-in";
        });
}

function cooking() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "The SIMPLICITY OF COOKING & the ABSURDITY OF MATERIAL MAKING";
    img1.src = "img/cooking/ meals and materials 1.png"; img2.src = "img/cooking/ meals and materials 3.png"; img3.src= "img/cooking/ meals and materials 8.png"; 
    paragraph.innerHTML = "<h2>intro</h2><br><i>The simplicity of cooking & the absurdity of material making</i> - An introduction of Sophia Beckmann’s cookbook exploring the intricate connection of cooking and making materials (…)<br><br><i>Meals and Materials</i> is the title of the cookbook Sophia Beckmann created as part of her graduation project in Fashion Branding at the Amsterdam Fashion Institute. It explores various ways in which cooking, and materials are intertwined and draws parallels between making a meal and materials. Having a very conceptual, experimental way of creating influenced most of her projects during her years and education at the Amsterdam Fashion Institute. Where she has specialized in the Visual Culture and Textile program. The latter one introduced her to the breadth and depth of material making. Her passion for cooking and eating originates from her family home where the shared dinner was an essential and valued time together. The joy of preparing a delicious dish together, learning from one another, sharing tips and tools and in the end sitting around the table has then become a shared experience with friends and roommates. During the pandemic, she started an Instagram account together with her roommate sharing their dishes and recipes as a creative outlet for a time when very little was happening. Naturally, her personal culinary interest influenced her final graduation project. While exploring material making as part of her Textile specialisation, she noticed the similarities between preparing a meal and creating biomaterials. In her book, she aims to showcase how simple material making can be by drawing the parallels between cooking food and the process of creating materials. ‘We cook food every day, preparing and combining ingredients to create a filling meal for our tastebuds to indulge in. The kitchen is a very familiar space. Now, what if I told you, that you can use that same space, the same utensils, the same processes and the same ingredients to create more than just food? Together, you and your kitchen, provide everything needed to create textiles and materials’, she tells.<br><h2>By connecting the simplicity of cooking with what she calls: ‘the absurdity of material making’, she highlights the often-forgotten potential in natural materials.</h2><br>For example, making a broth out of food waste or adding Parmigiano rind to your risotto or alternative ways of vegetarian material making like creating paper from an egg carton. While sustainable and alternative ways of food preparations are getting more relevant, there is still much-undiscovered potential hidden in sustainable materials for more commercial purposes. In her work, sustainability has become an underlying consistent presence. While in her close surroundings, she feels that people are aware of a needed change in the way we consume and treat natural resources, the wider spectrum of people are not acting upon it (yet). This keeps her motivated to develop and challenge boundaries as well as to raise awareness for the unexplored potential in food culture and textiles. While her physical cookbook very much is about innovative thinking, it links at the same time back to the traditional craft of cooking as well as her chosen medium of a classic cookbook creates an interesting duality. <i>In order to move forward, it is wise to look back.</i><br><br><i>Meals and Materials</i>, a cookbook created by <a href=https://www.sophiabeckmann.com>Sophia </a><br><br>images courtesy of the artist";
    pc1.innerHTML = "&nbsp;&nbsp;vol. 1"; pc2.innerHTML = "230521";
    document.getElementById('category-button')
    .addEventListener('click', function (event) {
        var feat = document.getElementsByClassName('feature')[0];
        var tool = document.getElementById('grid-tool');
        var arc = document.getElementsByClassName('archive')[0];
        var about = document.getElementsByClassName('about')[0];
        var proj = document.getElementsByClassName('project')[0];
        var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
        rd.style.display = "none"; disc.style.display = "none";
        proj.style.display = "none"; tool.style.display = "grid"; feat.style.display = "none"; arc.style.display = "none";
        about.style.display = "none"; tool.style.animation = "fade-in 1.2s ease-in";
    });
}

function bronwen() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var img4 = document.getElementById('p-img4'); var img5 = document.getElementById('p-img5'); 
    var img6 = document.getElementById('p-img6'); var img7 = document.getElementById('p-img6'); 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "Interview with <i>Bronwen Jones</i> ";
    img1.src = "img/bronwen/BronwenJ1-2.jpg"; img2.src = "img/bronwen/BronwenJ3-2.jpg"; img3.src= "img/bronwen/BronwenJ4.jpeg"; 
    img4.src = "img/bronwen/BronwenJ6.png"; img5.src = "img/bronwen/BronwenJ7.png"; img6.src= "img/bronwen/BronwenJ8.png"; 
    paragraph.innerHTML = "Garments as a carrier for conversations, intimacy and communal networks. Who would have thought there is so much potential hidden in a piece of textile?!  Exactly these questions lay at the bottom of <a href=https://bronwenjones.info>Bronwen Jones’s</a> artistic practice.<br>Bronwen Jones is an artist from the UK based in Amsterdam. In her work, she explores the value of garments and their relationship to bodies. She has been particularly interested in the craft of mending clothes as a tool to establish intimacy with strangers. During a residency in Rotterdam, she offered to mend garments for and with the public. People could bring garments that needed to be repaired in exchange for a conversation. Through this practice, she explored the communal value of a traditional craft like clothing mending and critically examines our relationship to objects and materials. Her <i>Clothing Correspondence</i> residency resulted in a small publication including stories about the value of garments, a guide about darning and a curated reading list.<br>Recently, she presented some of her textile work alongside two other artists with a similar focus on textile handcraft at fanfare in Amsterdam. All three of the artists share a common approach of working at a slower pace that is more in tune with the nature of the material and technique rather than conforming to the social pressure of constant productivity. The group exhibition came out of a shared passion for textile crafts as well as it shows ‘the nature of textile to grow and form empathetic networks’ - Bronwen Jones, <i>Still within reach 2023</i>.<br>Being very inspired by her art practice and approach, she kindly shared some more words with us.<br><br><ol><li><i>How did your passion and focus for clothing mending start? Did you learn the technique from someone?</i><br><br>I’ve always had a mentality to try and fix all kinds of objects, it helps me to understand how they are made. I got particularly into mending clothes about five years ago, I mostly learned by practicing on my own clothes and friends’ clothes and sometimes reading tips online. It became the main focus of my art practice about two years ago during covid; I noticed that mending garments for people could be a very intimate process and they would often tell quite personal and special stories through the garment. I wanted to explore the potential of this exchange, particularly at a time of isolation, loneliness and a lack of intimacy. It has become a way for me to form intimacy with people and with material, and to encourage people to love and value their belongings.<br><br><i>Why do you think reconnecting with the value of garments and reviving simple techniques like clothing mending are especially relevant now?</i><br><br>I feel that we are currently too out of touch with how materials/objects are made, where they come from, and who made them. This makes it hard to see the value of material and labour and for us to build relationships with our belongings because we see them as disposable and easily replaceable.</ol><h2>I think if we were more aware of the processes and time it took to make things then we would be more conscious of our impact on the environment and our responsibility to care for materials, other people, and our communities.</h2><ol>I see mending clothing as a straightforward and accessible start to realising the value of material and building empathetic relationships. I also see a craving for people to get in touch with materials and to DIY because these are skills that, in my experience, are decreasingly given value and taught in schools.<br><br><i>Your favorite mending story so far?</i><br><br>A pair of mittens that my friend’s grandmother knitted. I offered to darn the holes that had begun to appear on the palm of the hands some years ago, and later when she moved away she left them with me as a gift. I’ve been wearing them for three winters since and they’ve continued to accumulate new holes as I wear them while cycling. Every time I repair them in a new shade of white, pink, or red so the time that has passed and the patterns of wear are visible. I love that the top side still looks perfect, while the bottom side has been completely transformed. They are one of my most prized and most used items of clothing, and I love how they connect me with this friend now that we live far apart.<br><br><i>publication</i> 'Clothing Correspondence (2022)'<br>available at PrintRoom, Rotterdam<br>San Seriffe, Amsterdam<br><br><i>images</i> were taken at the exhibition 'Still within reach' 2023<ol><i>images</i> of the publication <i>Clothing Correspondence</i> courtesy of the artist";
    pc1.innerHTML = "&nbsp;&nbsp;vol 1."; pc2.innerHTML = "230519";
    document.getElementById('category-button')
    .addEventListener('click', function (event) {
        var feat = document.getElementsByClassName('feature')[0];
        var tool = document.getElementById('grid-tool');
        var ar = document.getElementsByClassName('archive')[0];
        var about = document.getElementsByClassName('about')[0];
        var proj = document.getElementsByClassName('project')[0];
        var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
        rd.style.display = "grid"; disc.style.display = "none";
        proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
        about.style.display = "none"; rd.style.animation = "fade-in 1.2s ease-in"; 
    });

}

function hefekranz() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "The deeper significance of HEFEKRANZ";
    img1.src = "img/hefekranz/hefekranz6.1.jpg"; img2.src = "img/hefekranz/hefekranz7.jpg"; img3.src= "img/hefekranz/hefekranz8.jpg"; 
    paragraph.innerHTML = "Food is closely interlinked with personal memories, family history, identity and belonging.Food can put someone back in a certain time and place. It is intrinsically connected to emotions, people and environment. <br>Recently, my grandma has passed away. I have been thinking of how I will remember her.She will be remembered as a loving and caring grandma, the stories she has told me, or the times spent at my grandparent’s place as a child. However, as time passes these memories will inevitably fade. One tangible way I can keep her memory alive is through her signature creation: Hefekranz, a delightful, sweet bread enjoyed on its own or with butter, jam ('<b><i>Gsälz</i></b>'), or honey. My dad took over the tradition of baking it on special Sunday mornings, at any family festivity or party. For me, this traditional pastry is closely connected to home, comfort and family. The smell of freshly baked Hefekranz immediately releases emotions of joy in me.<br>I always liked that my dad has taken over this tradition. Going against old-fashioned gender norms which were still quite prominent when I was a child: being the dad who bakes and cooks lunch for his children. A lot more normal nowadays than it used to be. By learning from my grandma how to bake Hefekranz, my dad keeps a tradition and memory alive. I have been practising baking my own Hefekranz, not even nearly as successful as my dad or grandma did it. Learning to appreciate this tradition and making it my goal to bake the perfect Hefekranz is my way to keep remembering my grandma. Ultimately, it is about understanding the value of self-made food and taking the time to learn the process of it (which isn’t as easy, I can tell you).<br><br>&nbsp;&nbsp;definition <b><i>'Gsälz'</i></b>: Swabian word for jam; dialect that is spoken in a part of Southern Germany<br><br>text and images by Klara<br><br><i>documenting her own as well as her father’s baking process through a Facetime call</i>";
    pc1.innerHTML = "&nbsp;&nbsp;vol 1."; pc2.innerHTML = "230518";
    document.getElementById('category-button')
    .addEventListener('click', function (event) {
        var feat = document.getElementsByClassName('feature')[0];
        var tool = document.getElementById('grid-tool');
        var arc = document.getElementsByClassName('archive')[0];
        var about = document.getElementsByClassName('about')[0];
        var proj = document.getElementsByClassName('project')[0];
        var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
        rd.style.display = "none"; disc.style.display = "none";
        proj.style.display = "none"; tool.style.display = "grid"; feat.style.display = "none"; arc.style.display = "none";
        about.style.display = "none"; tool.style.animation = "fade-in 1.2s ease-in";
    });
}

function hermancake() {

var title = document.getElementsByClassName('p-title')[0];
var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
title.innerHTML = "Herman cake - a friendship cake";
img1.src = "img/hermancake/20230522105929_00001-2.jpg"; img2.src = "img/hermancake/20230522105929_00004-2-2.jpg"; img3.src= "img/hermancake/20230522105929_00005-2.jpg"; 
paragraph.innerHTML = "The <i>Herman</i> cake also referred to as a friendship or fortune cake, gained popularity during the environmental movement of the 1970s in Germany. This tradition predates current trends like slow living and highlights a more thoughtful and intentional approach to food culture. The essence of the <i>Herman</i> cake is a sourdough starter passed down from one friend to another. Technically the <i>Herman</i> cake is not an idea that came up during the 70s but goes back centuries. Sourdough was used at least as early as Ancient Egypt.<br> It starts with the simplest ingredients: water, flour and a little bit of sugar. Today dry yeast is used for the fermentation process but back when it started the dough was left out and ‘wild yeast’ so microorganisms drifted into the dough. Sourdough is most commonly used for bread giving it a lighter texture and slightly sour taste. Although, it can be used in many different recipes making it very versatile. Once, a starter was made it was common to pass it down to family and friends. Feeding families for years when the starter is cared for properly. During the pandemic, many people started to bake again and learned how to start sourdough. A technique that has been around forever started to become relevant again not only for professional chefs or bakers.<br>Lexie Smith from <a href=https://bread-on.earth>Bread on Earth</a>, an artist and baker exploring the value and deeper meanings of bread for society, politics, and economy, wrote: ‘Such a strong interest in bread making over the last week clearly underscores the necessity of revaluing our ability to make, distribute, and consume necessary goods outside of a commodity marketplace. We’re so estranged from these processes that many people’s relationships to sustaining themselves feel urgently inadequate, and the powerful, the gatekeepers of wealth, are officially not coming to save us.Because of or in the face of this, bread has once again, as in so many other eras of extreme insecurity, risen up as a symbol of sustenance, comfort and security’’ (Lexie Smith, 2020). <br>The <i>Herman</i> cake project started out with the idea of exploring a communal experience centred around the simple art of baking, using the most basic ingredients and an ancient technique with a lot more significance than expected. It resulted in a photo series that takes on a documentary style, with contributions from all participants. <br><br><h2>The aim is to showcase the value of food for communities, appreciating traditional crafts like baking, reconnecting with the process of making and the value of pure produces.</h2><br> The album serves as a reminder of the importance of preserving analogue memories and creating physical artefacts in a digital age. In order, to share this experience with more people a small little leaflet came to life designed and illustrated by <a href=https://www.instagram.com/lillmarquess/>Lilly</a>. This way you can create your own <i>Herman</i> experience by downloading the leaflet below and following the steps inside. Create your own <i>Herman</i> memories with friends by following the grounding process of caring for a sourdough:)<br><br><i>references</i><br><br>Smith, L. [bread_on_earth]. (2020, March 25) A few days ago I offered to send dried starter to anyone who wanted to try their hand at baking and received over 400 requests in the first 24 hours…[Instagram Post].&nbsp;<a href=https://www.instagram.com/p/B-KWiobjfaa/>Instagram</a><br><br><a href=img/hermancake/rhiza_Hermannkuchen_rezept.jpg download>download recipe</a><br><a href=img/hermancake/rhiza_Hermannkuchen_komplettversion2.pdf download>download recipe</a>";
pc1.innerHTML = "&nbsp;&nbsp;vol 1."; pc2.innerHTML = "230518";
document.getElementById('category-button')
.addEventListener('click', function (event) {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "grid";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; disc.style.animation = "fade-in 1.2s ease-in"; 
});
}

function naturaldye() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); 
    var vid = document.getElementsByClassName('p-video')[0];
    var arrow = document.getElementsByClassName('p-arrow')[0];
    var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "NATURAL DYEING";
    img1.style.display = "none"; img2.style.display = "none"; img3.style.display = "none"; 
    vid.style.display = "grid"; arrow.style.display = "none";
    paragraph.innerHTML = "Create your own naturally dyed pieces by following this very easy recipe. You can create beautiful (more faded) colours with this technique and explore the possibilities of raw natural materials like red cabbage.<br><br><u><i>ingredients</i></u><br><br><ol><li>red cabbage</li><li>(silk) fabric</li><li>two pots</li><li><i>a little bit of time:)</i></li><br></ol>Depending on how much fabric you want to dye, you need more or less red cabbage. This also determines the colour saturation. This process is very much about <i>experimenting</i> and trying different techniques. There is no right or wrong. If you use fabrics like silk this technique will work best as this is a protein-based fabric and will take the colour on better. In other cases, it is suggested to use a mordant that facilitates the bonding of the colour and fabric. To keep it simple, this technique is without any mordant. To keep it most sustainable and inexpensive, you want to use thrifted or second-hand fabric. <br><br><i><u>method</u></i><br><br>You start by cutting your red cabbage into small chunks. Then you cover them with enough water but not too much. The more water you use the less strong your colour will be.In the second pot, you put your fabric and cover it with water and add a little bit of washing detergent. After, you bring both pots to a boil and let them simmer for approximately two hours. After this time has passed, drain off the water from the fabric pot and rinse the fabric with cold water. Set aside.<br>Next, drain off the water from the cabbage pot and - ‘very important’ - save the water! In the next step, put your washed fabric into the water from the red cabbage. Bring the pot to a boil again and then turn off the heat. You can leave the fabric to soak for at least four hours or overnight but make sure to stir the fabric once in a while to get a more even colour tone.After your fabric has soaked long enough in the cabbage water, you can take it out and give it a rinse. The less you wash it (preferably handwashing), the longer the colour will stay. You can use your dyed silk fabric as a top, bandana, hang it as an art piece on your wall, or use it instead of wrapping paper, and so on… enjoy";
    pc1.innerHTML = "&nbsp;&nbsp;vol 1."; pc2.innerHTML = "230516";
    document.getElementById('category-button')
    .addEventListener('click', function (event) {
        var feat = document.getElementsByClassName('feature')[0];
        var tool = document.getElementById('grid-tool');
        var ar = document.getElementsByClassName('archive')[0];
        var about = document.getElementsByClassName('about')[0];
        var proj = document.getElementsByClassName('project')[0];
        var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
        rd.style.display = "grid"; disc.style.display = "none";
        proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
        about.style.display = "none"; rd.style.animation = "fade-in 1.2s ease-in"; 
    });
}