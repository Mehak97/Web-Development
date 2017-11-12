var addUser =false;
var deleteUser = false;
//var updateUser = false;
var searchUser= false;
var editUser=false;

function search()
{
   addUser = false;
   deleteUser = false;
   searchUser=true;
   editUser=false;
   $("#submit_button button:disabled");
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tableid tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
}
function hide()
{
  addUser = false;
  deleteUser = true;
   //updateUser = false;
   searchUser=false;
   editUser=false;
   // $('td:nth-child(4)').hide();
   // $('td:nth-child(3)').hide();
}
function insert()
{
    addUser = true;
    deleteUser = false;
    //updateUser = false;
    searchUser=false;
    editUser=false;
}
function edit()
{
  addUser = false;
  deleteUser = false;
  searchUser=false;
  editUser=true;
$("td").dblclick(function () 
{ 
  var OriginalContent = $(this).text();
   $(this).addClass("cellEditing");
   $(this).html("<input type='text' value='" /*+ OriginalContent*/ + "' />"); 
   $(this).children().first().focus(); 
   $(this).children().first().keypress(function (e)
    { 
      if (e.which == 13) //unicode for enter button=13 and event.which returns the value of key pressed
       { 
        var newContent = $(this).val(); 
        $(this).parent().text(newContent); 
        $(this).parent().removeClass("cellEditing");
       } 
      });
       $(this).children().first().blur(function()
       {
          $(this).parent().text(OriginalContent);
           $(this).parent().removeClass("cellEditing");
         }); 
        }); 
 }
 function submitUserAction() 
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
    /*if(searchUser)
    {
      $("#submit_button button:disabled");
    }*/
    if(editUser)
    {
     
    }
 }