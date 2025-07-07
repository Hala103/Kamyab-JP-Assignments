var list = document.getElementById('list');
var editlist = null;

function Add() {
    var input = document.getElementById('input');
   

    if(editlist !== null) {
        editlist.firstChild.textContent = input.value;
        editlist = null;
        input.value = "";
        return;
    }


    var li = document.createElement('li');
    var taskadd = document.createTextNode(input.value);
    li.appendChild(taskadd);
    list.appendChild(li);
    input.value = "";

    //Edit button

    var editbtn = document.createElement('button');
    var editbtntext = document.createTextNode('Edit');
    editbtn.appendChild(editbtntext);
    li.appendChild(editbtn);


    editbtn.classList.add('ebutton');

    editbtn.setAttribute('onclick', 'edit(this)');

    //Del button
    var dltbtn = document.createElement('button');
    var dltbtntext = document.createTextNode('Delete');
    dltbtn.appendChild(dltbtntext);
    li.appendChild(dltbtn);

    dltbtn.classList.add("dbutton")

    dltbtn.setAttribute('onclick', 'delt(this)')
 
}

function clearall() {
    list.innerHTML = "";
}

function delt(element) {
    element.parentNode.remove();
}


function edit(button) {
  var li = button.parentNode;
  var input = document.getElementById('input');
  input.value = li.firstChild.textContent;
  input.focus();
  editlist = li;


    
}




