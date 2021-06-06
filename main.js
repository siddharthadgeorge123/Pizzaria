menu_list_array=["Chiccken Tandoori Pizza","Veg Supreme pizza","Paneer Tikka pizza"];
function getmenu(){
    var htmldata;
    htmldata="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ '<li>' +menu_list_array[i] + '<li>'
    }
    htmldata=htmldata+"</o1>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="cards"' + '<img src=images/pizzaImg.png"/>' +  menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addM").innerHTML = htmldata;
}