
var dasIp= "127.0.0.1";
 var textData="";
$(document).ready(function(){

drawWordCloud("TRUMP" );


	
});







 function  WordCloud(textData, stopWords){
    var new_cloud={};

 var d_new="";

                if(textData){
		                                                
                     new_cloud =updateText( textData, stopWords);

                     };
		var viewUpdateFunction = (function(chart) {
		this.view = chart({el:"#wordCloud"}).update();
		}).bind(this);
		vg.parse.spec(new_cloud, viewUpdateFunction);


		    setInterval(function () {
                   //d_new = textData;// d_new.push({word:randomWord(),weight:randomWeight()});

                    textData+=" "+"stop";
                        console.log(textData);
                      new_cloud = updateText(textData, stopWords);

                      //console.log(new_cloud);

                    	   var viewUpdateFunction = (function(chart) {
                    		this.view = chart({el:"#wordCloud"}).update();
                    		}).bind(this);
                    		vg.parse.spec(new_cloud, viewUpdateFunction);


                  }, 1500);




}


function drawWordCloud(Cname ){

    var tableName= Cname+"WORDCLOUD";

var stopWords ="(trump|donaldtrump|realdonaldtrump|clinton|cruz|tedcruz|bernie|berniesanders|makeamericagreatagain|trumptrain|donald)";
   // var interval= setInterval(function(){

   /* $.ajax({

                               url:  "https://"+ dasIp + ":9446/analytics/tables/"+tableName,
                                beforeSend: function (xhr) {
                                       xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
                                 },
                                 method: "GET",

                                contentType: "application/json",
                                success: function (TextData) {
                                    console.log(TextData.length);
                                  //  console.log(TextData);
                                    var N = TextData.length;
                                    console.log(N);

                                        for(var i=N-1;i>N-10;i--){
                                        textData+=" "+TextData[i].values.text;

                                        } */

                        textData=" ugly stop support support support "+" support";

                                        // wordCloud(textData, stopWords,divTag);
                                        WordCloud(textData,stopWords);


                                //    }





      //     });





}




function updateText( new_text, stopWords){

            var width = $("#wordCloud").width();
           // var widthDid = $("news").width();
            var height = $("#wordCloud").height();

                var text={
                                  "width":width,
                                  "height": height,
                                  "padding": {"top":0, "bottom":0, "left":0, "right":0},

                                  "data": [
                                    {
                                      "name": "table",
                                      "values": [ new_text
                                          ],

                                      "transform": [
                                        {
                                          "type": "countpattern",
                                          "field": "data",
                                          "case": "upper",
                                          "pattern": "[\\w']{3,}",
                                          "stopwords": stopWords
                                        },
                                        {
                                          "type": "formula", "field": "angle",
                                          "expr": "[-45, 0, 45][~~(random() * 3)]"
                                        },
                                        {
                                          "type": "formula", "field": "weight",
                                          "expr": "if(datum.text=='VEGA', 600, 300)"
                                        },
                                        {
                                          "type": "wordcloud",
                                          "size": [800, 400],
                                          "text": {"field": "text"},
                                          "rotate": {"field": "angle"},
                                          "font": {"value": "Arial"},
                                          "fontSize": {"field": "count"},
                                          "fontWeight": {"field": "weight"},
                                          "fontScale": [5, 50]
                                        }
                                      ]
                                    }
                                  ],

                                  "scales": [
                                    {
                                      "name": "color",
                                      "type": "ordinal",
                                      "range":["#fc61e2","#7d3070","#511f49"]
                                    }
                                  ],

                                  "marks": [
                                    {
                                      "type": "text",
                                      "from": {"data": "table"},
                                      "properties": {
                                        "enter": {
                                          "x": {"field": "layout_x"},
                                          "y": {"field": "layout_y"},
                                          "angle": {"field": "layout_rotate"},
                                          "font": {"field": "layout_font"},
                                          "fontSize": {"field": "layout_fontSize"},
                                          "fontStyle": {"field": "layout_fontStyle"},
                                          "fontWeight": {"field": "layout_fontWeight"},
                                          "text": {"field": "text"},
                                          "align": {"value": "center"},
                                          "baseline": {"value": "alphabetic"},
                                          "fill": {"scale": "color", "field": "text"}
                                        },
                                        "update": {
                                          "fillOpacity": {"value": 1}
                                        },
                                        "hover": {
                                          "fillOpacity": {"value": 0.5}
                                        }
                                      }
                                    }
                                  ]

                     };


            return text;

}
