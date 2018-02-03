let addUser =false;
let deleteUser = false;
let searchUser= false;
<<<<<<< HEAD
//let editUser=false;
=======
let editUser=false;
>>>>>>> 61e366934a0428195dfdf6ef95731e618023a8a7

var search=() =>
{
   addUser = false;
   deleteUser = false;
   searchUser=true;
   editUser=false;
   const box = document.querySelector('#myInput');
<<<<<<< HEAD
   box.addEventListener('keyup',function()
      {
        let value = $(this).val().toLowerCase();
        $("#tableid tr").filter(function()
         {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
=======
   box.addEventListener('keyup', function()
    {
      let value = $(this).val().toLowerCase();
      $("#tableid tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
>>>>>>> 61e366934a0428195dfdf6ef95731e618023a8a7
}
var hide=() =>
{
   addUser = false;
   deleteUser = true;
   searchUser=false;
   editUser=false;
}
var insert=() =>
{
    addUser = true;
    deleteUser = false;
    searchUser= false;
    editUser= false;
}
var edit=() =>
{
 
  alert('Double click on table cell to be edited');
  addUser = false;
  deleteUser = false;
<<<<<<< HEAD
  searchUser=false;
  editUser=true;
  $("td").dblclick(function () 
  { 
    let OriginalContent = $(this).text();
    $(this).addClass("cellEditing");
    $(this).html("<input type='text' value='" /*+ OriginalContent*/ + "' />"); 
    $(this).children().first().focus(); 
    $(this).children().first().keypress(function (e)
     { 
        if (e.which == 13) //unicode for 'enter' button=13 and event.which returns the value of key pressed
          { 
             let newContent = $(this).val(); 
             $(this).parent().text(newContent); 
             $(this).parent().removeClass("cellEditing");
          } 
     });
=======
  searchUser= false;
  editUser= true;
$("td").dblclick(function () 
{ 
  let OriginalContent = $(this).text();
   $(this).addClass("cellEditing");
   $(this).html("<input type='text' value='" /*+ OriginalContent*/ + "' />"); 
   $(this).children().first().focus(); 
   $(this).children().first().keypress(function (e)
    { 
      if (e.which == 13) //unicode for enter button=13 and event.which returns the value of key pressed
       { 
        let newContent = $(this).val(); 
        $(this).parent().text(newContent); 
        $(this).parent().removeClass("cellEditing");
       } 
      });
>>>>>>> 61e366934a0428195dfdf6ef95731e618023a8a7
       $(this).children().first().blur(function()
       {
          $(this).parent().text(OriginalContent);
           $(this).parent().removeClass("cellEditing");
       }); 
  }); 
 }
 
 var final= submitUserAction=() => 
 {
    if(addUser)
     {
             const row=document.createElement('tr');
             let col1=document.createElement('td');
             let col2=document.createElement('td');
             let col3=document.createElement('td');
             const button1 = document.createElement('input');
             button1.setAttribute('type', 'checkbox');
             row.appendChild(button1);
             row.appendChild(col1);
             row.appendChild(col2);
             row.appendChild(col3); 
             col1.innerHTML=document.getElementById('name').value;
             col2.innerHTML=document.getElementById('roll').value;
             col3.innerHTML=document.getElementById('year').value;
             const table=document.getElementById("tableid");
             table.appendChild(row);
        
    }
    if(deleteUser)
    {
        $("#tableid input:checkbox:checked").closest('tr').remove();
    }
    if(searchUser)
    {
      $("#submit_button button:disabled");
    }
    if(editUser)
    {
<<<<<<< HEAD
       $("#edit_button button:disabled");
=======
      $("#submit_button button:disabled");
>>>>>>> 61e366934a0428195dfdf6ef95731e618023a8a7
    }
 }
