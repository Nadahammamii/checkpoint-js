function size_font() {
    var optionSize = document.getElementById('option_size').value;
    var textarea = document.getElementById('textarea');
    textarea.style.fontSize = optionSize;

}
function type_font () {
    
    var optionType = document.getElementById('option_type').value;
    console.log(optionType)
    var textarea = document.getElementById('textarea');
    textarea.style.fontFamily = optionType;
}
function stylefont() {
    var textweight = document.getElementById('textarea').style.fontWeight;
    if (textweight === 'bold')
    {
        document.getElementById('textarea').style.fontWeight="normal";
     }
 
    else {
        document.getElementById('textarea').style.fontWeight="bold"; 
    }
 
   
}
function styledecoration() {
    
   var textdeco = document.getElementById('textarea').style.textDecoration;
   if (textdeco === 'underline')
   {document.getElementById('textarea').style.textDecoration="none"; }

   else {document.getElementById('textarea').style.textDecoration="underline"; }


}
function styleitalic() {
  
   var textdeco = document.getElementById('textarea').style.fontWeight;
   if (textdeco === 'italic')
   {document.getElementById('textarea').style.fontStyle="normal"; }

   else {document.getElementById('textarea').style.fontStyle="italic"; }


}

