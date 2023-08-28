function f1() {
    //function to make the text bold using DOM method
    document.getElementById("textarea1").style.fontWeight = "bold";
}
  
function f2() {
    //function to make the text italic using DOM method
    document.getElementById("textarea1").style.fontStyle = "italic";
}
  
function f3() {
    //function to make the text alignment left using DOM method
    document.getElementById("textarea1").style.textAlign = "left";
}
  
function f4() {
    //function to make the text alignment center using DOM method
    document.getElementById("textarea1").style.textAlign = "center";
}
  
function f5() {
    //function to make the text alignment right using DOM method
    document.getElementById("textarea1").style.textAlign = "right";
}
  
function f6() {
    //function to make the text in Uppercase using DOM method
    document.getElementById("textarea1").style.textTransform = "uppercase";
}
  
function f7() {
    //function to make the text in Lowercase using DOM method
    document.getElementById("textarea1").style.textTransform = "lowercase";
}
  
function f8() {
    //function to make the text capitalize using DOM method
    document.getElementById("textarea1").style.textTransform = "capitalize";
}
function f10() {
    // Function to make the text underlined using DOM method
    document.getElementById("textarea1").style.textDecoration = "underline";
}
 
function f11() {
    var fontSelector = document.getElementById("fontSelector");
    var selectedFont = fontSelector.value;
    
    var textEditor = document.getElementById("textarea1");
    
    // Apply the chosen font-family directly to the content
    textEditor.style.fontFamily = selectedFont;
}
function applyColor() {
    var colorPicker = document.getElementById("colorPicker");
    var selectedColor = colorPicker.value;
    
    var textEditor = document.getElementById("textarea1");
    
    // Apply the chosen color directly to the content
    textEditor.style.color = selectedColor;
}

function applyHighlight() {
    var highlightPicker = document.getElementById("highlightPicker");
    var selectedHighlight = highlightPicker.value;
    
    var textEditor = document.getElementById("textarea1");
    
    // Apply the chosen highlight color directly to the content
    textEditor.style.backgroundColor = selectedHighlight;
}

function undo() {
    document.execCommand("undo", false, null);
}

function redo() {
    document.execCommand("redo", false, null);
}





function f9() {
    //function to make the text back to normal by removing all the methods applied 
    //using DOM method
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").style.textDecoration = "underline";
    document.getElementById("textarea1").style.color = "black";
    document.getElementById("textarea1").style.backgroundColor = "transparent";
    document.getElementById("textarea1").style.fontsize = "inherit";
    
    document.getElementById("textarea1").value = " ";
}


